var eml= document.getElementById("email");
var passw= document.getElementById("pwd");
var btn1= document.getElementById("btn");
var error1= document.getElementById("err1");
var error2= document.getElementById("err2");

function validate(){
    if((eml.value.trim()=="")||(passw.value.trim()=="")){   //trim() is a string function used to remove spaces 
        return false;
    }else if(passw.value.length<5){
       // alert("password should be greater than 5");
       error2.innerText="password should be greater than 5";
       passw.style.border="2px solid red";
        return false;
    }
    else{
        return true;
    }
}