//specifying grid size for the gameboard
const gridSize = 21

//function for random position
export function randomGridPosition(){
    return{
        x: Math.floor(Math.random() * gridSize) + 1,
        y: Math.floor(Math.random() * gridSize) + 1
    }
}
// setting the wall position for gameover
export function outsideGameboard(position){
    return (
        position.x < 1 || position.x > gridSize || 
        position.y < 1 || position.y > gridSize 

    )

}