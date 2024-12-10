var email= document.getElementById("email");
var error1= document.getElementById("err1");

function validate(){
    let regEx= /^([a-zA-Z0-9.-]+)@([a-zA-Z]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;              // a type of regular expression. Divided into 4 parts,things within the split are not mandatory but between the split are mandatory. 
    if(regEx.test(email.value)){

    
    error1.innerText="Email is valid";
    return true;
    }
    else{
        error1.innerText="Invalid";
        return false;
    }
}