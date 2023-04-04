
// Define the URL where the data is located
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"


// Asynchronous function to get the drink API
async function getDrinkApi() {
    try {
        const response = await fetch(url); // Fetch the data from the URL
        if (response.ok) {
            const data = await response.json(); // If the response is OK, parse the data to JSON format
            displayInfo(data); // Call the displayInfo function to display the data
        } else {
        throw Error(await response.text()); // If there's an error, throw an error message
        }
    } catch (error) {
    console.log(error); // Catch any errors and log them to the console
    }
}

// // Call the getDrinkApi function to retrieve the data
getDrinkApi();


// This function receives an array of objects representing fruits and adds options to the fruit select inputs in the HTML.
const displayInfo = (information) => {


    // This array destructuring assigns the first three elements of an array of three strings containing selectors for the fruit select inputs in the HTML.
    const [fruitOne, fruitTwo, fruitThree] = ["#fruitOne", "#fruitTwo", "#fruitThree"]
        .map(id => document.querySelector(id));
        

    // This function creates option elements in each of the fruit select inputs with the name and value of each fruit object in the `information` array.

    const createOptions = (info) => {
        [fruitOne, fruitTwo, fruitThree].forEach(fruit => {
          const option = document.createElement('option');
          option.textContent = info.name;
          option.setAttribute('value', info.name);
          option.setAttribute('data-name', info.name); // Add a data-name attribute to each option with the name of the fruit object
          fruit.appendChild(option);
        });
      };




    // const createOptions = (info) => {
    //     [fruitOne, fruitTwo, fruitThree].forEach(fruit => {
    //         const option = document.createElement('option');
    //         option.textContent = info.name;
    //         option.setAttribute('value', info.name);
    //         option.setAttribute('data-name', info.name); // Add a data-name attribute to each option with the name of the fruit object
    //         const group = document.createElement('optgroup');
    //         group.appendChild(option);
    //         fruit.appendChild(group);
    //     });
    // };

    // This method call iterates over each fruit object in the `information` array and calls the `createOptions` function on it.
    information.forEach(createOptions);

    // This line assigns the form element with the id `drinkForm` to the variable `form`.
    const form = document.getElementById('drinkForm');

    // This event listener is added to the `form` element to prevent it from submitting when the submit button is clicked.
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const selectElements = document.querySelectorAll("select");
        // Get an array of the selected option elements, not just their values
        const selectedOptions = Array.from(selectElements, selectElement => selectElement.options[selectElement.selectedIndex]); 

        // Use the map and includes methods to find the fruit objects whose names match the selected options
        const selectedFruits = information.filter(fruit => selectedOptions.map(opt => opt.getAttribute('value')).includes(fruit.name)); 

        // Extract the data-name attribute for each selected option
        const selectedFruitNames = selectedOptions.map(opt => opt.getAttribute('data-name')); 
        
        // Display the selected fruit names
        const selectedFruitNamesText = selectedFruitNames.join(', ');
     
        
        // This line creates an array of objects containing nutrition information for each selected fruit object.
        const selectedFruitsInfo = selectedFruits.map(fruit => {
            const nutritions = fruit.nutritions;
            const [name, carbs, fat, protein, calories, sugar] = [fruit.name, nutritions.carbohydrates, nutritions.fat, nutritions.protein, nutritions.calories, nutritions.sugar];
            return {name, carbs, fat, protein, sugar, calories};
        });

        // This line selects the element with the id `result` and clears its contents.
        const result = document.getElementById('result');
        result.innerHTML = '';

        // This line initializes an array of zeros with the same length as the nutrition item labels.
        const totalValues = [0, 0, 0, 0, 0];

        // This method call iterates over each selected fruit object and for each one, adds its nutrition information to `totalValues` and creates HTML elements to display the nutrition information.
        selectedFruitsInfo.forEach(({name, carbs, fat, protein, calories, sugar}) => {
            const nutritionItems = [
                {label: 'Total Carbohydrates', value: carbs},
                {label: 'Total Fat', value: fat},
                {label: 'Total Protein', value: protein},
                {label: 'Total Calories', value: calories},
                {label: 'Total Sugar', value: sugar},
            ];
        
            // Loop through each item in the nutrition list and add up the values
            nutritionItems.forEach(({label, value}, index) => {
                totalValues[index] += value;
            });
        });

        const nutritionLabels = ['Total Carbohydrates', 'Total Fat', 'Total Protein', 'Total Calories', 'Total Sugar'];

        // Loop through the nutrition items and create a new list item for each one, using the total value from the totalValues array
        nutritionLabels.forEach((label, index) => {
            const item = document.createElement('li');
            item.setAttribute('data-nutrition', label);
            item.setAttribute('data-value', totalValues[index].toFixed(2));
            item.textContent = `${label}: ${totalValues[index].toFixed(2)}`;
            result.appendChild(item);
        });

       // Get the current date and format it using the "full" date style in US English locale
        const now = new Date();
        const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

        // Get the elements with the relevant IDs and retrieve their values
        const thankYou = document.getElementById('thankYou');
        const userName = document.getElementById('userName').value;
        const userEmail = document.getElementById('userEmail').value;
        const userInstructions = document.getElementById('userInstructions').value;
        const userPhone = document.getElementById('userPhone').value;

        // Get the elements where the data is to be displayed
        const name = document.getElementById('firstName');
        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        const message = document.getElementById('specialInstructions');
        const drinkName = document.getElementById('drinkName');
        const theOrderDate = document.getElementById('dateOfOrder');

        // Display the relevant information in the corresponding HTML elements
        thankYou.innerHTML = `<strong>Thank you!</strong>`
        name.innerHTML = `<strong>Name:</strong> ${userName}`
        phone.innerHTML = `<strong>Phone:</strong> ${userPhone}`
        email.innerHTML = `<strong>Email:</strong> ${userEmail}`
        message.innerHTML = `<strong>Instructions:</strong> ${userInstructions}`
        drinkName.innerHTML = `<strong>Drink:</strong> ${selectedFruitNamesText}`
        theOrderDate.innerHTML = `<strong>Order placed on:</strong> ${fulldate}`

        // Scroll to the footer section of the page with a smooth scrolling effect
        const footer = document.querySelector('footer');
        footer.scrollIntoView({behavior: 'smooth'});
        

        // Make the hidden receipt viewable
        // select element we want to remove the hidden class from
        const myElement = document.querySelector('#hiddenReceipt');

        // Remove the "hidden" class from the element
        myElement.classList.remove('hidden');
    });
};


// A function that scrolls the window to the bottom of the page.
const scrollIntoView = function() {
    const element = document.querySelector('.receipt')
    const position = element.offsetTop
    window.scrollTo({
        behavior: 'smooth',
        top: position   
    });
    return position
}


// Get the current user's specialty drink count from local storage or initialize it to 0
let specialtyDrinkCount = localStorage.getItem('specialtyDrinkCount') || 0;

// Get the parent node where the child node will be added
const drinksMade = document.getElementById('drinksMadeSection');

// Display the count on the information card
const drinkCard = document.createElement('p');

// drinkCard.classList.add('info-card');
drinkCard.innerHTML = `You have made <strong>${specialtyDrinkCount}</strong> specialty drinks!`;

// Add the information card to the page
drinksMade.appendChild(drinkCard);



// Update the count when the form is submitted
const form = document.querySelector('form');
form.addEventListener('submit', () => {
    specialtyDrinkCount++;
    localStorage.setItem('specialtyDrinkCount', specialtyDrinkCount);

    // drinkCard.classList.add('info-card');
    drinkCard.innerHTML = `You have made <strong>${specialtyDrinkCount}</strong> specialty drinks!`;

    // Add the information card to the page
    drinksMade.appendChild(drinkCard);
});






