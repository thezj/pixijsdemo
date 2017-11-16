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

window.rect = rect