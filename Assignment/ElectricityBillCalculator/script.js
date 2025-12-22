function Calculate() {
    const unitsInput = document.getElementById("Units");
    const unitsError = document.getElementById("UnitsError");
    const alertBox = document.getElementById("AlertBox");

    const slab1El = document.getElementById("Slab1");
    const slab2El = document.getElementById("Slab2");
    const slab3El = document.getElementById("Slab3");
    const slab4El = document.getElementById("Slab4");
    const subtotalEl = document.getElementById("Subtotal");
    const surchargeEl = document.getElementById("Surcharge");
    const grandTotalEl = document.getElementById("GrandTotal");

    alertBox.classList.add("d-none");
    unitsError.innerText = "";

    const units = parseInt(unitsInput.value);

    if (isNaN(units) || units < 0) {
        unitsError.innerText = "Please enter a valid positive number of units";
        return;
    }

    // Slab calculation
    let slab1 = Math.min(50, units) * 0.5;
    let slab2 = units > 50 ? Math.min(150, units - 50) * 0.75 : 0;
    let slab3 = units > 200 ? Math.min(250, units - 200) * 1.2 : 0;
    let slab4 = units > 450 ? (units - 450) * 1.5 : 0;

    const subtotal = slab1 + slab2 + slab3 + slab4;
    const surcharge = subtotal * 0.2;
    const grandTotal = subtotal + surcharge;


    slab1El.innerText = `₹${slab1.toFixed(2)}`;
    slab2El.innerText = `₹${slab2.toFixed(2)}`;
    slab3El.innerText = `₹${slab3.toFixed(2)}`;
    slab4El.innerText = `₹${slab4.toFixed(2)}`;
    subtotalEl.innerText = `₹${subtotal.toFixed(2)}`;
    surchargeEl.innerText = `₹${surcharge.toFixed(2)}`;
    grandTotalEl.innerText = `₹${grandTotal.toFixed(2)}`;

    alertBox.classList.remove("d-none");
}

function Reset() {
    document.getElementById("Units").value = "";
    document.getElementById("UnitsError").innerText = "";

    document.getElementById("Slab1").innerText = "₹0.00";
    document.getElementById("Slab2").innerText = "₹0.00";
    document.getElementById("Slab3").innerText = "₹0.00";
    document.getElementById("Slab4").innerText = "₹0.00";
    document.getElementById("Subtotal").innerText = "₹0.00";
    document.getElementById("Surcharge").innerText = "₹0.00";
    document.getElementById("GrandTotal").innerText = "₹0.00";
    document.getElementById("AlertBox").classList.add("d-none");
}
