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

function getInput(type = "text", placeholder = "") {
  const newInput = document.createElement("input");
  newInput.type = type;
  if (placeholder) {
    newInput.placeholder = placeholder;
  }

  return newInput;
}

// DOM generation

const header = getDOMElement("header", "header");
const main = getDOMElement("main", "main");
const footer = getDOMElement("footer", "footer");
root.append(header, main, footer);