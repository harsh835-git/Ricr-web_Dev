const Randomnumber = Math.floor(Math.random() * 10) + 1;

function Submit() {
    let guess = Number(document.getElementById("guessnumber").value);

    if (!guess || guess < 1 || guess > 10) {
        alert("Please enter a number between 1 and 10");
        return;
    }

    if (guess === Randomnumber) {
        alert("🎉 You win! You guessed the right number!");
        location.reload(); 
    } 
    else if (guess > Randomnumber) {
        alert("Please enter a smaller number");
        document.getElementById("guessnumber").value = "";
    } 
    else {
        alert("Please enter a greater number");
        document.getElementById("guessnumber").value = "";
    }
}

