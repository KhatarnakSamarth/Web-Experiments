// Array to store employee objects
let employees = [];

function addEmployee() {
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const salary = parseFloat(document.getElementById("salary").value);
    const department = document.getElementById("department").value;

    if (!name || !id || !salary || !department) {
        alert("Please fill all fields!");
        return;
    }

    // Create employee object
    const employee = { name, id, salary, department };
    employees.push(employee);

    document.getElementById("output").innerHTML = "Employee added successfully!";
}

function displayEmployees() {
    let result = "<h3>All Employees</h3>";
    for (const emp of employees) {
        result += `<p>${emp.name} (ID: ${emp.id}), Salary: ₹${emp.salary}, Dept: ${emp.department}</p>`;
    }
    document.getElementById("output").innerHTML = result;
}

function filterSalary() {
    const filtered = employees.filter(emp => emp.salary > 50000);
    let result = "<h3>Employees with Salary > ₹50,000</h3>";
    for (const emp of filtered) {
        result += `<p>${emp.name} - ₹${emp.salary}</p>`;
    }
    document.getElementById("output").innerHTML = result;
}

function totalSalary() {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = `<h3>Total Salary Payout</h3><p>₹${total}</p>`;
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No employees added yet.";
        return;
    }
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const avg = total / employees.length;
    document.getElementById("output").innerHTML = `<h3>Average Salary</h3><p>₹${avg.toFixed(2)}</p>`;
}

function countDepartment() {
    const dept = prompt("Enter department name to count:");
    const count = employees.filter(emp => emp.department.toLowerCase() === dept.toLowerCase()).length;
    document.getElementById("output").innerHTML = `<h3>Employees in ${dept}</h3><p>${count}</p>`;
}
