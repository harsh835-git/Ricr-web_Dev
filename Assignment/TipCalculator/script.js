function Calculate() {
    const bill = parseFloat(document.getElementById("Amount").value);
    const service = parseFloat(document.getElementById("Service").value);
    const people = parseInt(document.getElementById("NumberOfPersons").value);

    const error = document.getElementById("error");
    const result = document.getElementById("result");
    const amount = document.getElementById("amount");


    if (
        isNaN(bill) ||
        bill <= 0 ||
        service === 0 ||
        isNaN(people) ||
        people <= 0
    ) {
        error.classList.remove("d-none");
        result.classList.add("d-none");
        return;
    }

    error.classList.add("d-none");

    const tip = bill * service;
    const total = bill + tip;
    const perPerson = total / people;

    amount.textContent = `₹${perPerson.toFixed(2)}`;
    result.classList.remove("d-none");
}