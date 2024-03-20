import { toggleHiddenElement, changeToFunkyColor } from './dom-functions';

const secretButtonElement = document.getElementById("secret-button");
const secretPElement = document.getElementById("secret-p");

secretButtonElement.addEventListener('click', () => {
  toggleHiddenElement(secretPElement);
  changeToFunkyColor(secretPElement); // Assuming you want to change its color as well when clicked.
});
