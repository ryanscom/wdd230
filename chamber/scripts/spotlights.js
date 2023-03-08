 
const url = 'https://ryanscom.github.io/wdd230/chamber/json/data.json';

// function to get member data from json file
async function getGoldMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // Filter the members that are Gold level
    const goldMembers = data.Members.filter(member => member.level === 'Gold');

    // Shuffle the goldMembers array
    goldMembers.sort(() => Math.random() - 0.5);

    // Get the first three shuffled members
    const randomMembers = goldMembers.slice(0, 3);

    // Get the divs to display the members
    const spotlight1 = document.getElementById('spotlight1');
    const spotlight2 = document.getElementById('spotlight2');
    const spotlight3 = document.getElementById('spotlight3');

    // Set the contents of each div to the respective member's information
    spotlight1.innerHTML = `
    <img>${randomMembers[0].imageurl ? `<img src="${randomMembers[0].imageurl}" alt="${randomMembers[0].name}">` : ''}
    <h3>${randomMembers[0].name}</h3>
    <p>${randomMembers[0].phone}</p>
    <p>${randomMembers[0].address}</p>
    <a>${randomMembers[0].website}</a>
    `;

    spotlight2.innerHTML = `
    <img>${randomMembers[1].imageurl ? `<img src="${randomMembers[1].imageurl}" alt="${randomMembers[1].name}">` : ''}
    <h3>${randomMembers[1].name}</h3>
    <p>${randomMembers[1].phone}</p>
    <p>${randomMembers[1].address}</p>
    <a>${randomMembers[1].website}</a>
    `;

    spotlight3.innerHTML = `
    <img>${randomMembers[2].imageurl ? `<img src="${randomMembers[2].imageurl}" alt="${randomMembers[2].name}">` : ''}
    <h3>${randomMembers[2].name}</h3>
    <p>${randomMembers[2].phone}</p>
    <p>${randomMembers[2].address}</p>
    <a>${randomMembers[2].website}</a>
    `;
}

getGoldMemberData()

