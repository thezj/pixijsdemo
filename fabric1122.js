let fabric = require('fabric').fabric
let _ = require('lodash')

let canvas = new fabric.Canvas('canvas')

// fabric.Image.filters.Redify = fabric.util.createClass({
//     type: 'Redify',
//     applyTo: function (canvasEl) {
//         var context = canvasEl.getContext('2d'),
//             imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
//             data = imageData.data;
//         for (var i = 0, len = data.length; i < len; i += 4) {
//             data[i + 1] = 0;
//             data[i + 2] = 0;
//         }
//         context.putImageData(imageData, 0, 0);
//     }
// });
// fabric.Image.filters.Redify.fromObject = function (object) {
//     return new fabric.Image.filters.Redify(object);
// };
fabric.Image.filters.Redify = fabric.util.createClass({

    type: 'Redify',

    /**
     * Fragment source for the redify program
     */
    fragmentSource: 'precision highp float;\n' +
        'uniform sampler2D uTexture;\n' +
        'varying vec2 vTexCoord;\n' +
        'void main() {\n' +
        'vec4 color = texture2D(uTexture, vTexCoord);\n' +
        'color.g = 0;\n' +
        'color.b = 0;\n' +
        'gl_FragColor = color;\n' +
        '}',
    applyTo: function (canvasEl) {
        var context = canvasEl.getContext('2d');
        var imagedata = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
            data = imagedata.data,
            i, len = data.length;
        console.log(data)
        for (i = 0; i < len; i += 4) {
            data[i + 1] = 0; //green
            data[i + 2] = 0; //blue
        }
        context.putImageData(imagedata, 0, 0);
    },
    applyTo2d: function (options) {
        var imageData = options.imageData,
            data = imageData.data,
            i, len = data.length;

        for (i = 0; i < len; i += 4) {
            data[i + 1] = 0;
            data[i + 2] = 0;
        }

    }
});

fabric.Image.fromURL('./ducati.jpg', img => {


    img.set({
        scaleX: 0.2,
        scaleY: 0.2
    })

    let imgcopy = _.cloneDeep(img)
    canvas.add(imgcopy)


    img.filters.push(new fabric.Image.filters.Sepia(), new fabric.Image.filters.RemoveWhite({
        threshold: 40,
        distance: 140
    }), new fabric.Image.filters.Brightness({
        brightness: 120
    }), new fabric.Image.filters.Redify())
    img.applyFilters(i => {
        canvas.renderAll()
    })
    canvas.add(img)


})