
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


// Toggel Meeting Ad for Specific days of the week******************************
const date = new Date()
const weekDate = date.getDay()
let ad = document.querySelector("#ad");

if (weekDate === 1 || weekDate === 2 ) {
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


// Image loading ****************************************************************
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src")
    };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach(img => {
        observer.observe(img)
    });
}else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    })
}

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