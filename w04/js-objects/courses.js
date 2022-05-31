const aCourse = {
  code: "CSE121b",
  name: "JavaScript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  enrollStudent: function (sectionNum) {
    // Find the section that was given. If the section exists, then add 1
    // to enrolled and call the outputSctions function.
    let sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex !== -1) {
      this.sections[sectionIndex].enrolled += 1;
    }
    outputSections(this.sections);
  },
  dropStudent: function (sectionNum) {
    // Find the section that was given. If the section exists, then subtract 1
    // to enrolled and call the outputSctions function.
    let sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex !== -1) {
      this.sections[sectionIndex].enrolled -= 1;
    }
    outputSections(this.sections);
  },
};

function setNameAndNumber(course) {
  // Set the name and number of the course in the HTML.
  let courseName = course.name;
  let courseCode = course.code;
  document.getElementById("courseName").innerText = courseName;
  document.getElementById("courseCode").innerText = courseCode;
}

function outputSections(sections) {
  // Output the sections into a table identified by #sections
  let html = sections.map(
    (section) => `<tr>
<td>${section.sectionNum}</td>
<td>${section.roomNum}</td>
<td>${section.enrolled}</td>
<td>${section.days}</td>
<td>${section.instructor}</td>
    </tr>`
  );
  document.getElementById("sections").innerHTML = html.join("");
}

setNameAndNumber(aCourse);
outputSections(aCourse.sections);
let buttonEnrollStudent = document.getElementById("enrollStudent");
let buttonDropStudent = document.getElementById("dropStudent");

buttonEnrollStudent.addEventListener("click", function () {
  let userInput = document.getElementById("sectionNumber").value;
  aCourse.enrollStudent(userInput);
});
buttonDropStudent.addEventListener("click", function () {
  let userInput = document.getElementById("sectionNumber").value;
  aCourse.dropStudent(userInput);
});
