
//variables
let x
let y
let route // size
let speed = 0 // speed
let traceLength // trace length
let alpha // alpha
let circleSize // circle size
let traceSize // trace size

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
        fill(255, 255, 255);
        ellipse(this.x, this.y, this.circleSize)
    }
    //traces zeichnen
    drawTraces() {
        for (let i = 0; i < this.tracesArray.length; i++) {
            fill(255,255,255,this.alpha)
            ellipse(this.tracesArray[i].x, this.tracesArray[i].y, this.traceSize)
            this.traceSize = i * 0.3
        }
    }
    //werte updaten
    update(r) {
        this.x = width / 2 + this.route * sin(3 * this.speed + PI / 2)
        this.y = height / 2 + this.route * sin(this.speed)
        this.speed -= .02
    }
}

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 20; i++) {
        lissajousArray.push(new Lissajous(i * 30 + 10, 75, 255, i * 1.5 + 5, i * 1.5 + 5))
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