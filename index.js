
const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonVeg  = document.querySelector("#One");
const buttonMeat = document.querySelector("#Two");


buttonVeg.addEventListener("click", healthy1);

function healthy1 () {
    image.setAttribute("src", "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.textContent = "Good choice ! Are you sure ?";
    buttonVeg.textContent = "Yes,i am !";
    buttonMeat.textContent = "Mmm , i like meat !";

buttonVeg.addEventListener("click", healthy2);
}
function healthy2 () {
    image.setAttribute("src" , "https://plus.unsplash.com/premium_photo-1681825880788-a004d154d565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG9sZCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.textContent = "Keep it up !";
    buttonMeat.style = "display:none";
    buttonVeg.style = "display:none";
    text.addEventListener("click", redirect);

function redirect () {
    window.location.href = "index.html";
}

buttonMeat.addEventListener("click" , sad1);
}
function sad1 () {
image.setAttribute("src", "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60");
text.textContent = "Hmm , one question ...  ";
buttonVeg.textContent = "Is it organic ?";
buttonMeat.textContent = "It doesn't matter.";

buttonMeat.addEventListener("click", sad2);
}
function sad2 () {
    image.setAttribute("src" , "https://images.unsplash.com/photo-1528733918455-5a59687cedf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHZlZ2dpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.textContent = "You should consider adding more veggies in your diet !";
    buttonVeg.style = "display:none";
    buttonMeat.style = "display:none";

}


