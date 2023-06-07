var button = document.getElementById("addBtn");
var input = document.getElementById("myInput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.addEventListener("click", toggleItem);
  li.addEventListener("mouseover", mouseToggleElement);
  li.addEventListener("mouseout", mouseToggleElement);
  li.appendChild(document.createTextNode(input.value));
  var span = document.createElement("span");
  span.addEventListener("click", removeItem);
  var txt = document.createTextNode("\u00D7");
  span.hidden = true;
  span.appendChild(txt);
  li.appendChild(span);
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function mouseToggleElement(item) {
  if (item.target.localName === "li") {
    item.target.children[0].classList.toggle("close");
    item.target.children[0].hidden = !item.target.children[0].hidden;
  } else if (item.target.localName === "span") {
    item.target.classList.toggle("close");
    item.target.hidden = !item.target.hidden;
  }
}

function toggleItem(event) {
  event.target.classList.toggle("checked");
}

function removeItem(event) {
  event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
