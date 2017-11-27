let canvas = new fabric.Canvas('canvas')
let _ = require('lodash')


let circle = new fabric.Circle({
    radius: 100,
    fill: '#eef',
    scaleY: 0.5,
    originX: 'center',
    originY: 'center'
})

let circlex = new fabric.Circle({
    radius: 10,
    fill: 'red',
    scaleY: 0.5,
    left: 20,
    top: 20,
    originX: 'center',
    originY: 'center'
})

canvas.add(circlex)

let text = new fabric.Text('hello world', {
    fontSize: 30,
    originX: 'center',
    originY: 'center'
})

let group = new fabric.Group([circle, text], {
    left: 50,
    top: 50,
    angle: -10
})

canvas.add(group)

group.item(0).setFill('red')
group.item(1).set({
    text: 'trololo',
    fill: 'white'
})

let circle1 = new fabric.Circle({
    radius: 50,
    fill: 'red',
    left: 0
})
let circle2 = new fabric.Circle({
    radius: 50,
    fill: 'green',
    left: 100
})
let circle3 = new fabric.Circle({
    radius: 50,
    fill: 'blue',
    left: 200
})

let group2 = new fabric.Group([circle1, circle2, circle3], {
    left: 50,
    top: 140
})

canvas.add(group2)

let rectangle = new fabric.Rect({
    height: 30,
    width: 30,
    left: group2.get('left') + 100,
    top: group2.get('top') + 100
})

group2.addWithUpdate(rectangle)

fabric.Image.fromURL('./ducati.jpg', img => {
    let img1 = img.scale(0.1).set({
        left: 100,
        top: 100
    })
    fabric.Image.fromURL('./ducati.jpg', img => {
        let img2 = img.scale(0.1).set({
            left: 130,
            top: 120
        })
        fabric.Image.fromURL('./ducati.jpg', img => {
            let img3 = img.scale(0.1).set({
                left: 160,
                top: 140
            })
            canvas.add(new fabric.Group([img1, img2, img3], {
                left: 200,
                top: 200
            }))
        })
    })
})


let copiesgroup = new fabric.Group([fabric.util.object.clone(canvas.item(0)).set({
    angle: 0
})], {
    left: 0,
    top: 0,
    width: 500,
    height: 500,
})

console.log(-copiesgroup.get('width') / 2, copiesgroup.item(0).get('left'), copiesgroup.item(0).get('top'))
copiesgroup.item(0).set({
    // left: copiesgroup.item(0).get('left') - copiesgroup.get('width') / 2,
    // top: copiesgroup.item(0).get('top') - copiesgroup.get('height') / 2
})



canvas.add(copiesgroup)

// create a group with copies of existing (2) objects
var groupx = new fabric.Group([
    fabric.util.object.clone(canvas.item(0)).set({
        left:0
    })
]);

// remove all objects and re-render
// canvas.clear().renderAll();

// add group onto canvas
canvas.add(groupx);