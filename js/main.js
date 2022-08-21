var wrapper = document.querySelector(".wrapper")

var aside = document.querySelector(".aside");
var navbarToogle = document.querySelector(".navbar__toogle");

var asideBtn = document.querySelector(".aside__btn")

navbarToogle.addEventListener("click",()=>{
    asideRender(aside)
})

asideBtn.addEventListener("click",()=>{
    asideRender(aside)
})


function asideRender(nav){
nav.classList.toggle("aside__box")
}
