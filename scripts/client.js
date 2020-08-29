
$(document).ready(onReady)

let montlyCost = []

function onReady(){
    $( '#submitButton' ).on( 'click' , submitBtn )
}

    function submitBtn(){
        const newEmployee = {
            first: $( '#firstName').val(),
            last: $( '#lastName').val(),
            id: $( '#idHolder').val(),
            title: $( '#titleHolder').val(),
            salary: $( '#annualSalary').val()
        }
        montlyCost.push(newEmployee);
        console.log(newEmployee)
    }