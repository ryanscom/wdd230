 
const url = 'https://ryanscom.github.io/wdd230/chamber/json/data.json';

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.Members);
}

const displayMembers = (members) => {
  const cards = document.querySelector('div.infoCards');

  let i = 1;

  members.forEach((member) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let phone = document.createElement('p');
    let detailsDiv = document.createElement('div');
    let address = document.createElement('p');
    let website = document.createElement('a');
    let logo = document.createElement('img');
    let moreBtn = document.createElement('button');
    let lessBtn = document.createElement('button');

    moreBtn.setAttribute("id", "more");
    lessBtn.setAttribute("id", "less");
    moreBtn.classList.add('moreBtn');
    lessBtn.classList.add('lessBtn');
    lessBtn.classList.add('hide-detailsBtn');
    // card.classList.add('openedCardStyling');
    detailsDiv.classList.add('less');
    detailsDiv.classList.add(`hideDiv${i}`);

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

    const mBtnArray = document.querySelectorAll("#more");
    const lBtnArray = document.querySelectorAll("#less");
    
        const displayArray = [];
        for (let i = 1; i <= 15; i++) {
          const displayStuff = document.querySelector(`.hideDiv${i}`);
          displayArray.push(displayStuff);
        }
      
        for (let i = 0; i < mBtnArray.length; i++) {
          mBtnArray[i].addEventListener("click", () => {
            displayArray[i].classList.add("more");
            displayArray[i].classList.remove("less");
            card.classList.add('openedCardStyling');
            mBtnArray[i].classList.add("hide-detailsBtn");
            lBtnArray[i].classList.remove("hide-detailsBtn");
          });
        }
    
        for (let i = 0; i < lBtnArray.length; i++) {
            lBtnArray[i].addEventListener("click", () => {
              displayArray[i].classList.add("less");
              displayArray[i].classList.remove("more");
              card.classList.remove('openedCardStyling');
              lBtnArray[i].classList.add("hide-detailsBtn");
              mBtnArray[i].classList.remove("hide-detailsBtn");
            });
          }
  })
}

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

getMemberData();
