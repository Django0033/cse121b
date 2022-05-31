function getGrades(inputSelector) {
    let grades = document.getElementById(inputSelector).value;
    grades = grades.split(",");
    grades = grades.map((grade) => {
        return grade.trim().toUpperCase();
    });
    return grades;
}

function lookupGrade(grade) {
    let lettersGpa = { A: 4, B: 3, C: 2, D: 1, F: 0 };
    return lettersGpa[grade];
}

function calculateGpa(grades) {
    let gradePoints = grades.map((grade) => lookupGrade(grade));
    // let gpas = [];
    // for (let i = 0, len = grades.length; i < len; i++) {
    //     gpas.push(lookupGrade(grades[i]));
    // }
    let gpa =
        gradePoints.reduce((total, gpa) => total + gpa) / gradePoints.length;
    return gpa;
}

function outputGpa(gpa, selector) {
    document.getElementById(selector).innerHTML = gpa;
}

function clickHandler() {
    let grades = getGrades("grades");
    let gpa = calculateGpa(grades);
    outputGpa(gpa, "output");
}

document.getElementById("submitButton").addEventListener("click", clickHandler);
document.getElementById("submitButton").addEventListener("click", clickHandler);
