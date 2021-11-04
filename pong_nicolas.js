
//traces
let traceLen = 10
let traceDia = 20

//ball
let ballX = 120
let ballY = 50
let ballD = 50
let speedX = 5
let speedY = 5

//board
let boardSizeX = 120
let boardSizeY = 10
let boardGap = 50

let test = 33
//traces
let traces = []

//class ball
class Ball {
    constructor() {
        this.ballX = random(width)
        this.ballY = 50
    }
    show() {
        ellipse(this.ballX, this.ballY, ballD)
    }
    checkPosition() {
        if(this.ballX - ballD/2  < 0 || this.ballX + ballD/2 > windowWidth) {
        speedX = -speedX
        }
        if(this.ballY - ballD/2 < 0 || this.ballY + ballD/2 > windowHeight) {
        speedY = -speedY
        }
    }
    updatePosition() {
        this.ballX += speedX
        this.ballY += speedY
    }
}

let ball1 = new Ball
let ballTraces = []

//class board
class Board {
    constructor(a) {
        this.boardX = a
        this.boardY = boardGap
    }
    show() {
        rect(this.boardX, this.boardY, boardSizeX, boardSizeY)
    }
}

let board1 = new Board





function setup() {
    createCanvas(windowWidth, windowHeight);

    //for (let i = 0; i < traceLen; i += 1) {
    //    ballTraces.push(new Ball)
    //}
}
  



function draw() {

    //hintergrund
    background(255)


    ball1.show()
    ball1.checkPosition()
    ball1.updatePosition()


    //traces speichern
    //let traceX = ballX
    //let traceY = ballY
    //traces.push({x: traceX, y: traceY})
    
    //anzahl objekte beschränken
    //if (traces.length > traceLen){
    //   traces.shift()
    //}

    //traces zeichnen
    //for (let i = 0; i < traces.length; i += 1){
    //    ellipse(traces[i].x, traces[i].y, traceDia)
    //}

    //ball zeichnen
    //ellipse(ballX, ballY, ballD)
    //ballX = ballX + speedX
    //ballY = ballY + speedY

    //richtungswechsel
    //if(ballX - ballD/2  < 0 || ballX + ballD/2 > windowWidth){
    //    speedX = -speedX
    //}
    //if(ballY - ballD/2 < 0 || ballY + ballD/2 > windowHeight){
    //    speedY = -speedY
    //}

    //board
    //rect(mouseX - boardSizeX/2, windowHeight - boardGap - boardSizeY, boardSizeX, boardSizeY)

    //board_richtungswechsel
    //if(ballY > windowHeight - boardGap - boardSizeY - ballD/2 && ballX > mouseX - boardSizeX/2 && ballX < mouseX + boardSizeX/2){
    //    speedY = -speedY
    //}
}
