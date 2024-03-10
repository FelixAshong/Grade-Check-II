function gradeMarks(mark, subject) {
    if (mark >= 80 && mark <= 100) {
        return `${subject}: A1`;
    } else if (mark >= 70 && mark <= 79) {
        return `${subject}: B2`;
    } else if (mark >= 65 && mark <= 69) {
        return `${subject}: B3`;
    } else if (mark >= 60 && mark <= 64) {
        return `${subject}: C4`;
    } else if (mark >= 55 && mark <= 59) {
        return `${subject}: C5`;
    } else if (mark >= 50 && mark <= 54) {
        return `${subject}: C6`;
    } else if (mark >= 45 && mark <= 49) {
        return `${subject}: D7 `;
    } else if (mark >= 40 && mark <= 44) {
        return `${subject}: E8 `;
    } else {
        return `${subject}: F9`;
    }
}

function displayResult(headingId, result) {
    document.getElementById(headingId).innerHTML = result;
}

function grading_it(number) {
    if (number < 0 || number > 100) {
        alert('Please check your number');
        return;
    }
    const result = gradeMarks(Number(number), "I.T");
    displayResult("res_heading_it", result);
}

function grading_geo(number) {
    if (number < 0 || number > 100) {
        alert('Please check your number');
        return;
    }
    const result = gradeMarks(Number(number), "Geography");
    displayResult("res_heading_geo", result);
}

function grading_phy(number) {
    if (number < 0 || number > 100) {
        alert('Please check your number');
        return;
    }
    const result = gradeMarks(Number(number), "Physics");
    displayResult("res_heading_phy", result);
}

function grading_bio(number) {
    if (number < 0 || number > 100) {
        alert('Please check your number');
        return;
    }
    const result = gradeMarks(Number(number), "Biology");
    displayResult("res_heading_bio", result);
}

function grading_che(number) {
    if (number < 0 || number > 100) {
        alert('Please check your number');
        return;
    }
    const result = gradeMarks(Number(number), "Chemistry");
    displayResult("res_heading_che", result);
}

function grading_emaths(number) {
    if (number < 0 || number > 100) {
        alert('Please check your number');
        return;
    }
    const result = gradeMarks(Number(number), "E-Maths");
    displayResult("res_heading_emaths", result);
}
