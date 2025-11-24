const usercolorB = document.getElementById("colorB");

usercolorB.addEventListener("change", () => changecolorB(usercolorB.value));

function changecolorB(colorB) {
    document.getElementById("inner").style.backgroundColor = colorB;
}



const usercolorH = document.getElementById("colorH");

usercolorH.addEventListener("change", () => changecolorH(usercolorH.value));

function changecolorH(colorH) {
    document.getElementById("heading").style.color = colorH;
}


const usercolorP = document.getElementById("colorP");

usercolorP.addEventListener("change", () => changecolorP(usercolorP.value));

function changecolorP(colorP) {
    document.getElementById("paragraph").style.color = colorP;
}


