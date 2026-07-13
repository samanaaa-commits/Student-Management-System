let students = JSON.parse(localStorage.getItem("students")) || [];//getting data back from local storage 

window.onload = function () {
    displayStudents();
};

function addStudent() {
    let ID = document.getElementById("ID").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    
//validation
    if (ID === "" || name === "" || age === "" || course === "") {
        alert("Please fill all the fields");
        return;
    }

    if (age <= 0) {
        alert("Invalid age!!");
        return;
    }
//creating expense object
    let student = {
        ID: ID,
        name: name,
        age: age,
        course: course
    };
//adding to array
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));
    
    displayStudents();
    
//clearing the inputs
    document.getElementById("ID").value ="";
    document.getElementById("name").value ="";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

//displaying the students
function displayStudents() {

    let table = document.getElementById("studentList");

    table.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        let row = `
        <tr>
            <td>${students[i].ID}</td>
            <td>${students[i].name}</td>
            <td>${students[i].age}</td>
            <td>${students[i].course}</td>
            <td>
                <button class="delete-btn" onclick="deleteStudent('${students[i].ID}')">
                    Delete
                </button>
            </td>
        </tr>
        `;

        table.innerHTML += row;
    }
}
//deleting
function deleteStudent(id) {
    students = students.filter(student => student.ID !== id);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}
