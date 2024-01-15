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

  li.appendChild(document.createTextNode(input.value));
  ul.append(li);
  input.value = "";
  li.addEventListener("click", toggleDoneClass); 
  deleteBtn.appendChild(document.createTextNode("X"));
  li.append(deleteBtn);
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
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

// function deleteItem () {

// }

function createDeleteBtn () {
    
}

/*loop to add a .done toggle class to existing items*/
for(let i = 0; i < existingLiItems.length; i++){
    var deleteBtn = document.createElement("button");  
    deleteBtn.appendChild(document.createTextNode("X"));
    existingLiItems[i].append(deleteBtn);


    existingLiItems[i].addEventListener("click", toggleDoneClass);
    console.log(existingLiItems[i]);

}

// deleteBtn.addEventListener("click", deleteItem);

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
