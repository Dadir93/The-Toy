function calculateGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

function runGradeGenerator() {
    const marksInput = document.getElementById('studentMarks');
    const resultContainer = document.getElementById('resultContainer1');
    resultContainer.innerHTML = ''; 

    const marks = parseFloat(marksInput.value);
    const grade = calculateGrade(marks);
    const result = `Marks: ${marks}, Grade: ${grade}`;

    const resultDiv = document.createElement('div');
    resultDiv.textContent = result;
    resultContainer.appendChild(resultDiv);

    console.log(result);
}
