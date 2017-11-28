let canvas = new fabric.Canvas('canvas')
let _ = require('lodash')

canvas.backgroundColor = 'red'

canvas.add(new fabric.Rect({
    left: 50,
    top: 50,
    height: 20,
    width: 20,
    fill: 'green'
}))

canvas.add(new fabric.Rect({
    left: 150,
    top: 150,
    height: 20,
    width: 20,
    fill: 'yellow'
}))

let rect3 = new fabric.Rect({
    left: 250,
    top: 250,
    height: 20,
    width: 20,
    fill: 'purple'
})
rect3.name = 'id123891237fdidsf'
rect3.toObject = (toObject => {
    return function () {
        return fabric.util.object.extend(toObject.call(this), {
            name: this.name
        })
    }
})(rect3.toObject)

canvas.add(rect3)

fabric.loadSVGFromURL('/flower.svg', (objects, options) => {
    let flower = fabric.util.groupSVGElements(objects, options)
    flower.set('sourcePath', '/flower.svg');
    flower.set({
        left: 300,
        top: 300,
        fill: 'gray'
    })
    console.log('nosvg========', JSON.stringify(canvas), '\n\n\n\n\n\n')
    console.log('hassvg========', JSON.stringify(canvas), '\n\n\n\n\n\n')
    canvas.add(flower).renderAll()
    //svg sourcepath format '/path' can not be './path'
    console.log('hassvg toDatalessJSON========', JSON.stringify(canvas.toDatalessJSON()), '\n\n\n\n\n\n')
})


canvas.renderAll()



console.log(canvas.toDataURL('png'))
console.log(canvas.toObject())
// console.log(canvas.toSVG())
let canvasData = null

window.saveCanvas = () => {
    canvasData = canvas.toDatalessJSON()
    console.log(canvasData)
}

window.clearCanvas = () => {
    canvas.clear()
}

window.applyCanvas = () => {
    canvas.loadFromDatalessJSON(JSON.stringify(canvasData))
}