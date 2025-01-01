
let page = document.getElementById("body");
// let nav = document.getElementById("nav1");
let link = document.getElementById("archlink1");
let logo = document.getElementById("logo1");
let highest = document.getElementById("arrow");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let header = document.getElementById("home");
let arrow = document.getElementById("arrow")
let newcars = document.getElementById("newcars");
let bmw = document.getElementById("bmw");
let honda = document.getElementById("honda");
let lambo = document.getElementById("lambo");
let bmwrad = document.getElementById("bmwrad");
let lamborad = document.getElementById("lamborad");
let hondarad = document.getElementById("hondarad");
let input = document.getElementById("new-int");
let help = document.getElementById("help");
let result = document.getElementById("result");
let home = document.getElementById("homelink")

let kill = input.value

// help.textContent = "Valid Email"

// function inpuutted(){
//     if (kill.length < 1){
//         help.textContent = "Subscribe to get latest news update and informations"
//     }
//     else{
//         help.textContent = "Valid Email"
//     }
// }

// result.addEventListener("mouseover", ev =>{
//     inpuutted()
// })

lambo.addEventListener("drag", ev=>{
    bmw.style.display = "none"
    lambo.style.display = "flex"
    honda.style.display = "none"
})


bmwrad.addEventListener("click" , function () {
    bmw.style.display = "flex"
    lambo.style.display = "none"
    honda.style.display = "none"
})
lamborad.addEventListener("click", function () {
    bmw.style.display = "none"
    lambo.style.display = "flex"
    honda.style.display = "none"
})
hondarad.addEventListener("click", function () {
    bmw.style.display = "none"
    lambo.style.display = "none"
    honda.style.display = "flex"
})



highest.addEventListener("click", ev => {
    window.location.href = '#home';
    highest.style.display = "none"

})










function myFunction() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("nav1").className = "navscroll"

    }
    else {
        setInterval(5000, document.getElementById("nav1").className = "nav-space");


    }
}

window.onscroll = function () { myFunction(), arr() };

// body.onscroll = function () { arr() }

function arr() {
    if (document.documentElement.scrollTop < 800) {
        arrow.style.display = "none"
    }
    else {
        arrow.style.display = "flex"
    }
}


arrow.style.display = "none"

function fff(){

}

// window.location.href = "home"
if (document.location.href == "home") {
    home.style.color = "red"
}
