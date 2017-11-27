let canvas = new fabric.Canvas('canvas')
let info = document.querySelector('#log')
let rect = new fabric.Rect({
    width: 100,
    height: 100,
    fill: 'green'
})

//on object using event'selected' on canvas is event'object:selected'
rect.on('selected', i => {
    console.log('selected a rectangle')
})
canvas.add(rect)
canvas.on('mouse:down', options => {
    if (!options.target) {
        return
    }
    console.log(options.e.clientX, options.e.clientY)
})

canvas.on({
    'touch:gesture': function () {
        var text = document.createTextNode(' Gesture ');
        info.insertBefore(text, info.firstChild);
    },
    'touch:drag': function () {
        var text = document.createTextNode(' Dragging ');
        info.insertBefore(text, info.firstChild);
    },
    'touch:orientation': function () {
        var text = document.createTextNode(' Orientation ');
        info.insertBefore(text, info.firstChild);
    },
    'touch:shake': function () {
        var text = document.createTextNode(' Shaking ');
        info.insertBefore(text, info.firstChild);
    },
    'touch:longpress': function () {
        var text = document.createTextNode(' Longpress ');
        info.insertBefore(text, info.firstChild);
    }
})