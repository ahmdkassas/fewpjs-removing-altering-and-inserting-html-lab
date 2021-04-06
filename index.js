


let mainTag = document.querySelector("main#main");
mainTag.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Ahmed is the champion";
document.body.appendChild(newHeader);