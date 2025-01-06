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


displayNumsDiv.append(displayH2);

// generate numbers

function getRandomIntNumber(quantity, min, max) {  
  return Math.floor(Math.random() * (max - min + 1) + min);
}

