//Toggle menu icon****************************************************
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    // console.log("It Worked!!!");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// header Date ********************************************************

const headerdate = document.querySelector("#headerdate");
headerdate.innerHTML = new Date().getFullYear();

// Footer Date ********************************************************
const date1 = document.querySelector("#date1");
date1.innerHTML = new Date().getFullYear();

// Getting the last modified date
const date2 = document.querySelector("#date2");
date2.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US");


