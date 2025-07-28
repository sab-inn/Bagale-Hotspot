const signinBtn = document.getElementById("signinBtn");
const loginBtn = document.getElementById("loginBtn"); // Corrected ID
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");

loginBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Login";
    signinBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}

signinBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign In";
    signinBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
}

function showModel(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.form-box').classList.add('showform-box');
}

function closeModel(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.form-box').classList.remove('showform-box');
}
var closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", closeModel);
