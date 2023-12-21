

const display = document.querySelector('.game-container')
const bird = document.querySelector('.bird')

let birdLeft = 100;
let birdBottom = 200;
let gravity = 2;
let height = window.innerHeight -50;
let isGameOver = false; 
let poleHeight = 300


//startgame
//bottom position changes -2px every 20 milliseconds


function startGame(){
    
    if(birdBottom>0)
    birdBottom -= gravity
    bird.style.left = birdLeft + 'px'
    bird.style.bottom = birdBottom + 'px'
}    

let gametimerID = setInterval(startGame,20)

//jump +100px from bottom position
function jump(){
    if(birdBottom < height){ 
    birdBottom += 50
    bird.style.bottom = birdBottom + 'px'}
}

//KeyCode 32 allows only spacebar to activate jump function
function control(e){
if (e.keyCode ===32){
    jump()
}
}

// jump if spacebar, or click
document.addEventListener('keyup', control)
document.addEventListener('click', jump)

//create poles

function generateObstacle(){
    let poleLeft = 400
    let randomHeight = Math.random() * poleHeight + 200
    obstacleHeight = randomHeight
    
    const topPole = document.createElement('div')
    const bottomPole = document.createElement('div')

    if(!isGameOver){
        topPole.classList.add('topPole')
        bottomPole.classList.add('bottomPole')
        display.appendChild(topPole)
        display.appendChild(bottomPole)
    }
    
    
    topPole.style.left = poleLeft + 'px'
    bottomPole.style.left = poleLeft + 'px'
    topPole.style.height = obstacleHeight + 'px'
    bottomPole.style.height =  obstacleHeight + 150 +'px'


    
    // move pole left, generate poles every 3 seconds
    function moveObstacle(){
        poleLeft -=2
        poleBottom = window.innerHeight - obstacleHeight 
        topPole.style.left = poleLeft + 'px'
        bottomPole.style.left = poleLeft + 'px'

        if (poleLeft === -50){
            clearInterval(timerID)
            display.removeChild(topPole)
            display.removeChild(bottomPole)
        }

        if(poleLeft >= 70 && poleLeft<130 && birdLeft ===100  
            && (birdBottom + 45 > poleBottom||birdBottom < poleBottom - 130)  
            
            ||birdBottom === 20){
            gameOver()
            
        }
    }

    let timerID = setInterval(moveObstacle,20)
    if(!isGameOver)setTimeout(generateObstacle,3400)


    function gameOver(){
        console.log('game over')
        clearInterval(gametimerID)
        clearInterval(timerID)
        isGameOver = true
        document.removeEventListener('keyup', control)
        document.removeEventListener('click', jump)
       
    }
}


generateObstacle()



