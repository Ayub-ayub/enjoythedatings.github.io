
function validationDa() {
   // console.log("abcd",document.forms["myForm"]["output"])
    let name = document.forms["myForm"]["UserName"].value;
    let password = document.forms["myForm"]["Password"].value;
    let age = document.forms["myForm"]["age"].value;
    let address = document.forms["myForm"]["address"].value;
    var gender = document.myForm.gender;
    var fileInput = document.forms["myForm"]["file"];
    


    if (name === "") { 
        document.getElementById('userSpan').innerHTML = "**Username is required";
        return false;
    } else if (password.length < 8 || password.length > 20) {
        document.getElementById('pasSpan').innerHTML = "**Please enter valid password"
    

        return false;
    }

    else if (age === "") {
        document.getElementById('userAge').innerHTML = "**Age is required"

        return false;
    }
    else if (address === "") {
        document.getElementById('userAddress').innerHTML = "**Address is required"

        return false;
    }
    else if (gender.value.length <= 0) {
        document.getElementById('genSpan').innerHTML = "**Enter Gender";
        console.log(gender.value.length)
        return false;

    }
    else if (fileInput <= 0) {

        alert("upload file plz")

        return false;
    }
    else {
        return true;
    }

}
//   function redirect() {
   

    async function dating() {
        await fetch('http://localhost:8080/Datings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                UserName: document.forms["myForm"]["UserName"].value,
                Password: document.forms["myForm"]["Password"].value,
                Age: document.forms["myForm"]["age"].value,
                Address: document.forms["myForm"]["address"].value,
                Gender: document.myForm.gender.value,
                image: document.myForm.fileInput.image
            })


        }).then(res =>{return (res.json()) })
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }
//    // alert("comming");



// function check() {
//     let x = validationDa();
//     if (x == true) {
//         //alert("successful");
//         var y = dating();
//         if (y != '') {
//             //redirect();
//             alert("successful")
//         }
//         // console.log("check", y)
//         // alert("success")
//         // redirect();

//     }
//     else {
//         alert("failed")
//     }

// }
function redirect() {
    window.location.href = "/home/user/age/images/female.html"
}
// function check(){
//    var x= validationDa();
//    if (x==true){
//        alert("successful");
//        redirect();
    
//    }
//    else{
//        alert("failed")
//    }




