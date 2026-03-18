function calculate() {
  const previous = parseFloat(document.getElementById("previous").value) || 0;
  const current = parseFloat(document.getElementById("current").value) || 0;
  const unitsEl = document.getElementById("units");
  const amountEl = document.getElementById("amount");
  const subchargeEl = document.getElementById("subcharge");
  const totalEl = document.getElementById("total");

  const units = Math.max(0, current - previous);
  unitsEl.value = units.toFixed(2);

  let amount = 0;
  if (units <= 200) {
    amount = units * 1;
  } else if (units <= 300) {
    amount = units * 1.25;
  } else if (units <= 400) {
    amount = units * 1.5;
  } else if (units <= 500) {
    amount = units * 1.75;
  } else {
    amount = units * 2;
  }
  amountEl.value = amount.toFixed(2);

  const subcharge = amount * 0.1;
  subchargeEl.value = subcharge.toFixed(2);

  const total = amount + subcharge;
  totalEl.value = total.toFixed(2);
}

function clearAll() {
  const inputs = document.querySelectorAll(
    "#billno, #customername, #previous, #current, #units, #amount, #subcharge, #total"
  );

  inputs.forEach((input) => {
    input.value = "";
  });

  // Focus cursor back to Bill No (hacker terminal feel)
  const billNoInput = document.getElementById("billno");
  billNoInput.focus();

  // Optional: force caret visibility
  billNoInput.setSelectionRange(0, 0);
}

