import {dishes} from "./data/food.json"
import createList from "./templates/food.hbs"

const boxElement = document.querySelector(".box");

const data = createList({dishes});


boxElement.innerHTML = data;
console.log(data)