function ricrform() {
    const person = document.getElementById("PersonName").value;
    const Contact = document.getElementById("ContactNumber").value;
    const Email = document.getElementById("Email").value;
    const Qualification = document.getElementById("Qualification").value;
    const College = document.getElementById("College").value;
    const year = document.getElementById("select-year").value;
    const branch = document.getElementById("Branch").value;
    const info = document.getElementById("info").value;


    console.log(person ,Contact, Email, Qualification, College, year, branch, info)

    document.getElementById("PersonName").value = "";
    document.getElementById("ContactNumber").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Qualification").value = "";
    document.getElementById("College").value = "";
    document.getElementById("select-year").value = "";
    document.getElementById("Branch").value = "";
    document.getElementById("info").value = "";

}