function  myFunction(event){
    event.preventDefault();
    var formData = new FormData(document.getElementById('myForm'));
    var jsonObject={};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });
    processData(jsonObject);
}
function processData(data) {

    console.log(data);
    fetch('http://ws-18819:8080/watermark/login', {
        method: 'POST',
        body: {
            employeeId:data.userName,
            password:data.password
        }
    })
        .then(response => {
            console.log(response)
            if (response.message) {
                alert("Success !. You are getting redirected to DashBoard")
                window.location.href = '../../../../WaterMarking/components/login/src/dashboard.html/'+response.message;
            } else {

                alert("404. Try again")
            }

        })

}
