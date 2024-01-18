function calculateNetSalary() {
    const basicSalaryInput = document.getElementById('basicSalary');
    const benefitsInput = document.getElementById('benefits');
    const resultContainer = document.getElementById('resultContainer3');
    resultContainer.innerHTML = ''; 

    const basicSalary = parseFloat(basicSalaryInput.value);
    const benefits = parseFloat(benefitsInput.value);

    const taxRate = 0.15;
    const nhifRate = 0.025;
    const nssfRate = 0.1;

    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * taxRate;
    const nhifDeductions = grossSalary * nhifRate;
    const nssfDeductions = grossSalary * nssfRate;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    const result = `
        Gross Salary: ${grossSalary}<br>
        Payee (Tax): ${payee}<br>
        NHIF Deductions: ${nhifDeductions}<br>
        NSSF Deductions: ${nssfDeductions}<br>
        Net Salary: ${netSalary}
    `;

    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = result;
    resultContainer.appendChild(resultDiv);

    console.log(result);
}
