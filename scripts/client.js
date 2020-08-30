$(document).ready(onReady);

let monthlyCost = [];

function onReady() {
  $("#submitButton").on("click", submitBtn);
  displaySalary();
}
function submitBtn() {
  const newEmployee = {
    first: $("#firstName").val(),
    last: $("#lastName").val(),
    id: $("#idHolder").val(),
    title: $("#titleHolder").val(),
    salary: $("#annualSalary").val(),
  };
  monthlyCost.push(newEmployee);
  displaySalary();
}
function displaySalary() {
  console.log("in displaySalary");
  let el = $("#showSalary");
  el.empty();
  for (let i = 0; i < monthlyCost.length; i++) {
    console.log(monthlyCost[i]);
    el.append(`<li>${monthlyCost[i].first}
             ${monthlyCost[i].last} ${monthlyCost[i].id} 
             ${monthlyCost[i].title}  ${monthlyCost[i].salary}</li>`);
  }
}
