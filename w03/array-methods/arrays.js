let arr = ["one", "two", "three"];
let newArray = arr.map(htmlLi);
console.log(newArray.join("\n"));
let myList = document.getElementById("myList");

myList.innerHTML = newArray.join("\n");

function htmlLi(stringItem) {
    return "<li>" + stringItem + "</li>";
}

let letterGrades = ["A", "B", "A"];
let gpaPoints = letterGrades.map(getGpa);

console.log(gpaPoints);

function getGpa(letterGrade) {
    let gpa = { A: 4, B: 3, C: 2, D: 1 };

    return gpa[letterGrade];
}

function getGpaAverage(total, gpa) {
    return total + gpa;
}

let gpaAverage = gpaPoints.reduce(getGpaAverage) / gpaPoints.length;

console.log(gpaAverage);

let fruits = ["watermelon", "peach", "apple", "tomato", "grapes"];

let newFruits = fruits.filter((fruit) => fruit.length > 6);

console.log(newFruits);

let numbers = [12, 34, 21, 54];
let luckNumber = 21;
let indexLuckNumber = numbers.indexOf(luckNumber);

console.log(indexLuckNumber);
