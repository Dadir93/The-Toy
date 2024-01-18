// speedDetector.js
function speedCheck() {
  const speedInput = document.getElementById('carSpeed');
  const resultContainer = document.getElementById('resultContainer2');
  resultContainer.innerHTML = ''; 

  const speed = parseFloat(speedInput.value);
  const speedLimit = 70;
  const demeritPointsPer5Km = 1;

  if (speed <= speedLimit) {
      const result = "Points: 0";
      console.log(result);
      displayResult(result);
  } else {
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
      const result = `Points: ${demeritPoints}`;

      displayResult(result);

      if (demeritPoints > 12) {
          const suspensionResult = "License suspended";
          console.log(suspensionResult);
          displayResult(suspensionResult);
      }
  }

  function displayResult(result) {
      const resultDiv = document.createElement('div');
      resultDiv.textContent = result;
      resultContainer.appendChild(resultDiv);

      console.log(result);
  }
}
