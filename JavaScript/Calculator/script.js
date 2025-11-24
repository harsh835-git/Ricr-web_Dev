function input(char) {
    if (char === "=") {
        try {
            const exp = document.getElementById("inputScreen").value;
            document.getElementById("inputScreen").value = eval(exp);
        } catch (error) {
            alert("invalid expression");
            document.getElementById("inputScreen").value = "";
        }
    }
    else if (char === "C") {
        document.getElementById("inputScreen").value = "";
    }
    else {
        let exp = document.getElementById("inputScreen").value;
        exp = exp + char;
        document.getElementById("inputScreen").value = exp;

    }
}