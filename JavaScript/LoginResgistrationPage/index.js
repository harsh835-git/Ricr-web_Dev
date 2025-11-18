function LoginNow() {
    console.log("login button click")
    const em = document.getElementById("Loginemail").value;
    const ps = document.getElementById("ConPassword").value;
    console.log("Email: " + em);
    console.log("Password: " + ps);

    alert("Login Done");

    document.getElementById("Loginemail").value = " ";
    document.getElementById("ConPassword").value = " ";


}
function registrationnow() {
    console.log("Register button click")
}