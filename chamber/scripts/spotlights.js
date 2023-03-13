 // ChatGPT helped me understand why I was getting errors with my code in this JS file.  And helped me figure out how to step logically through getting 3 random gold memebers and getting the corresponding API information to display correctly. 


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

    const spotlight1 = document.getElementById('spotlight1');
    const spotlight2 = document.getElementById('spotlight2');
    const spotlight3 = document.getElementById('spotlight3');
    
    // Set the contents of each div to the specific member's information

    // If member has an image url then create and img element and set it's attributes.  
    if (randomMembers[0].imageurl) {
      const spotlight1Image = document.createElement('img');
      // set the image attributes
      spotlight1Image.setAttribute('src', randomMembers[0].imageurl);
      spotlight1Image.setAttribute('alt', randomMembers[0].name);
      spotlight1.appendChild(spotlight1Image);
    }

    // create the elements and append the member information to the div for name, phone, address
    spotlight1.appendChild(document.createElement('h3')).textContent = randomMembers[0].name;
    spotlight1.appendChild(document.createElement('p')).textContent = randomMembers[0].phone;
    spotlight1.appendChild(document.createElement('p')).textContent = randomMembers[0].address;
    
    // If member has website info then create an "a" element and set it's attributes.
     if (randomMembers[0].website) {
        const spotlight1Website = document.createElement('a');
        // set the website attributes
        spotlight1Website.setAttribute("href", randomMembers[0].website);
        spotlight1Website.textContent = randomMembers[0].website;
        spotlight1.appendChild(spotlight1Website);   
      }
    
    // If member has an image url then create and img element and set it's attributes. 
    if (randomMembers[1].imageurl) {
      const spotlight2Image = document.createElement('img');
      // set the image attributes
      spotlight2Image.setAttribute('src', randomMembers[1].imageurl);
      spotlight2Image.setAttribute('alt', randomMembers[1].name);
      spotlight2.appendChild(spotlight2Image);
    }
    // create the elements and append the member information to the div for name, phone, address.
    spotlight2.appendChild(document.createElement('h3')).textContent = randomMembers[1].name;
    spotlight2.appendChild(document.createElement('p')).textContent = randomMembers[1].phone;
    spotlight2.appendChild(document.createElement('p')).textContent = randomMembers[1].address;

    // If member has website info then create an "a" element and set it's attributes.
    if (randomMembers[1].website) {
        const spotlight2Website = document.createElement('a');
        // set the website attributes
        spotlight2Website.setAttribute("href", randomMembers[1].website);
        spotlight2Website.textContent = randomMembers[1].website;
        spotlight2.appendChild(spotlight2Website);   
      }
    
    // If member has an image url then create and img element and set it's attributes. 
    if (randomMembers[2].imageurl) {
      const spotlight3Image = document.createElement('img');
      // set the image attributes
      spotlight3Image.setAttribute('src', randomMembers[2].imageurl);
      spotlight3Image.setAttribute('alt', randomMembers[2].name);
      spotlight3.appendChild(spotlight3Image);
    }
    // create the elements and append the member information to the div for name, phone, address. 
    spotlight3.appendChild(document.createElement('h3')).textContent = randomMembers[2].name;
    spotlight3.appendChild(document.createElement('p')).textContent = randomMembers[2].phone;
    spotlight3.appendChild(document.createElement('p')).textContent = randomMembers[2].address;

    // If member has website info then create an "a" element and set it's attributes.
    if (randomMembers[2].website) {
        const spotlight3Website = document.createElement('a');
        // set the website attributes
        spotlight3Website.setAttribute("href", randomMembers[2].website);
        spotlight3Website.textContent = randomMembers[2].website;
        spotlight3.appendChild(spotlight3Website);   
      }
}

getGoldMemberData()

