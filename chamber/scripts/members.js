// Directory JSON pull ***********************************************************

const url = 'https://ryanscom.github.io/wdd230/chamber/json/data.json';

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.Members); 
    displayMembers(data.Members);
}

getMemberData();



// link.setAttribute("target", "_blank");

const displayMembers = (members) => {
    const cards = document.querySelector('div.infoCards'); // select the output container element

    members.forEach((member) => {
        // Create elements to add to the div.infoCards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let phone = document.createElement('p');
        let detailsDiv = document.createElement('div')
        let address = document.createElement('p');
        let website = document.createElement('a');
        let logo = document.createElement('img');

        let moreBtn = document.createElement('button')
        let lessBtn = document.createElement('button')


        moreBtn.setAttribute("id", "moreBtn")
        lessBtn.setAttribute("id", "lessBtn")
        // Add class to button
        // moreBtn.classList.add('more');
        // lessBtn.classList.add('less');
        moreBtn.classList.add('moreBtn');
        lessBtn.classList.add('lessBtn');

        detailsDiv.classList.add('more')

        // Add class to div
        detailsDiv.classList.add('hideDiv');

        // Add text content
        h2.textContent = `${member.name} `;
        address.textContent = `${member.address} `;
        phone.textContent = `${member.phone} `;
        website.textContent = `${member.website} `;
        logo.textContent = `${member.imageurl} `;
        moreBtn.textContent = `${'more...'} `;
        lessBtn.textContent = `${'less...'} `;

        // Build the logo by setting all the relevant attributes
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `Logo For ${member.name} / ${member.website} `);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '80');

        // Build website link
        website.setAttribute("href", member.website)

        
        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(phone);
        card.appendChild(moreBtn);
        card.appendChild(lessBtn);
        detailsDiv.appendChild(address);
        detailsDiv.appendChild(website);
        card.appendChild(detailsDiv);
        // card.appendChild(address);
        // card.appendChild(website);

        cards.appendChild(card);
    } // end of forEach loop
    )} // end of function expression


// Change view between gid and list
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".hide");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

// Show more or less details in the list view
const mBtn = document.querySelector("#moreBtn");
const lBtn = document.querySelector(".lessBtn");
const displayStuff = document.querySelector(".hideDiv");

mBtn.addEventListener("click", () => {
	displayStuff.classList.add("more");
	displayStuff.classList.remove("less");
});

lBtn.addEventListener("click", showDetails);

function showDetails() {
	displayStuff.classList.add("less");
	displayStuff.classList.remove("more");
}