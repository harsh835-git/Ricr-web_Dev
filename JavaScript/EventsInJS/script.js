function on() {
    document.getElementById("bulb").style.backgroundColor = "yellow";

}
function off() {
    document.getElementById("bulb").style.backgroundColor = "white";

}
function red() {
    document.getElementById("bulb").style.backgroundColor = "red";

}
function blue() {
    document.getElementById("bulb").style.backgroundColor = "blue";

}
function green() {
    document.getElementById("bulb").style.backgroundColor = "green";

}
function color() {

}
const usercolor = document.getElementById("color");

usercolor.addEventListener("change", () => changebulbcolor(usercolor.value));

function changebulbcolor(color) {
    document.getElementById("bulb").style.backgroundColor = color;
}

function SB_control() {
    const btn = document.getElementById("SB_btn");
    if (btn.innerText === "On") {
        document.getElementById("SB_btn").innerText = "Off";
        document.getElementById("smartbulb").classList.add("On");
    }
    else {
        document.getElementById("SB_btn").innerText = "On";
        document.getElementById("smartbulb").classList.remove("On");
    }
}

function SB_control2() {
    document.getElementById("smartbulb").classList.toggle("on");
}

function fillColor(Rcolor) {
    document.getElementById("Rainbowbulb").style.backgroundColor = Rcolor;
}
document.getElementById("c1").addEventListener("mouseenter"), () => {
    fillColor("red")
}

document.getElementById("c1").addEventListener("mouseenter"), () => {
    fillColor("yellow")
}

document.getElementById("c1").addEventListener("mouseenter"), () => {
    fillColor("green")
}

document.getElementById("c1").addEventListener("mouseenter"), () => {
    fillColor("blue")
}

document.getElementById("c1").addEventListener("mouseenter"), () => {
    fillColor("violet")
}

document.getElementById("c1").addEventListener("mouseenter"), () => {
    fillColor("pink")
}

document.getElementById("c1").addEventListener("mouseenter"), () => {
    fillColor("cyan")
}


document.getElementById("c1").addEventListener("mouseleave"), () => {
    fillColor("white")
}