function generateInputs() {
  let n = document.getElementById("subjects").value;
  let form = document.getElementById("marksForm");
  form.innerHTML = "";
  for (let i = 1; i <= n; i++) {
    form.innerHTML += `Marks for Subject ${i}: <input type="number" id="s${i}"><br>`;
  }
  document.getElementById("calcBtn").style.display = "inline";
}

function calculateResult() {
  let n = document.getElementById("subjects").value;
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += Number(document.getElementById("s"+i).value) || 0;
  }
  let avg = total / n;
  let grade = avg>=90?"A+":avg>=75?"A":avg>=60?"B":avg>=40?"C":"F";
  let status = avg>=40?"Pass":"Fail";
  document.getElementById("output").innerHTML =
    `Total: ${total}<br>Average: ${avg.toFixed(2)}<br>Grade: ${grade}<br>Status: ${status}`;
}