let canvas = new fabric.Canvas('canvas')

//use fabric.IText to edit text
let text = new fabric.Text('哈哈\n我是新的一行', {
    linethrough: true,
    underline: true,
    overLine: true,
    left: 100,
    top: 100,
    fontSize: 60,
    fontWeight: 'bold',
    fontFamily: '方正兰亭超细黑简体',
    shadow: 'gray 5px 5px 10px',
    fontStyle: 'italic',
    stroke: 'red',
    strokeWidth: 1,
    textAlign: 'right',
    lineHeight: 1.5,
    textBackgroundColor: 'rgb(0,100,0)',
})

text.on({
    //mousedown mouse:down
    'mousedown': function (e) {
        console.log(e)
    }
});
canvas.on({
    //mousedown mouse:down
    'touch:drag': function (e) {
        // console.log(e.e.touches[0].pageX)
        console.log(e)
    }
});
canvas.add(text)