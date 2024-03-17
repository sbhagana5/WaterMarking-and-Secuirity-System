function submitForm(event){
    event.preventDefault();
    var formData = new FormData(document.getElementById('myForm'));
    var jsonObject={};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });
    console.log(jsonObject)
    processData(jsonObject);

}
function processData(data) {

    $.ajax({
        url: "http://ws-18819:8080/watermark/signup",
        type:"post",
        data: {
            employeeId:data.userId,
            password:data.password,
            name:data.FullName
        },
        contentType:"application/json",
        cors: true ,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }

    }).done(function() {
       alert("done");
    });

    console.log(data);
   /* fetch('http://ws-18819:8080/watermark/signup', {
        method: 'POST',
        body: {
            employeeId:data.userId,
            password:data.password,
            name:data.FullName
        }
    })
        .then(response => {
            if (response.message=='success') {
                alert("Success !. You are getting redirectd to login page")
                window.location.href = '../../../../WaterMarking/components/login/src/login.html';
            } else {
                alert("404. Try again")
            }

})*/

}

function updateCreateAccountButton() {
    var fullNameInput = document.getElementById("F_name");
    var userIdInput = document.getElementById("userId");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm_password");
    var createAccountButton = document.querySelector(".create-account");

    // Check if all input fields are valid
    var fullNameValid = fullNameInput.classList.contains("match");

    var userIdValid = userIdInput.classList.contains("match");
    var passwordValid = passwordInput.classList.contains("match");
    var confirmPasswordValid = confirmPasswordInput.classList.contains("match");
    console.log(fullNameValid)
    // Enable the button if all input fields are valid, otherwise disable it
    if (fullNameValid && userIdValid && passwordValid && confirmPasswordValid) {
        console.log("entered")
        createAccountButton.disabled = false;
    } else {
        console.log("nahi hua")
        createAccountButton.disabled = true;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Call the function initially when the page loads
    updateCreateAccountButton();

    // Add event listeners to input fields to trigger the function on input change
    document.getElementById("F_name").addEventListener("input", updateCreateAccountButton);
    document.getElementById("userId").addEventListener("input", updateCreateAccountButton);
    document.getElementById("password").addEventListener("input", updateCreateAccountButton);
    document.getElementById("confirm_password").addEventListener("input", updateCreateAccountButton);
});