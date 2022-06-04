var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function generateRandomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;   
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", function() {
    let newColor1 = "#" + Math.floor(Math.random()*16777215).toString(16).toString();
    console.log(newColor1);
    color1.value = newColor1;
    let newColor2 = "#" + Math.floor(Math.random()*16777215).toString(16).toString();
    console.log(newColor2);
    color2.value = newColor2;
    setGradient();
})