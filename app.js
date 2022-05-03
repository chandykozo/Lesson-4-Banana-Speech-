var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
function clickHandler() {
    console.log("clicked");
    console.log(txtInput.value);
    outputDiv.innerText ="Translated Text : \n"+ txtInput.value
};
btnTranslate.addEventListener("click", clickHandler)