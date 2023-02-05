
//Toggle Menu Icon**************************************************************
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


// Toggel Meeting Ad ************************************************************

const date = new Date()
const weekDate = date.getDay()
let ad = document.querySelector("#ad");

if (weekDate === 6 || weekDate === 2 ) {
    ad.style.display = "flex";
}
else {
    ad.style.display = "none";
}

// Close Meeting Ad *************************************************************
const closeBtn = document.querySelector("#closeBtn"); 
closeBtn.addEventListener('click', () => {
    ad.remove(ad);
});
