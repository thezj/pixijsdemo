let fabric = require('fabric').fabric
let canvas = new fabric.Canvas('canvas')


//create a rectangle object
let rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 60,
    height: 70,
    fill: '#88ee88',
    angle: 45
})
//add rectangle onto canvas
canvas.add(rect)

rect.scaleToHeight(200)
//rerender canvas to get a fresh picture
canvas.renderAll()

let circle = new fabric.Circle({
    radius: 50,
    fill: 'green',
    left: 200,
    top: 200,
})

canvas.add(circle)

let triangle = new fabric.Triangle({
    left: 100,
    top: 300,
    width: 60,
    height: 70,
    fill: '#88ee88',
})

canvas.add(triangle)

triangle.set({
    fill: 'red',
    strokeWidth: 5,
    stroke: 'purple',
    angle: 12,
    flipY: true
})

canvas.renderAll()

//object in fabric always have a default set of properties
//when  omited during creation, it's default set of properties that's given to object
let rect2 = new fabric.Rect()

canvas.add(rect2)
canvas.renderAll()
