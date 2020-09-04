$(document).ready(onReady);

function onReady() {
  $("#submitButton").on("click", submitBtn);
  $(document).on("click", ".deleteBtn", onDelete);
}

let totalMonthlyCost = 0;

let employees = [];

function onDelete() {
  console.log("in onDelete");

  $(this).parent().parent().remove();

  let indexOfEmployeeToRemove;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].idHolder === String($(this).data("idHolder"))) {
      indexOfEmployeeToRemove = i;
    }
  }
  employees.splice(indexOfEmployeeToRemove, 1);

  updateTotalMonthlyCosts();
}

function submitBtn() {
  let item = $("#idHolder").val();
  console.log(item);
  let newEmployee = {
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    id: $("#idHolder").val(),
    title: $("#titleHolder").val(),
    salary: Number($("#annualSalary").val()),
  };
  employees.push(newEmployee);
  console.log(employees);
  $("#employeeTable").empty();

  for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];

    $("#employeeTable").append(`
      <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>$${employee.salary} per year</td>
        <td><button>Delete</button></td>
      </tr>
    `);
  }

  function displaySalary() {
    console.log("in displaySalary");
    let el = $("#showSalary");
    el.empty();
    for (let i = 0; i < employees.length; i++) {
      console.log(employees[i]);
      el.append(`<li>${employees[i].first}
             ${employees[i].last} ${employees[i].id} 
             ${employees[i].title}  ${employees[i].salary}</li>`);
    }

    $("#firstName").val("");
    $("#lastName").val("");
    $("#idHolder").val("");
    $("#titleHolder").val("");
    $("#annualSalary").val("");
  }
  updateTotalMonthlyCosts();
}
function updateTotalMonthlyCosts() {
  let totalMonthlyCosts = 0;
  for (let employee of employees) {
    totalMonthlyCosts += employees.salary;
  }

  $("#monthlyCosts").text(totalMonthlyCosts);

  if (totalMonthlyCosts > 20000) {
    $("#monthlyCostsContainer").addClass("overBudget");
  } else {
    $("#monthlyCostsContainer").removeClass("overBudget");
  }
}
