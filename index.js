const randomNumsArr = []; // random numbers storage
const root = document.querySelector("body");


// DOM element generator
function getDOMElement(name = "div", className = "") {
  const newDOMElement = document.createElement(name);

  if (className) {
    newDOMElement.classList.add(className);
  }

  return newDOMElement;
}

// input generator

function getInput(labelText, type = "text", inputClass = "input", placeholder = "Type here", labelClass = "label", inputContainerClass = "inputContainer") {
  const inputContainer = document.createElement("p");
  inputContainer.classList.add(inputContainerClass)
  const newLabel = document.createElement("label");  
  newLabel.textContent = labelText;
  newLabel.classList.add(labelClass);
  const br = document.createElement("br");
  const newInput = document.createElement("input");
  newInput.type = type;
  if (placeholder) {
    newInput.placeholder = placeholder;
  }
  newInput.classList.add(inputClass);
  inputContainer.append(newLabel);
  newLabel.append(br, newInput);

  return inputContainer;
}

// list item generator 

function getListItem(className, textContent = "") {
  const liItem = document.createElement("li");
  liItem.classList.add(className);
  if (textContent) {
    liItem.textContent = textContent;
  }
  return liItem;
}

// Button generator

function getButton(type = "button", className = "button", text = "") {
  const btn = document.createElement("button");
  btn.type = type;
  btn.classList.add(className);
  btn.textContent = text;

  return btn;
}
// DOM generation

const header = getDOMElement("header", "header");
const main = getDOMElement("main", "main");
const footer = getDOMElement("footer", "footer");
root.append(header, main, footer);

// header

const heading1 = getDOMElement("h1", "heading1");
heading1.textContent = "RANDOM NUMBERS GENERATOR";
header.append(heading1);

// main

const aside = getDOMElement("aside", "aside");
const displayNumsDiv = getDOMElement("div", "displayNums");
main.append(aside, displayNumsDiv);

// aside

const asideH2 = getDOMElement("h2", "heading2");
asideH2.textContent = "Input";

const form = getDOMElement("form", "form");
const inputList = getDOMElement("ul", "inputList")

const liItem1 = getListItem("listItem");
const numQuantity = getInput("Numbers Quantity", "tel")
liItem1.append(numQuantity);

const liItem2 = getListItem("listItem");
const min = getInput("MIN", "tel");
liItem2.append(min);

const liItem3 = getListItem("listItem");
const max = getInput("MAX", "tel");
liItem3.append(max);

inputList.append(liItem1, liItem2, liItem3);
const btnContainer = getDOMElement("div", "btnContainer");
const genBtn = getButton("submit", "btn", "Generate");
const clearBtn = getButton("button", "btn", "Clear");
btnContainer.append(genBtn, clearBtn);
form.append(inputList, btnContainer);
aside.append(asideH2, form);

// display

const displayH2 = getDOMElement("h2", "heading2");
displayH2.textContent = "Display";

const numList = getDOMElement("ul", "numUl");

displayNumsDiv.append(displayH2, numList);


// footer

const gitLinkContainer = getDOMElement("div", "link-container");
const gitLink = getDOMElement("a", "link");
gitLink.href = "https://github.com/EvgeniyMorozov164";
gitLink.textContent = "My GitHub";
gitLink.target = "_blank";
gitLink.title = '(")_(O_o)_(") Бу! Испугался?';
gitLinkContainer.append(gitLink); 

const yearContainer = getDOMElement("div", "year-container");
const year = getDOMElement("p", "year");
year.textContent = new Date().getFullYear();
year.title = "Current year. For Sure.";
yearContainer.append(year);
footer.append(gitLinkContainer, yearContainer);

// generate numbers

function getRandomIntNumber(quantity, min, max) {  
    for (let i = 0; i < quantity; i++) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    randomNumsArr.push(num);
  }
  
  return randomNumsArr;
}


function renderList(array) {  
  for (num of array) {
    const newNumLiItem = getListItem("numListItem", num);
    numList.append(newNumLiItem);
  }
  return numList;
}

function clear() {
  numQuantity.firstChild.children[1].value = "";
  min.firstChild.children[1].value = "";
  max.firstChild.children[1].value = "";
  numList.innerHTML = "";
  randomNumsArr.length = 0;
}
// events

form.addEventListener("submit", (e) => {
  e.preventDefault();
  randomNumsArr.length = 0;
  const quantity = Number(numQuantity.firstChild.children[1].value);
  const minimal = Number(min.firstChild.children[1].value);
  const maximal = Number(max.firstChild.children[1].value);
  console.log("click",quantity, minimal, maximal);
  getRandomIntNumber(quantity, minimal, maximal);
  renderList(randomNumsArr);
});

clearBtn.addEventListener("click", clear);