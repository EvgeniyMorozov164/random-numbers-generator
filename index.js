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

function getInput(labelText, type = "text", placeholder = "") {
  const newLabel = document.createElement("label");  
  newLabel.textContent = labelText;
  const newInput = document.createElement("input");
  newInput.type = type;
  if (placeholder) {
    newInput.placeholder = placeholder;
  }
  newLabel.append(newInput)
  return newLabel;
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
asideH2.textContent = "INPUT";

