

//ball
let ballD = 20
let ballCount = 2
let speedX = 6
let speedY = 6

//traces
let traceLen = 20
let traceDia = 20

//board
let myBoard
let boardGap = 100
let boardSizeX = 150
let boardSizeY = 12

//arrays
let ballPos = []
let traces = []

//class board
class Board {
    constructor() {
        this.boardX = mouseX
        this.boardY = boardGap
    }

    newBoard() {
        rect(this.boardX - boardSizeX/2, windowHeight - boardGap - boardSizeY, boardSizeX, boardSizeY)
    }
    updateBoard() {
        this.boardX = mouseX
    }
}

//class balls
class Ball {
    constructor() {
        this.ballX = random(20, width)
        this.ballY = random(20, height/2)
        this.speedX = speedX
        this.speedY = speedY
    }
    
    drawBall() {
        ellipse(this.ballX, this.ballY, ballD)
    }
    checkPosition() {
        if(this.ballX - ballD/2  < 0 || this.ballX + ballD/2 > windowWidth) {
        this.speedX *= -1
        }
        if(this.ballY - ballD/2 < 0 || this.ballY + ballD/2 > windowHeight) {
        this.speedY *= -1
        }
    }
    updatePosition() {
        this.ballX += this.speedX
        this.ballY += this.speedY
    }
    pushTraces() {
        traces.push({x: this.ballX, y: this.ballY})
        if (traces.length > traceLen){
            traces.shift()
        }
    }
    drawTraces() {
        for (let j = 0; j < traces.length; j += 1){
            ellipse(traces[j].x + random(-3,3), traces[j].y + random(1,3), traceDia)
        }   
    }
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    
    for (let i = 0; i < ballCount; i += 1) {
        ballPos.push(new Ball())
    }
    
    myBoard = new Board
}
  

function draw() {

    //hintergrund
    background(255)

    //loop und methoden balls
    for (let i = 0; i < ballPos.length; i += 1) {
        ballPos[i].pushTraces()
        ballPos[i].drawTraces()
        ballPos[i].checkPosition()
        ballPos[i].updatePosition()
        //ballPos[i].drawBall()
    }

    //methoden board
    myBoard.newBoard()
    myBoard.updateBoard()
    


    //board_richtungswechsel
    //if(ballY > windowHeight - boardGap - boardSizeY - ballD/2 && ballX > mouseX - boardSizeX/2 && ballX < mouseX + boardSizeX/2){
    //    speedY = -speedY
    //}
}
