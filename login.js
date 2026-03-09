const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

const username = document.querySelector("input[type='text']").value;
const password = document.querySelector("input[type='password']").value;

const defaultUser = "admin";
const defaultPass = "admin123";

if(username === defaultUser && password === defaultPass){

alert("Login Successful!");

window.location.href = "main.html";

}else{

alert("Invalid Username or Password");

}

});
