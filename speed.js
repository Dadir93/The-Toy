// speedDetector.js
function speedCheck() {
    const speedInput = document.getElementById('carSpeed');
    const resultContainer = document.getElementById('resultContainer2');
    const suspensionMessage = document.getElementById('suspensionMessage');
    resultContainer.innerHTML = '';
    suspensionMessage.innerHTML = '';

    const speeds = speedInput.value.split(',').map(speed => parseFloat(speed.trim()));
    const speedLimit = 70;
    const demeritPointsPer5Km = 1;

    let totalDemeritPoints = 0;

    speeds.forEach(speed => {
        if (!isNaN(speed)) {
            if (speed > speedLimit) {
                const demeritPoints = Math.floor((speed - speedLimit) / 5);
                totalDemeritPoints += demeritPoints;

                let result = `Speed: ${speed}, Points: ${demeritPoints}`;
                if (demeritPoints === 0) {
                    result += ", OK";
                }
                displayResult(result);
            } else {
                const result = `Speed: ${speed}, Points: 0, OK`;
                displayResult(result);
            }
        }
    });

    if (totalDemeritPoints > 12) {
        const suspensionResult = "License suspended";
        console.log(suspensionResult);
        displaySuspensionMessage(suspensionResult);
    }

    function displayResult(result) {
        const resultDiv = document.createElement('div');
        resultDiv.textContent = result;
        resultContainer.appendChild(resultDiv);
        console.log(result);
    }

    function displaySuspensionMessage(message) {
        const suspensionDiv = document.createElement('div');
        suspensionDiv.textContent = message;
        suspensionMessage.appendChild(suspensionDiv);
        console.log(message);
    }
}
