

const display = document.querySelector('.game-container')
const bird = document.querySelector('.bird')

let birdLeft = 100;
let birdBottom = 200;
let gravity = 2;
let height = screen.height;


function startGame(){
    
    if(birdBottom>0)
    birdBottom -= gravity
    bird.style.left = birdLeft + 'px'
    bird.style.bottom = birdBottom + 'px'
}

let timerID = setInterval(startGame,20)

function jump(){
    if(birdBottom < height-200){ 
    birdBottom += 50
    bird.style.bottom = birdBottom + 'px'}
}

document.addEventListener('keyup', jump)
document.addEventListener('click', jump)

console.log(height)