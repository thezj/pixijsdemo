let fabric = require('fabric').fabric
let _ = require('lodash')

let canvas = new fabric.Canvas('canvas')

let redish = new fabric.Color('#f55')
let greenish = new fabric.Color('#5f5')
redish.overlayWith(greenish) // olivine
redish.toGrayscale() //gray

let rect = new fabric.Rect()
rect.set({
    fill: redish.toRgb(),
    left: 100,
    top: 100,
    width: 100,
    height: 100
})
rect.setGradient('fill', {
    x1: 0,
    y1: 50,
    x2: 100,
    y2: 50,
    colorStops: {
        0: 'red',
        0.2: 'orange',
        0.4: 'yellow',
        0.6: 'green',
        0.8: 'blue',
        1: 'purple'
    }
})
canvas.add(rect)