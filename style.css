const input = document.getElementById("input-number");
const baseSelect = document.getElementById("base-select");

const decimalEl = document.getElementById("decimal");
const binaryEl = document.getElementById("binary");
const octalEl = document.getElementById("octal");
const hexEl = document.getElementById("hex");

function updateConversions() {
  const inputValue = input.value.trim();
  const base = parseInt(baseSelect.value);

  if (inputValue === "") {
    decimalEl.textContent = "";
    binaryEl.textContent = "";
    octalEl.textContent = "";
    hexEl.textContent = "";
    return;
  }

  let decimalValue;
  try {
    decimalValue = parseInt(inputValue, base);
    if (isNaN(decimalValue)) throw "Invalid";
  } catch (e) {
    alert("Invalid input for base " + base);
    return;
  }

  decimalEl.textContent = decimalValue;
  binaryEl.textContent = decimalValue.toString(2);
  octalEl.textContent = decimalValue.toString(8);
  hexEl.textContent = decimalValue.toString(16).toUpperCase();
}

input.addEventListener("input", updateConversions);
baseSelect.addEventListener("change", updateConversions);
