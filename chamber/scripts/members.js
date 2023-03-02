// Directory JSON pull ***********************************************************

const url = 'https://ryanscom.github.io/wdd230/chamber/json/data.json';

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.Members); 
    displayMembers(data.Members);
}

getMemberData();

const displayMembers = (members) => {
    const cards = document.querySelector('div.infoCards'); // select the output container element

    members.forEach((member) => {
        // Create elements to add to the div.infoCards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let logo = document.createElement('img');

        // Add content
        h2.textContent = `${member.name} `;
        address.textContent = `${member.address} `;
        phone.textContent = `${member.phone} `;
        website.textContent = `${member.website} `;
        logo.textContent = `${member.imageurl} `;

        // Build the logo by setting all the relevant attributes
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `Logo For ${member.name} / ${member.website} `);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '80');

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    } // end of forEach loop
    )} // end of function expression
