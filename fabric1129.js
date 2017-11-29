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
    })
    console.log('nosvg========', JSON.stringify(canvas), '\n\n\n\n\n\n')
    console.log('hassvg========', JSON.stringify(canvas), '\n\n\n\n\n\n')
    canvas.add(flower).renderAll()
    //svg sourcepath format '/path' can not be './path'
    console.log('hassvg toDatalessJSON========', JSON.stringify(canvas.toDatalessJSON()), '\n\n\n\n\n\n')
})


canvas.renderAll()
canvas.isDrawingMode = true

console.log(canvas.toDataURL('png'))
console.log(canvas.toObject())
// console.log(canvas.toSVG())
let canvasData = null

window.saveCanvas = () => {
    canvasData = canvas.toObject()
    console.log(canvasData)
}

window.clearCanvas = () => {
    canvas.clear()
}


window.applyCanvas = () => {
    canvas.loadFromDatalessJSON(JSON.stringify(canvasData))
}

let $ = id => {
    return document.querySelector(id)
}
// 绘图画笔设置
let drawoperate = $('#drawoperate'),
    drawingbrush = $('#brushmode'),
    drawingColorEl = $('#drawing-color'),
    drawingLineWidthEl = $('#drawing-line-width')

drawingColorEl.addEventListener('change', i => {
    canvas.freeDrawingBrush.color = drawingColorEl.value
})

drawingLineWidthEl.addEventListener('change', i => {
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1
})

let vLinePatternBrush = new fabric.PatternBrush(canvas)
vLinePatternBrush.getPatternSrc = function () {
    var patternCanvas = fabric.document.createElement('canvas');
    patternCanvas.width = patternCanvas.height = 10
    var ctx = patternCanvas.getContext('2d')
    ctx.strokeStyle = this.color
    ctx.lineWidth = 5;
    ctx.beginPath()
    ctx.moveTo(2.5, 0)
    ctx.lineTo(2.5, 5)
    ctx.stroke()
    return patternCanvas
}

let diamondPatternBrush = null
fabric.loadSVGFromURL('./diamond.svg', (objects, options) => {
    window.diamond = fabric.util.groupSVGElements(objects, options)
    diamond.set({
        left: 0,
        top: 0,
        scaleX: 0.2,
        scaleY: 0.2,
        originX: 'center',
        originY: 'center'
    })
    diamondPatternBrush = new fabric.PatternBrush(canvas)
    diamondPatternBrush.getPatternSrc = () => {
        var patternCanvas = fabric.document.createElement('canvas')
        patternCanvas.width = patternCanvas.height = 50
        diamond.set({
            left: patternCanvas.width / 2,
            top: patternCanvas.width / 2
        })
        diamond.render(patternCanvas.getContext('2d'))

        return patternCanvas
    }
})

// 图片texture纹理笔刷
/*
var img = new Image();
img.src = '../assets/honey_im_subtle.png';

var texturePatternBrush = new fabric.PatternBrush(canvas);
texturePatternBrush.source = img;
 */

let setBrushProperty = i => {
    canvas.freeDrawingBrush.color = drawingColorEl.value
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1
}
setBrushProperty()
drawingbrush.addEventListener('change', i => {
    switch (drawingbrush.value) {
        case 'pencil':
            canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)
            break;
        case 'cross':
            canvas.freeDrawingBrush = vLinePatternBrush
            break;
        case 'diamond':
            canvas.freeDrawingBrush = diamondPatternBrush
            break;
    }
    setBrushProperty()
})

window.editable = i => {
    canvas.isDrawingMode = false
    drawoperate.style.display = 'none'
}

window.uneditable = i => {
    canvas.isDrawingMode = true
    drawoperate.style.display = 'block'
}



window.clearSelected = i => {
    canvas.getActiveObjects().map(i => {
        canvas.remove(i)
    })
}