window.addEventListener("load", init)

function ID(e) {
    return document.getElementById(e);
}

function c(e) {
    return document.getElementsByClassName(e);
}

function $(e) {
    return document.querySelector(e);
}

function $a(e) {
    return document.querySelectorAll(e);
}

let i = 0, j = 0, k = 0;
var txt = "";

var color1 = "black", color2 = "white"
let hely = 0;

function sakkbabu() {
    event.target.innerHTML = "<img src='img/gyalog.png' alt='Gyalog'>";
    event.target.removeEventListener("click", sakkbabu);
}

function init() {
    ID("title").innerHTML = "Chess"

    for(i = 0; i < 64; i++) {
        txt = txt + "<div></div>";
    }
    ID("chess").innerHTML = txt;

    for(i = 0; i < 64; i++) {
        var s = Math.floor(i / 8);
        if(s % 2 == 0) {
            if(i % 2 == 0) {
                $a("#chess div")[i].style.backgroundColor = color1;
                $a("#chess div")[i].className = color1;
            }
            else {
                $a("#chess div")[i].style.backgroundColor = color2;
                $a("#chess div")[i].className = color2;
            }
        }
        else {
            if(i % 2 != 0) {
                $a("#chess div")[i].style.backgroundColor = color1;
                $a("#chess div")[i].className = color1;
            }
            else {
                $a("#chess div")[i].style.backgroundColor = color2;
                $a("#chess div")[i].className = color2;
            }
        }
    }
    
    for(i = 0; i < 64; i++) $a("#chess div")[i].addEventListener("click", sakkbabu);
}