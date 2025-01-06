const randomNumsArr = []; // random numbers storage
const root = document.querySelector("body");

function getDOMElement(name = "div", className = "") {
  const newDOMElement = document.createElement(name);

  if (className) {
    newDOMElement.classList.add(className);
  }

  return newDOMElement;
}