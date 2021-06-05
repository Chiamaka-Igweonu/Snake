// importing modules from other javascript files
import { onSnake, expandSnake } from "./snake.js"
import {randomGridPosition} from "./grid.js"

let food =  getRandomFoodPosition()
const expansionRate = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }
    
  }
  // draw food ontop screen
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
  }
// position food in a random different different from where the snake is
function getRandomFoodPosition(){
  let newFoodPosition 
  while (newFoodPosition == null || onSnake(newFoodPosition) ){
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}



