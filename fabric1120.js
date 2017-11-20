let fabric = require('fabric').fabric
fabric.Object.prototype.getAngleinRadians = function () {
    return this.get('angle') / 180 * Math.PI
}

let canvas = new fabric.Canvas('canvas')
//if you don't want such interactivity layer at all, you can always substitute fabric.canvas with fabric.StaticCanvas
//let staticcanvas = new fabric.StaticCanvas('canvas')
canvas.setBackgroundImage('http://suo.im/cNexe', i => {
    canvas.renderAll()
})

let rect2 = new fabric.Rect()
rect2.set({
    left: 100,
    top: 100,
    width: 10,
    height: 10,
    angle: 180
})
canvas.add(rect2)
//角度180 = 弧度PI（3.141592653）
console.log(rect2.get('angle'))
console.log(rect2.getAngleinRadians())

console.log(canvas.item(0))
console.log(canvas.getObjects())
// canvas.remove(rect2)

//disable group selection
canvas.selection = false
//make object unselectable
rect2.set('selectable', false)

let imagedom = new Image()
imagedom.src = './bunny.png'
imagedom.onload = e => {
    let fabricimage = new fabric.Image(imagedom, {
        left: 200,
        top: 200,
        angle: 30,
        opacity: 0.85,
        scaleX: 5,
        scaleY: 5,
    })
    canvas.add(fabricimage)
    canvas.renderAll()
}

fabric.Image.fromURL('./ducati.jpg', img => {
    canvas.add(img)
    img.scale(0.2)
    canvas.renderAll()
})