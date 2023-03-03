

// Show more or less details in the list view
const moreBtn = document.querySelector("#more");
const lessBtn = document.querySelector("#less");
const displayStuff = document.querySelector(".detailsDiv");

moreBtn.addEventListener("click", () => {
	displayStuff.classList.add("more");
	displayStuff.classList.remove("less");
});

lessBtn.addEventListener("click", showList);

function showList() {
	displayStuff.classList.add("less");
	displayStuff.classList.remove("more");
}

// function toggleCardDetails() {
//     document.querySelector("hideDiv").classList.toggle("open");
//     document.querySelector("moreBtn").classList.toggle("open");
// }

// const x = document.getElementById("moreBtn")
// x.onclick = toggleCardDetails;