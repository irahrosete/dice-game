import {updateDiceImage} from "./src/utils.js"
const diceElement = document.querySelector("img")
const button = document.querySelector("button")

button.addEventListener("click", () => updateDiceImage(diceElement))