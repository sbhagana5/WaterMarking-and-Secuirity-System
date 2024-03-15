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