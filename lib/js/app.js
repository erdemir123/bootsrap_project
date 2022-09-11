const logo = document.querySelector(".navbar-brand")
const text ="PARS İNŞAAT"

let sayı = 1
function say(){
    logo.innerHTML=text.slice(0,sayı)
    if(sayı>text.length){
        sayı=0
    }
    
    sayı++
}
setInterval(say,300)


const load = document.querySelector("#load")
const screenHeight = window.innerHeight/5*3;
window.addEventListener("scroll",()=>{
    const loading = load.getBoundingClientRect().top
    if(screenHeight>loading ){
        load.classList.add("active")
    }
    if(screenHeight<loading ){
        load.classList.remove("active")
    }
})
const loadcard = document.querySelector("#load-card")
const screen = window.innerHeight/5*3;
window.addEventListener("scroll",()=>{
    const loading = loadcard.getBoundingClientRect().top
    if(screenHeight>loading ){
        loadcard.classList.add("active")
    }
    if(screenHeight<loading ){
        loadcard.classList.remove("active")
    }
})
const card = document.querySelector("#cards")
const screen1 = window.innerHeight/4*3;
window.addEventListener("scroll",()=>{
    const loading = card.getBoundingClientRect().top
    if(screenHeight>loading){
        card.classList.add("active")
    }
    if(screenHeight<loading ){
        card.classList.remove("active")
    }
})
