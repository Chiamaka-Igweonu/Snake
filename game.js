import { update as updateSnake, draw as drawSnake, SnakeSpeed, snakeHead, snakeIntersect } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGameboard } from './grid.js'


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
    }
    return
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SnakeSpeed) return


  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkFail()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkFail() {
  gameOver = outsideGameboard(snakeHead()) || snakeIntersect()
}