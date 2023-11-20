let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameIput = document.getElementById("nameInput");
let title = document.getElementById("title");

signUp.onclick = function(){
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.remove("disable");
    signIn.classList.add(disable);
}

signIn.onclick = function(){
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add(disable);
}