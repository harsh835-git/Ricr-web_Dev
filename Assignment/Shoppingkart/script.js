// function validateCheckoutForm() {
//     const name = document.getElementById("name").value;
//     alert(`Thank you for Shopping, ${name}!`);
//     console.log("Checkout Successful:", name);
//     return false;
// }

function validateContactForm() {
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    if (!email.includes("@") || message.length < 10) {
        alert("Please enter valid details.");
        return false;
    }

    alert(`Thank you for contacting us, ${name}!`);
    console.log({ name, email, message });
    return false;
}
