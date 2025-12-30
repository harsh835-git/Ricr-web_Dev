function submit() {


    const fullName = document.getElementById("fullName").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const qualification = document.getElementById("qualification").value;
    const score = document.getElementById("score").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const Pincode = document.getElementById("Pincode").value;
    const Guardian = document.getElementById("Guardian").value;
    const Guardianmob = document.getElementById("Guardianmob").value;
    const Additional = document.getElementById("Additional").value;
    const Requirements = document.getElementById("Requirements").value;


    console.log(fullName, mobile, email, dob, qualification, score, course, address, city, Pincode, Guardian, Guardianmob, Additional, Requirements)

    document.getElementById("fullName").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("qualification").value = "";
    document.getElementById("score").value = "";
    document.getElementById("course").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("Pincode").value = "";
    document.getElementById("Guardian").value = "";
    document.getElementById("Guardianmob").value = "";
    document.getElementById("Additional").value = "";
    document.getElementById("Requirements").value = "";

    let selectebBatchTiming = [];
    document
        .querySelectorAll("input[name='batch']:checked")
        .forEach((element) => {
            selectebBatchTiming.push(element.value)
        }
        );
    console.log(selectebBatchTiming);

    const selectebBatch = document.querySelector("input[name='batch']:checked").value;
    console.log(selectebBatch);
}


