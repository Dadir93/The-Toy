function calculateNetSalary() {
    // Get user inputs
    const basicSalaryInput = document.getElementById('basicSalary');
    const benefitsInput = document.getElementById('benefits');

    const basicSalary = parseFloat(basicSalaryInput.value);
    const benefits = parseFloat(benefitsInput.value);

    // Input validation
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        alert("Please enter valid non-negative numeric values for Basic Salary and Benefits.");
        return;
    }

    // Constants for PAYE rates
    const PAYE_RATES = [
        // ... (same as before)
    ];

    // Constants for NHIF rates
    const NHIF_RATES = [
        // ... (same as before)
    ];

    // Constants for Affordable Housing Levy
    const HOUSING_LEVY_RATE = 0.015; // 1.5%

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (tax)
    let paye = 0;
    for (const rate of PAYE_RATES) {
        if (grossSalary > rate.min && grossSalary <= rate.max) {
            paye = (grossSalary - rate.min) * rate.rate;
            break;
        }
    }

    // Calculate NHIF deductions
    let nhifDeductions = 0;
    for (const rate of NHIF_RATES) {
        if (grossSalary > rate.min && grossSalary <= rate.max) {
            nhifDeductions = rate.deduction;
            break;
        }
    }

    // Calculate Affordable Housing Levy
    const housingLevy = grossSalary * HOUSING_LEVY_RATE;

    // Calculate net salary
    const netSalary = grossSalary - paye - nhifDeductions - housingLevy;

    // Update the results on the webpage
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Gross Salary: Ksh ${grossSalary}</p>
        <p>PAYE (Tax): Ksh ${paye}</p>
        <p>NHIF Deductions: Ksh ${nhifDeductions}</p>
        <p>Affordable Housing Levy: Ksh ${housingLevy}</p>
        <p>Net Salary: Ksh ${netSalary}</p>`;
}
