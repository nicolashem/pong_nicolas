
let x
let y
let t = 0
let r
let alpha = 255
let circleSize = 5
let tracesSize = 5
let tracesArray = []

let lissy
let lissy2

class Lissajous {
    constructor(r) {
        this.t = t
        this.x = x
        this.y = y
        this.r = r
        this.alpha = alpha
    }

    saveTraces() {
        tracesArray.push({x: this.x, y: this.y, t: this.t})
        if(tracesArray.length > 100) {
            tracesArray.shift()
        }
    }

    drawCircle() {
        fill(255, 255, 255);
        ellipse(this.x, this.y, circleSize, circleSize)
    }

    drawTraces() {
        for (let i = 0; i < tracesArray.length; i++) {
            fill(255,255,255,this.alpha)
            ellipse(tracesArray[i].x, tracesArray[i].y, tracesSize, tracesSize)
        }
    }

    update(r) {
        this.x = width / 2 + this.r * sin(3 * this.t + PI / 2)
        this.y = height / 2 + this.r * sin(this.t)
        this.t += .01
    }
}

function setup() {
    createCanvas(500, 500);
    
    lissy = new Lissajous(200)
    lissy2 = new Lissajous(150)
}

function draw() {
    background(0);

    lissy.saveTraces()
    lissy.update()
    lissy.drawCircle()
    lissy.drawTraces()

    lissy2.saveTraces()
    lissy2.update()
    lissy2.drawCircle()
    lissy2.drawTraces()
}