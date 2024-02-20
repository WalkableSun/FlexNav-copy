var tabs = document.querySelector("nav a");
console.log(tabs[0]);
console.log(tabs.length);

var tabs = document.querySelectorAll("nav a");

const tabs = document.querySelectorAll("nav a");

function makeActive(event) {
    event.preventDefault();
    console.log(event.target.href);
    makeInactive();
    event.target.classList.add("active");
  
    if (event.target.href.includes("cuisines")) {
        contentPara.innerHTML = cuisines;
      } else if (event.target.href.includes("chefs")) {
        contentPara.innerHTML = chefs;
      } else if (event.target.href.includes("reviews")) {
        contentPara.innerHTML = reviews;
      } else if (event.target.href.includes("delivery")) {
        contentPara.innerHTML = delivery;
      }
  }

function makeInactive() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
}

for (let i = 0; i < tabs.length; i++) {
    console.log(i);
    console.log(tabs[i]);
    console.log(tabs[i].href);
    tabs[i].addEventListener("click", makeActive);
}

const contentPara = document.querySelector('.content');
contentPara.innerHTML = cuisines;
