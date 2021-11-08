
//variables

let x
let y
let route // size
let speed = 0 // speed
let traceLength // trace length
let alpha // alpha
let circleSize // circle size
let traceSize // trace size
let red = 255 //color
let green = 0
let blue = 0

//arrays
let lissajousArray = []

class Lissajous {
    constructor(route, traceLength, alpha, circleSize, traceSize) {
        
        this.x = x
        this.y = y
        this.speed = speed
        this.route = route
        this.traceLength = traceLength
        this.alpha = alpha
        this.circleSize = circleSize
        this.traceSize = traceSize
        this.tracesArray = []
    }

    //positionen in array pushen
    saveTraces() { 
        this.tracesArray.push({x: this.x, y: this.y, t: this.speed})
        if(this.tracesArray.length > this.traceLength) {
            this.tracesArray.shift()
        }
    }
    //kreise zeichnen
    drawCircle() {
        fill(red, green, blue);
        noStroke()
        rectMode(CENTER)
        rect(this.x, this.y, this.circleSize-3)
    }
    //traces zeichnen
    drawTraces() {
        for (let i = 1; i < this.tracesArray.length; i++) {
            fill(red, green, blue,this.alpha)
            noStroke()
            ellipse(this.tracesArray[i].x, this.tracesArray[i].y, this.traceSize)  
            this.traceSize = i/12       
        }
    }
    //werte updaten
    update(r) {
        this.x = width / 2 + this.route * sin(3 * this.speed + PI / 2)
        this.y = height / 2 + this.route * sin(this.speed)
        this.speed -= .026
    }
}

function setup() {
    createCanvas(400, 400);
    for (let i = 1; i < 20; i++) {
        lissajousArray.push(new Lissajous(i * 25 + 15, 7 * i + 100, 255 - i * 14, i * 1.2 + 2, i * 1 + 2))
    }
}

function draw() {
    background(0);

    for (let i = 0; i < lissajousArray.length; i++) {
        lissajousArray[i].update()
        lissajousArray[i].drawTraces()
        lissajousArray[i].saveTraces()
        //lissajousArray[i].drawCircle()
    }    
}

function mousePressed() {
    green = random(0,255)
    blue = random(0,255)
}