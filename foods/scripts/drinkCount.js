// Get the current user's specialty drink count from local storage or initialize it to 0
let specialtyDrinkCount = localStorage.getItem('specialtyDrinkCount') || 0;

// Get the parent node where the child node will be added
const drinksMade = document.getElementById('drinksMadeSection');

// Display the count on the information card
const drinkCard = document.createElement('p');
// drinkCard.classList.add('info-card');
drinkCard.innerHTML = `You have made ${specialtyDrinkCount} specialty drinks!`;

// Add the information card to the page
drinksMade.appendChild(drinkCard);
