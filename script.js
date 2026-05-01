let students = JSON.parse(localStorage.getItem("students")) || [];
let sortDirection = true; // true = A-Z / ascending

function displayStudents() {
  let table = document.getElementById("studentTable");
  table.innerHTML = "";

  students.forEach((student, index) => {
    table.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.course}</td>
        <td>
          <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function addStudent() {
  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let course = document.getElementById("course").value;

  if (!name || !roll || !course) {
    alert("Please fill all fields");
    return;
  }

  students.push({ name, roll, course });
  localStorage.setItem("students", JSON.stringify(students));

  clearInputs();
  displayStudents();
}

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("course").value = "";
}

// 🔽 SORT BY NAME
function sortByName() {
  students.sort((a, b) => {
    return sortDirection
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  sortDirection = !sortDirection;
  displayStudents();
}

// 🔽 SORT BY ROLL NUMBER
function sortByRoll() {
  students.sort((a, b) => {
    return sortDirection
      ? a.roll.localeCompare(b.roll)
      : b.roll.localeCompare(a.roll);
  });

  sortDirection = !sortDirection;
  displayStudents();
}

displayStudents();