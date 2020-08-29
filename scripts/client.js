
$(document).ready(onReady)

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
        console.log('submitBtn', newEmployee, )
    }