let canvas = new fabric.Canvas('canvas')
let _ = require('lodash')

let Point = fabric.util.createClass({
    initialize(x = 0, y = 0) {
        this.x = x
        this.y = y
    },
    toString() {
        return `${this.x}/${this.y}`
    }
})

var ColoredPoint = fabric.util.createClass(Point, {
    initialize: function (x, y, color) {
        this.callSuper('initialize', x, y);
        this.color = color || '#000';
    },
    toString: function () {
        return this.callSuper('toString') + ' (color: ' + this.color + ')';
    }
});

let point1 = new Point(10, 20)
let point2 = new ColoredPoint(10, 20, 'red')

console.log(point1.toString())
console.log(point2.toString())

let LabeledRect = fabric.util.createClass(fabric.Rect, {
    type: 'labeledRect',
    initialize(options = {}) {
        this.callSuper('initialize', options)
        //如果添加了定制的属性，那么要在toObject 等方法处添加输出，为以后序列号和反序列化使用
        this.set('label', options.label || '')
    },

    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            //如果添加了定制的属性，那么要在toObject 等方法处添加输出，为以后序列号和反序列化使用
            label: this.get('label')
        });
    },

    _render(ctx) {
        this.callSuper('_render', ctx)
        // ctx.font = '20px Helvetica'
        // ctx.fillStyle = '#222'
        // ctx.fillText(this.label, this.width / 2, -this.height / 2 + 20)
        let text = new fabric.Text(this.label, {
            //坐标原点基于父级object的中心位置，所以如果设置为left:0,top:0,文字会出现在object的右下
            left: -this.width / 2,
            top: -this.height / 2,
        })
        text.render(ctx)
    }
})

var labeledRect = new LabeledRect({
    width: 100,
    height: 100,
    left: 100,
    top: 100,
    label: 'test3333',
    fill: '#faa'
});

canvas.add(labeledRect);

//如果添加了定制的属性，那么要在toObject 等方法处添加输出，为以后序列号和反序列化使用
console.log(canvas.toJSON())