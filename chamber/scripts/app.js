
//Toggle menu icon**************************************************************
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// Header Date *****************************************************************
const headerdate = document.querySelector("#headerdate"); 

const now = Date.now(); 
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

headerdate.innerHTML = `Today is ${fulldate}`;


// Footer Date *****************************************************************
const date1 = document.querySelector("#date1");
date1.innerHTML = new Date().getFullYear();

const date2 = document.querySelector("#date2");
date2.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");



function responsiveMenu(){
    const icon = document.querySelector('.icon');
    const smallHead = document.querySelector('.smallHead')
    const smallMenu = document.querySelector('.smallMenu')
    icon.addEventListener('click', () => {
        smallHead.classList.toggle('displayNone')
        smallMenu.classList.toggle('displayNone');
    })
}

responsiveMenu()





