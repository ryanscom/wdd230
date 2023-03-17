
// Footer Date *****************************************************************
const date1 = document.querySelector("#date1");
date1.innerHTML = new Date().getFullYear();

const date2 = document.querySelector("#date2");
date2.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");

//Number of visits **************************************************************
const numVisitsDisplay = document.querySelector('#numberVisits');
let numVisits = Number(window.localStorage.getItem('visitsLocStorage'));

if (numVisits !== 0) {
    numVisitsDisplay.textContent = numVisits;

}else {
    numVisitsDisplay.textContent = `This is your first visit!`
}
numVisits++;
localStorage.setItem('visitsLocStorage', numVisits);






