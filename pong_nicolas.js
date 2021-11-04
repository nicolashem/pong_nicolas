

let x = 120
let y = 50

//traces
let traceX
let traceY
let traceLen = 10
let traceDia = 40

let d = 50

let speedX = 5
let speedY = 5

let boardSizeX = 120
let boardSizeY = 5
let boardGap = 50


let traces = []


function setup() {
    createCanvas(windowWidth, windowHeight);
}
  



function draw() {

    //hintergrund
    background(255)

    //ball zeichnen
    ellipse(x,y,d)
    x = x + speedX
    y = y + speedY

    //traces speichern
    traceX = x
    traceY = y
    traces.push({x: traceX, y: traceY})
    
    //anzahl objekte beschränken
    if (traces.length > traceLen){
       traces.shift()
    }

    //traces zeichnen
    //for (i=0; i<traceLen; i+=1){
    //    ellipse(traces[i].x, traces[i].y, traceDia)
    //}
    console.log(traces)

    //richtungswechsel
    if(x - d/2  < 0 || x + d/2 > windowWidth){
        speedX = -speedX
    }
    if(y - d/2 < 0 || y + d/2 > windowHeight){
        speedY = -speedY
    }

    //board
    rect(mouseX - boardSizeX/2, windowHeight - boardGap, boardSizeX, boardSizeY)

    //board_richtungswechsel
    if(y > windowHeight - boardGap - boardSizeY && x > mouseX - boardSizeX/2 && x < mouseX + boardSizeX/2){
        speedY = -speedY
    }
}
