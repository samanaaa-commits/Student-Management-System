function addStudent() {
     let ID= document.getElementById("ID").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if(ID ===""|| name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
 }
     if(age <= 0) {
   alert("Invalid age");
         return;
     }

    let table = document.getElementById("studentList");

    let row = table.insertRow();
    
    row.insertCell(0).innerHTML = ID;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = age;
    row.insertCell(3).innerHTML = course;

    let actionCell = row.insertCell(4);

    actionCell.innerHTML = 
    `<button class="delete-btn" onclick="deleteStudent(this)">Delete</button>`;
    document.getElementById("ID").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

function deleteStudent(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}
