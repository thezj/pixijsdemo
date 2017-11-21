let fabric = require('fabric').fabric

let canvas = new fabric.Canvas('canvas')
let path = new fabric.Path('M0 0 L100 100 L0 100 Z')
path.set({
    left: 100,
    top: 100,
    fill: 'red',
    stroke: 'green',
    opacity: 0.5,
    angle: -15
})

canvas.add(path)

path.animate('left', '+=100', {
    from: -500,
    duration: 300,
    easing: fabric.util.ease.easeOutBounce,
    onComplete() {
        console.log('left axis increase to 200 complete')
    },
    onChange(e) {
        console.log(e)
        canvas.renderAll()
    }
})

path.animate('angle', '+=90', {
    onChange(e) {
        canvas.renderAll()
    }
})

path.animate('scaleX', '+=1', {
    onChange(e) {
        canvas.renderAll()
    }
})