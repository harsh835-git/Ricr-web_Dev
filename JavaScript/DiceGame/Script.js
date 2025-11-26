function Start() {
    console.log("Game Started");
    document.getElementById("B1").disabled = false;
    document.getElementById("Restart").disabled = false;
    document.getElementById("Start").disabled = true;
}
function Restart() {
    window.location.reload();

}
function p1Play() {
    console.log("Player 1 play");
    let score = Number(document.getElementById("p1sc").innerText);
    const DF = Math.floor(Math.random() * 6) + 1;
    if (DF === 6) {
        document.getElementById("B1").disabled = true;
        document.getElementById("B2").disabled = false;
    }
    else {
        score = score + DF;
        document.getElementById("p1sc").innerText = score;
    }


    switch (DF) {
        case 1:
            { document.getElementById("p1dice").src = "./images/1.png"; }
            break;
        case 2:
            { document.getElementById("p1dice").src = "./images/2.png"; }
            break;
        case 3:
            { document.getElementById("p1dice").src = "./images/3.png"; }
            break;
        case 4:
            { document.getElementById("p1dice").src = "./images/4.png"; }
            break;
        case 5:
            { document.getElementById("p1dice").src = "./images/5.png"; }
            break;
        case 6:
            { document.getElementById("p1dice").src = "./images/6.png"; }
            break;
        default:
            { document.getElementById("p1dice").src = "./images/6.png"; }

    }

}
function p2Play() {
    console.log("Player 2 play");
    let score = Number(document.getElementById("p2sc").innerText);
    const DF = Math.floor(Math.random() * 6) + 1;
    if (DF === 6) {
        document.getElementById("B1").disabled = false;
        document.getElementById("B2").disabled = true;
    }
    else {
        score = score + DF;
        document.getElementById("p2sc").innerText = score;
    }

    // short of swtich case
    document.getElementById("p2dice").src = `./images/${DF}.png`;
}