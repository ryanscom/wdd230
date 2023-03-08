
const url = 'https://ryanscom.github.io/wdd230/chamber/json/data.json';

// async function to fetch member data from JSON file and call displayMembers function with the data
async function getMemberData() {
  // Fetch data from URL
  const response = await fetch(url);
  // Convert response data to JSON format
  const data = await response.json();
  // Call displayMembers function and pass in the Members data
  displayMembers(data.Members);
}

// Function to display member data on the web page
const displayMembers = (members) => {
  // Select div with class 'infoCards' to add the member cards to
  const cards = document.querySelector('div.infoCards');

  // Counter to keep track of the card styling class
  let i = 1;

  // Loop through each member object in the array
  members.forEach((member) => {
    // Create HTML elements for the member card
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let phone = document.createElement('p');
    let detailsDiv = document.createElement('div');
    let address = document.createElement('p');
    let website = document.createElement('a');
    let logo = document.createElement('img');
    let moreBtn = document.createElement('button');
    let lessBtn = document.createElement('button');

    // Set attributes and classes for the buttons and card
    moreBtn.setAttribute("id", "more");
    lessBtn.setAttribute("id", "less");
    moreBtn.classList.add('moreBtn');
    lessBtn.classList.add('lessBtn');
    lessBtn.classList.add('hide-detailsBtn');
    card.classList.add(`CardStyling${i}`);
    detailsDiv.classList.add('less');
    detailsDiv.classList.add(`hideDiv${i}`);

    // Set text content and attributes for the card elements
    h2.textContent = `${member.name} `;
    address.textContent = `${member.address} `;
    phone.textContent = `${member.phone} `;
    website.textContent = `${member.website} `;
    moreBtn.textContent = `${'more...'} `;
    lessBtn.textContent = `${'less...'} `;
    logo.setAttribute('src', member.imageurl);
    logo.setAttribute('alt', `Logo For ${member.name} / ${member.website} `);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '100');
    logo.setAttribute('height', '80');
    website.setAttribute("href", member.website);

    // Append elements to the card
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(phone);
    detailsDiv.appendChild(address);
    detailsDiv.appendChild(website);
    card.appendChild(detailsDiv);
    card.appendChild(moreBtn);
    card.appendChild(lessBtn);
    cards.appendChild(card);
    i++;

    // Select buttons for showing/hiding card details
    const mBtnArray = document.querySelectorAll("#more");
    const lBtnArray = document.querySelectorAll("#less");
    
        // Create arrays to hold card details and card styling classes
        const displayArray = [];
        const displayCardStylingArray = [];

        // Loop through each card and push the card details and styling class to the arrays
        for (let i = 1; i <= 15; i++) {
          const displayStuff = document.querySelector(`.hideDiv${i}`);
          const displayCardStyling = document.querySelector(`.CardStyling${i}`);
          displayArray.push(displayStuff);
          displayCardStylingArray.push(displayCardStyling);
        }

         // Add event listeners to the 'more' buttons to show card details and change card styling
        for (let i = 0; i < mBtnArray.length; i++) {
          mBtnArray[i].addEventListener("click", () => {
            displayArray[i].classList.add("more");
            displayArray[i].classList.remove("less");
            displayCardStylingArray[i].classList.add('doCardStyling');
            displayCardStylingArray[i].classList.remove('dontCardStyling');
            mBtnArray[i].classList.add("hide-detailsBtn");
            lBtnArray[i].classList.remove("hide-detailsBtn");
          });
        }
    
        for (let i = 0; i < lBtnArray.length; i++) {
            lBtnArray[i].addEventListener("click", () => {
              displayArray[i].classList.add("less");
              displayArray[i].classList.remove("more");
              displayCardStylingArray[i].classList.add('dontCardStyling');
              displayCardStylingArray[i].classList.remove('doCardStyling');
              lBtnArray[i].classList.add("hide-detailsBtn");
              mBtnArray[i].classList.remove("hide-detailsBtn");
            });
          }
  })
}

// get html tags
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".hide");

gridbutton.addEventListener("click", () => {
  // add "grid" class to display element
  display.classList.add("grid");
  // if display element also has "list" class, toggle visibility of grid/list icons
  if (display.classList.contains('list')){ 
    const gridIcons = gridbutton.querySelectorAll('.directorySwitchIcon');
    const listIcons = listbutton.querySelectorAll('.directorySwitchIcon');
    gridIcons.forEach(icon => icon.classList.toggle('hidden'));
    listIcons.forEach(icon => icon.classList.toggle('hidden'))};
  // remove "list" class from display element
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  // add "list" class to display element
  display.classList.add("list");
  // if display element also has "grid" class, toggle visibility of grid/list icons
  if (display.classList.contains('grid')) {
    const listIcons = listbutton.querySelectorAll('.directorySwitchIcon');
    const gridIcons = gridbutton.querySelectorAll('.directorySwitchIcon');
    gridIcons.forEach(icon => icon.classList.toggle('hidden'));
    listIcons.forEach(icon => icon.classList.toggle('hidden'))};
  // remove "grid" class from display element 
  display.classList.remove("grid");
}

getMemberData();