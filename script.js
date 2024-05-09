//<!--David Zeff 207875147-->
//<!--Maha Elriati 208313197-->
const form = document.querySelector("#myForm"); //this will hold all our form info

form.addEventListener("submit", function (event) {
    event.preventDefault(); //must have this line of code to not have issues

    //put all our form info into variables for readibility
    const firstName = form.elements.fname.value;
    const lastName = form.elements.lname.value;
    const phoneNumber = form.elements.phoneNumber.value;
    const email = form.elements.mail.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPass.value;
    //password error will pop up besides password field in case of error
    const passwordErrorMsg = document.querySelector(".passwordError");
    const errorOccured = false
    //check if email field is empty
    if(email==null||email==''){
        document.querySelector("#Mail").style.border="1px solid red"
        errorOccured = true
    }//check if password field is empty
    if(password==null||password==''){
        
        passwordErrorMsg.textContent = "Error! password field empty, try again"
        passwordErrorMsg.style.color="red"
        errorOccured = true
    }
    if(confirmPassword==null||confirmPassword==''){
        passwordErrorMsg.textContent = "Error! password field empty, try again"
        passwordErrorMsg.style.color="red"
        errorOccured = true
    }//check if password field is shorter than 8, and if so pop up a message near the the fields
    if(password.length<8){
        passwordErrorMsg.textContent = "Error! password too short, try again"
        passwordErrorMsg.style.color="red"
        errorOccured = true
    }//check if passwords are not equal, and if so pop up a message near the the fields
    if(password != confirmPassword){
        passwordErrorMsg.textContent = "Error! passwords do not match, try again"
        errorOccured = true
    }//in case no errors dont put up any messages
    if(!errorOccured){
        passwordErrorMsg.textContent='Successfully Signed Up!'
        passwordErrorMsg.style.color="green"
    }


});
