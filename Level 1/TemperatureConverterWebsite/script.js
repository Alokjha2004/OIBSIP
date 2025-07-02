document.getElementById("convertBtn").addEventListener("click", () => {
  const input = document.getElementById("tempInput").value.trim();
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById("result");

  if (isNaN(input) || input === "") {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  const temp = parseFloat(input);
  let c, f, k;

  if (unit === "C") {
    c = temp;
    f = (temp * 9/5) + 32;
    k = temp + 273.15;
  } else if (unit === "F") {
    c = (temp - 32) * 5/9;
    f = temp;
    k = c + 273.15;
  } else if (unit === "K") {
    k = temp;
    c = temp - 273.15;
    f = (c * 9/5) + 32;
  }

  resultDiv.innerHTML = `
    <p><strong>Celsius:</strong> ${c.toFixed(2)} °C</p>
    <p><strong>Fahrenheit:</strong> ${f.toFixed(2)} °F</p>
    <p><strong>Kelvin:</strong> ${k.toFixed(2)} K</p>
  `;
});
