var em= document.getElementById("email");
var p1= document.getElementById("pwd");
var b1= document.getElementById("btn");

function show(){
    em.style.backgroundColor="orange";

}
function hide(){
    em.style.backgroundColor="white";
}
/*function validate(){
    alert("success");
}*/
b1.addEventListener("click", function(){      // while using addEventListener omit the 'on' part from onclick etc... 
    alert("hello");
})