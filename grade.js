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
    const averageContainer = document.getElementById('averageContainer');
    
    resultContainer.innerHTML = '';
    averageContainer.innerHTML = '';

    const marksList = marksInput.value.split(',').map(mark => parseFloat(mark.trim()));

    let totalMarks = 0;

    marksList.forEach((marks, index) => {
        const grade = calculateGrade(marks);
        const result = `Marks ${index + 1}: ${marks}, Grade: ${grade}`;

        const resultDiv = document.createElement('div');
        resultDiv.textContent = result;
        resultContainer.appendChild(resultDiv);

        totalMarks += marks;
    });

    const averageMarks = totalMarks / marksList.length;
    const averageGrade = calculateGrade(averageMarks);
    const averageResult = `Average Marks: ${averageMarks.toFixed(2)}, Average Grade: ${averageGrade}`;

    const averageDiv = document.createElement('div');
    averageDiv.textContent = averageResult;
    averageContainer.appendChild(averageDiv);

    console.log(averageResult);
}
