const kmInput = document.querySelector("input[type='number']");
const errorMsg = document.querySelector(".text-danger");
const calcBtn = document.querySelector(".btn-primary");
const totalBill = document.querySelector(".fs-3.fw-bold");
const breakdownList = document.querySelector(".list-group");

calcBtn.addEventListener("click", function () {
  const km = parseFloat(kmInput.value);

  // Validation
  if (kmInput.value === "" || isNaN(km) || km < 0) {
    errorMsg.classList.remove("d-none");
    return;
  } else {
    errorMsg.classList.add("d-none");
  }

  let remainingKm = km;

  // Slabs
  let slab1Km = Math.min(remainingKm, 10);
  let slab1Cost = slab1Km * 11;
  remainingKm -= slab1Km;

  let slab2Km = Math.min(remainingKm, 40);
  let slab2Cost = slab2Km * 10;
  remainingKm -= slab2Km;

  let slab3Km = Math.max(remainingKm, 0);
  let slab3Cost = slab3Km * 9;

  let total = slab1Cost + slab2Cost + slab3Cost;

  // Format numbers (Indian format)
  const format = (num) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 2 });

  // Update total
  totalBill.textContent = `Rs. ${format(total)}`;

  // Update breakdown
  breakdownList.innerHTML = `
    <li class="list-group-item">
      ${slab1Km} km × Rs. 11 = Rs. ${format(slab1Cost)}
    </li>
    <li class="list-group-item">
      ${slab2Km} km × Rs. 10 = Rs. ${format(slab2Cost)}
    </li>
    <li class="list-group-item">
      ${slab3Km} km × Rs. 9 = Rs. ${format(slab3Cost)}
    </li>
  `;
});
