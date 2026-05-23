function addStudent() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if(name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = course;

    let actionCell = row.insertCell(3);

    actionCell.innerHTML = 
    `<button class="delete-btn" onclick="deleteStudent(this)">Delete</button>`;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

function deleteStudent(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}
