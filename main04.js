let signUp = document.getElementById("singUp");
let signIn = document.getElementById("singIn");
let nameIput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function(){
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add(disable);
}