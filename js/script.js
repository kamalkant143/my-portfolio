const navLinks = document.querySelectorAll(".nav-list li a");
const sectionList = document.querySelectorAll(".main-right section");
const darkBtn = document.querySelector(".btn-dark");
const changerTheam = document.querySelectorAll(".color-changer .color-mode");
const toggleBtn=document.querySelector(".toggle-btn")
const mainLeft=document.querySelector(".main-left")
const toggleBtnOne=document.querySelector(".toggle-btn-1")


const hireMe = document.querySelector(".hero-btn1");
hireMe.onclick = changePage;
 function changePage(e){
  for (let navlink of navLinks) {
    navlink.classList.remove("active-link");
  }
  e.target.classList.add("active-link");
  let attValue = e.target.getAttribute("data-page");
  let page = document.querySelector("#" + attValue);
  for (let page of sectionList) {
    page.classList.remove("active-page");
  }
  page.classList.add("active-page");
 }

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function (e) {
    mainLeft.classList.remove("kuchbe")
    toggleBtn.firstElementChild.setAttribute("name","menu")
    changePage(e);
  });
});

// =================== dark mode btn script ================

let value = 0;
darkBtn.addEventListener("click", function () {
  let btn = document.querySelector("html");

  if (value === 0) {
    btn.classList.add("dark-mode");
    value = 1;
    darkBtn.firstElementChild.setAttribute("name", "sunny");
  } else {
    btn.classList.remove("dark-mode");
    value = 0;
    darkBtn.firstElementChild.setAttribute("name", "moon");
  }
});

// =================== color theme script ================

changerTheam.forEach((theamColors) => {
  theamColors.addEventListener("click", function (e) {
    let myElement2 = window
      .getComputedStyle(e.target)
      .getPropertyValue("background-color");
    let mainChanger = document.querySelector("html");
    mainChanger.style.setProperty("--main-color", myElement2);
  });
});


// =================== toggleBtn script ================
toggleBtn.onclick=function (){
if(mainLeft.classList.contains("kuchbe")){
  mainLeft.classList.remove("kuchbe")
  toggleBtn.firstElementChild.setAttribute("name","menu")

}
else{
  mainLeft.classList.add("kuchbe")
  toggleBtn.firstElementChild.setAttribute("name","close")
}
};

toggleBtnOne.onclick=function(){
    mainLeft.classList.remove("kuchbe")
    toggleBtn.firstElementChild.setAttribute("name","menu")
}



