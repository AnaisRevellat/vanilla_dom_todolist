var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var existingLiItems = document.querySelectorAll("li");


function inputLength() {
  return input.value.length;
}


function createListElement() {
  var li = document.createElement("li");
  var deleteBtn = document.createElement("button");

  var span = document.createElement("span");
  span.className = "triangle";

  var paragraph = document.createElement("p");
  paragraph.textContent = input.value;

  li.appendChild(span);
  li.appendChild(paragraph);
  ul.appendChild(li);

  input.value = "";
  li.addEventListener("click", toggleDoneClass);

  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  // add an event to delete a row
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    deleteItem(li);
  });
}


function toggleDoneClass() {
  this.classList.toggle("done");
  console.log("added");
}

function addElementAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addElementAfterKeyPress(event) {
  if (inputLength() > 0 && event.key === "Enter" && event.target === input) {
    createListElement();
  }
}


function createDeleteBtn () {
    var deleteBtn = document.createElement("button");  
    deleteBtn.appendChild(document.createTextNode("X"));
    return deleteBtn;    
}

function deleteItem(li) {
    ul.removeChild(li);   
}


/*loop to add a .done toggle class to existing items*/
for(let i = 0; i < existingLiItems.length; i++){
    //button creation
    var deleteBtn = createDeleteBtn();    
    var deleteAllowAction = existingLiItems[i].append(deleteBtn);

    //on click the toggleDoneClass is on or off
    existingLiItems[i].addEventListener("click", toggleDoneClass);
    console.log(existingLiItems[i]);

    //delete a li row
    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        deleteItem(existingLiItems[i]);
    });
   
}

button.addEventListener("click", addElementAfterClick);

input.addEventListener("keydown", addElementAfterKeyPress);

/*----------------FOR EACH---------------------------*/

// function listExistingLi() {
//     var itemList = document.querySelectorAll("ul li");
//     itemList.forEach(function (item) {
//         item.addEventListener("click", toggleDoneClass);
//         console.log("ok");
//     });
// }

// listExistingLi();
