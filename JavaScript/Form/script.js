function Submit() {
    const nm = document.getElementById("FullName").value.trim()
    const pn = document.getElementById("PhoneNumber").value.trim()
    const em = document.getElementById("email").value.trim()
    const db = document.getElementById("DOB").value.trim()

    document.querySelectorAll(".Error").forEach((element) => {
        element.innerHTML = "";
    })

    if (!nm) {
        document.getElementById("NameError").innerText = "Required";
    }
    else if (!/^[A-Za-z ]+$/.test(nm)) {
        document.getElementById("NameError").innerText = "Only Alphabets and Space allowed";
        return;
    }

    // validation
    // if(data is invalid)
    //     alert()
    if (!em) {
        document.getElementById("EmailError").innerText = "Required";
    }
    else if (!/^[\w\.]+@(gmail|outlook||ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
        document.getElementById("EmailError").innerText = "Follow Correct Email Format";
        return;
    }

    if (!pn) {
        document.getElementById("NumberError").innerText = "Required";
    }

    else if (!/^[6-9]\d{9}$/.test(pn)) {
        document.getElementById("NumberError").innerText = "Only Indian Phone Number Allowed";
        return;
    }

    if (!db) {
        document.getElementById("DOBError").innerText = "Required";
    }
    else {
        const currentyear = new Date().getFullYear();
        const birthyear = number(db.split("-")[0]);
        

        if (currentyear - birthyear < 17) {
            document.getElementById("DOBError").innerText = "Not Applicable For Less Than 17 Years";
        }

    }





    // use logic of age calculator and ddont allow less than 18 years 

    const data = {
        FullName: nm,
        PhoneNumber: pn,
        email: em,
        DOB: db
    };
    console.log(data);
}