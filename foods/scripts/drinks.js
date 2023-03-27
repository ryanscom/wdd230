

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

// Call the getDrinkApi function to retrieve the data
getDrinkApi();

// This function takes an array of fruit information and displays it on the page.
const displayInfo = (information) => {
    // Get the three select elements on the page by their IDs.
    const fruitOne = document.querySelector('#fruitOne');
    const fruitTwo = document.querySelector('#fruitTwo');
    const fruitThree = document.querySelector('#fruitThree');

    // Loop through each fruit in the array and create a set of options for it in each select element.
    information.forEach((info) => {
        createOptions(info, fruitOne, fruitTwo, fruitThree);
    });

    // Add an event listener to the form to update the information displayed on the page when the form is submitted.
    const form = document.getElementById('drinkForm');
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting and refreshing the page.
        event.preventDefault();
        // Update the information displayed on the page.
        updateInfo();
        // Get the selected options from each select element and add them to an array.
        const selectElements = document.querySelectorAll("select");
        const selectedOptions = [];
        for (let i = 0; i < selectElements.length; i++) {
            const selectElement = selectElements[i];
            const selectedOption = selectElement.options[selectElement.selectedIndex].value;
            selectedOptions.push(selectedOption);
        }
         // Display the selected fruits on the page.
        displaySelectedFruits(selectedOptions, information);
         // Scroll to the bottom of the page.
        scrollToBottom();
    });
};

// This function creates a set of options for a fruit in each of the three select elements.
const createOptions = (info, fruitOne, fruitTwo, fruitThree) => {
    // Create three new option elements for the fruit.
    const fruitOneElement = document.createElement('option');
    const fruitTwoElement = document.createElement('option');
    const fruitThreeElement = document.createElement('option');

    // Set the text content and value attributes of each option element.
    fruitOneElement.textContent = info.name;
    fruitTwoElement.textContent = info.name;
    fruitThreeElement.textContent = info.name;
    fruitOneElement.setAttribute('value', info.name);
    fruitTwoElement.setAttribute('value', info.name);
    fruitThreeElement.setAttribute('value', info.name);

    // Create a new option group for each select element.
    const fruitOneGroup = document.createElement('option');
    const fruitTwoGroup = document.createElement('option');
    const fruitThreeGroup = document.createElement('option');

    // append the option elements to the group element
    fruitOneGroup.appendChild(fruitOneElement);
    fruitTwoGroup.appendChild(fruitTwoElement);
    fruitThreeGroup.append(fruitThreeElement);
    
    // append the group element to the select elements.
    fruitOne.appendChild(fruitOneGroup);
    fruitTwo.appendChild(fruitTwoGroup);
    fruitThree.appendChild(fruitThreeGroup);
};

const updateInfo = () => {
    
    const now = Date.now();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

    const thankYou = document.getElementById('thankYou');
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userInstructions = document.getElementById('userInstructions').value;
    const userPhone = document.getElementById('userPhone').value;

    const name = document.getElementById('firstName')
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const message = document.getElementById('specialInstructions');
    const theOrderDate = document.getElementById('dateOfOrder');

    thankYou.innerHTML = `<strong>Thank you!</strong>`
    name.innerHTML = `<strong>Name:</strong> ${userName}`
    phone.innerHTML = `<strong>Phone:</strong> ${userPhone}`
    email.innerHTML = `<strong>Email:</strong> ${userEmail}`
    message.innerHTML = `<strong>Instructions:</strong> ${userInstructions}`
    theOrderDate.innerHTML = `<strong>Order placed on:</strong> ${fulldate}`
};
const displaySelectedFruits = (selectedOptions, information) => {
    // Create empty arrays to store the nutrition information of the selected fruits.
    const selectedFruits = [];
    const selecCarbs = []
    const selecFat = []
    const selecProtein = []
    const selecCalories = []
    const selecSugar = []
    const selecNames = []

    // Get the drink choice element from the DOM.
    const drinkChoice = document.getElementById('drinkName');
    // Loop through the array of selected fruit names.
    for (let i = 0; i < selectedOptions.length; i++) {
        // Find the fruit object with the corresponding name in the information array, and push it to the selectedFruits array.
        const selectedFruit = information.find(fruit => fruit.name === selectedOptions[i]);
        selectedFruits.push(selectedFruit);
    };
    
    // Loop through the array of selected fruit objects.
    for (let j = 0; j < selectedFruits.length; j++) {
        // Get the nutrition information of the current fruit object.
        const selectedFruit = selectedFruits[j];
        const nutrition = selectedFruit.nutritions;

        // Extract the specific nutrition information from the fruit object.
        const fruitsName = selectedFruit.name
        const carbs = nutrition.carbohydrates
        const fat = nutrition.fat
        const protein = nutrition.protein
        const calorie = nutrition.calories
        const sugar = nutrition.sugar
        
        // Get the result element from the DOM and clear its contents.
        const result = document.getElementById('result');
        result.innerHTML = ''

        // Push the specific nutrition information to their respective arrays.
        selecNames.push(fruitsName)
        selecCarbs.push(carbs)
        selecSugar.push(sugar)
        selecFat.push(fat)
        selecProtein.push(protein)
        selecCalories.push(calorie)
        
    }

// Get elements by their IDs and store them in variables.
const totalCarbs = document.getElementById('totalCarb');   
const totalFat = document.getElementById('totalFat');
const totalProtein = document.getElementById('totalProtein');
const totalCalories = document.getElementById('totalCalories');
const totalSugar = document.getElementById('totalSugar');

// Calculate the sum of selected elements.
let sumCarbs = sum(selecCarbs);
let sumFat = sum(selecFat);
let sumProtein = sum(selecProtein);
let sumCalories = sum(selecCalories);
let sumSugar = sum(selecSugar);

// Set the inner HTML of each element to display the calculated values.
drinkName.innerHTML = `<strong>Drink:</strong> <span>${selecNames.join(' ')}</span>`
totalCarbs.innerHTML = `<strong>Total carbs:</strong> ${sumCarbs}g`
totalFat.innerHTML = `<strong>Total fat:</strong> ${sumFat}g`
totalProtein.innerHTML = `<strong>Total protein:</strong> ${sumProtein}g`
totalCalories.innerHTML = `<strong>Total calories:</strong> ${sumCalories}`
totalSugar.innerHTML = `<strong>Total sugar:</strong> ${sumSugar}g`            
   
// Make the hidden receipt viewable
// select element we want to remove the hidden class from
const myElement = document.querySelector('#hiddenReceipt');

// Remove the "hidden" class from the element
myElement.classList.remove('hidden');
}

// A function that sums up the values in an array.
function sum(selection) {
    let num = 0;
    for (let i = 0; i < selection.length; i++) {
      num += selection[i];
    }
    return num.toFixed(1);
  }

// A function that scrolls the window to the bottom of the page.
const scrollToBottom = function() {
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






