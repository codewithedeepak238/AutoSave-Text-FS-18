const text = document.getElementById("text-area");
const mode = document.getElementById("set_mode");

if(localStorage.getItem("text")){
    text.value = localStorage.getItem("text")
}

function changeHandler(){
    localStorage.setItem("text", this.value)
}

function changeMode(){
    mode.classList.toggle("darkMode");
    document.body.classList.toggle("bg");
    document.getElementById("heading").classList.toggle("color")
}

mode.addEventListener("click", changeMode);

text.addEventListener("change", changeHandler)