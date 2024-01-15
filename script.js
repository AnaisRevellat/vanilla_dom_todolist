var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement () {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.append(li);
        input.value ="";
}


function addElementAfterClick () {  
    if(inputLength() > 0) {
       createListElement();
    } 
}

function addElementAfterKeyPress (event) {
    if(inputLength() > 0 && event.key ==="Enter") {
        createListElement();
      } 
}


button.addEventListener("click", addElementAfterClick);

input.addEventListener("keydown", addElementWithKeyPress);


