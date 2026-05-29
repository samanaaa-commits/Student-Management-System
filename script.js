let students = JSON.parse(localStorage.getItem("students")) || [];

window.onload = function () {
    displayStudents();
};

function addStudent() {
    let ID = document.getElementById("ID").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (ID === "" || name === "" || age === "" || course === "") {
        alert("Please fill all the fields");
        return;
    }

    if (age <= 0) {
        alert("Invalid age!!");
        return;
    }

    let student = {
        ID: ID,
        name: name,
        age: age,
        course: course
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("ID").value ="";
    document.getElementById("name").value ="";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

function displayStudents() {
    let table = document.getElementById("studentList");
    table.innerHTML = "";

    students.forEach((student) => {
        let row = table.insertRow();

        row.insertCell(0).innerHTML = student.ID;
        row.insertCell(1).innerHTML = student.name;
        row.insertCell(2).innerHTML = student.age;
        row.insertCell(3).innerHTML = student.course;

        let actionCell = row.insertCell(4);

        actionCell.innerHTML =
            `<button onclick="deleteStudent('${student.ID}')">Delete</button>`;
    });
}

function deleteStudent(id) {
    students = students.filter(student => student.ID !== id);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}
