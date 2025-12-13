function Calculate() {
    const cd = document.getElementById("currentDate").value;
    const dob = document.getElementById("DOB").value;

    if (!cd || !dob) {
        alert("Please select both dates");
        return;
    }

    const currentYear = new Date(cd).getFullYear();
    const birthYear = new Date(dob).getFullYear();

    let age = currentYear - birthYear;



    const print = document.createElement("div");
    print.classList.add(
        "bg-warning-subtle",
        "d-flex",
        "justify-content-center",
        "p-3",
        "m-2",
        "fw-bold",
        "fs-3"
    );
    print.textContent = "Age is: " + age +" Years";

    const result = document.getElementById("result");
    result.innerText = "";
    result.appendChild(print);
}
