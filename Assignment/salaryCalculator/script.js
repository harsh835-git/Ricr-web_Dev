
  // Standalone calculation function (as required)
  function calculateGrossSalary(basic) {
    const hra = basic * 0.20; // 20% HRA
    const da = basic * 0.10;  // 10% DA
    const gross = basic + hra + da;

    return {
      basic,
      hra,
      da,
      gross
    };
  }

  // Currency formatter (Indian Rupee)
  const formatINR = (amount) =>
    amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2
    });

  function handleCalculate() {
    const input = document.getElementById("basicSalary");
    const errorMsg = document.getElementById("errorMsg");
    const successMsg = document.getElementById("successMsg");
    const btn = document.getElementById("calculatebtn");

    const basicValue = input.value.trim();

    // Clear old messages
    errorMsg.innerText = "";
    successMsg.classList.add("d-none");

    // Validation
    if (basicValue === "") {
      errorMsg.innerText = "Basic salary is required";
      return;
    }

    const basicSalary = Number(basicValue);

    if (isNaN(basicSalary) || basicSalary < 0) {
      errorMsg.innerText = "Please enter a valid non-negative number";
      return;
    }

    // Disable button & show spinner
    btn.disabled = true;
    btn.innerHTML = `
      <span class="spinner-border spinner-border-sm me-2"></span>
      Calculating...
    `;

    // Simulate processing delay
    setTimeout(() => {
      const result = calculateGrossSalary(basicSalary);

      // Update result fields
      document.getElementById("resultBasic").innerText =
        formatINR(result.basic);
      document.getElementById("resultHra").innerText =
        formatINR(result.hra);
      document.getElementById("resultDa").innerText =
        formatINR(result.da);
      document.getElementById("resultGross").innerText =
        formatINR(result.gross);

      // Show success
      successMsg.classList.remove("d-none");

      // Reset button state
      btn.disabled = false;
      btn.innerHTML = "Calculate";

    }, 500); // 0.5 second delay
  }

  function handleReset() {
    document.getElementById("basicSalary").value = "";
    document.getElementById("errorMsg").innerText = "";
    document.getElementById("successMsg").classList.add("d-none");

    document.getElementById("resultBasic").innerText = "-";
    document.getElementById("resultHra").innerText = "-";
    document.getElementById("resultDa").innerText = "-";
    document.getElementById("resultGross").innerText = "-";
  }

  // Attach events
  document.getElementById("calculatebtn").addEventListener("click", handleCalculate);
  document.getElementById("resetBtn").addEventListener("click", handleReset);

