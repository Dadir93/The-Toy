function speedCheck() {
    const speedInput = document.getElementById('carSpeed');
    const resultContainer = document.getElementById('resultContainer2');
    const suspensionMessage = document.getElementById('suspensionMessage');
    const totalPointsContainer = document.getElementById('totalPoints');
    resultContainer.innerHTML = '';
    suspensionMessage.innerHTML = '';
    totalPointsContainer.innerHTML = '';

    const speeds = speedInput.value.split(',').map(speed => parseFloat(speed.trim()));
    const speedLimit = 70;
    const demeritPointsPer5Km = 1;

    let totalDemeritPoints = 0;

    speeds.forEach(speed => {
        if (!isNaN(speed)) {
            let demeritPoints = 0;

            if (speed < 70) {
                result = `Speed: ${speed}, OK`;
            } else {
                demeritPoints = Math.floor((speed - 75) / 5) + 1;
                result = `Speed: ${speed}, Points: ${demeritPoints}`;
            }

            totalDemeritPoints += demeritPoints;

            displayResult(result);
        }
    });

    const totalPointsResult = `Total Demerit Points: ${totalDemeritPoints}`;
    const totalPointsDiv = document.createElement('div');
    totalPointsDiv.textContent = totalPointsResult;
    totalPointsContainer.appendChild(totalPointsDiv);
    console.log(totalPointsResult);

    if (totalDemeritPoints >= 12) {
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
