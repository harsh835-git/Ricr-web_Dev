function Submit() {
    document.querySelectorAll(".Error").forEach(e => e.innerText = "");

    const name = document.getElementById("FullName").value.trim();
    const email = document.getElementById("Email").value.trim();
    const mobile = document.getElementById("Mobile").value.trim();
    const dob = document.getElementById("DOB").value;
    const qualification = document.getElementById("Qualification").value;
    const grade = document.getElementById("Grade").value.trim();
    const course = document.getElementById("Course").value;
    const batch = document.getElementById("Batch").value;
    const address = document.getElementById("Address").value.trim();
    const city = document.getElementById("City").value.trim();
    const pin = document.getElementById("Pin").value.trim();
    const gname = document.getElementById("GName").value.trim();
    const gmobile = document.getElementById("GMobile").value.trim();
    const source = document.getElementById("Source").value;

    if (!/^[A-Za-z ]+$/.test(name)) return document.getElementById("NameError").innerText = "Invalid name";
    if (!/^[\w\.]+@\w+\.\w+$/.test(email)) return document.getElementById("EmailError").innerText = "Invalid email";
    if (!/^[6-9]\d{9}$/.test(mobile)) return document.getElementById("MobileError").innerText = "Invalid mobile";
    if (!dob) return document.getElementById("DOBError").innerText = "DOB required";
    if (new Date().getFullYear() - new Date(dob).getFullYear() < 15) return document.getElementById("DOBError").innerText = "Minimum age 15";
    if (!qualification) return document.getElementById("QualError").innerText = "Select qualification";
    if (!(/^([0-9]{1,2}|100)$/.test(grade) || /^[A-F]$/.test(grade))) return document.getElementById("GradeError").innerText = "Invalid grade";
    if (!course) return document.getElementById("CourseError").innerText = "Select course";
    if (!batch) return document.getElementById("BatchError").innerText = "Select batch";
    if (!address) return document.getElementById("AddressError").innerText = "Enter address";
    if (!/^[A-Za-z ]+$/.test(city)) return document.getElementById("CityError").innerText = "Invalid city";
    if (!/^\d{6}$/.test(pin)) return document.getElementById("PinError").innerText = "Invalid pin";
    if (!/^[A-Za-z ]+$/.test(gname)) return document.getElementById("GNameError").innerText = "Invalid name";
    if (!/^[6-9]\d{9}$/.test(gmobile)) return document.getElementById("GMobileError").innerText = "Invalid mobile";
    if (!source) return document.getElementById("SourceError").innerText = "Select option";

    alert("Registration Successful!");
}

function Reset() {
    window.location.reload();
}
