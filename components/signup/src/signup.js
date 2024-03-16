var flag=true;
function submitForm(){
    // event.preventDefault();
    var formData = new FormData(document.getElementById('myForm'));
    var jsonObject={};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });
    processData(jsonObject);
}
function processData(data) {
    console.log(data);

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