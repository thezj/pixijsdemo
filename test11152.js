let app = new PIXI.Application(500, 500, {
    backgroundColor: 0x00ffaa
})

document.body.appendChild(app.view)

let graphic = new PIXI.Graphics()

app.stage.addChild(graphic)

// with(graphic) {
//     beginFill(0xff2200)
//     lineStyle(10, 0xffdd00, 1) //linewidth,color,alpha
//     moveTo(100, 100)
//     lineTo(200, 200)
//     lineTo(100, 200)
// }
// graphic.beginFill(0xf1c40f);
graphic.lineStyle(10, 0xffdd00, 1) //linewidth,color,alpha


let graphicdrawlock = true
let graphicstartpoint = []
let graphicendpoint = []
graphic.interactive = true
graphic.on('pointerdown', e => {
    graphicdrawlock = false
    graphicstartpoint = [e.data.global.x, e.data.global.y]
    //prevent event from reaching any objects other than the current object
    e.stopPropagation()
})
graphic.on('pointerup', e => {
    graphicdrawlock = true
})
graphic.on('pointermove', e => {
    if (graphicdrawlock) {
        return
    }
    graphicendpoint = [e.data.global.x, e.data.global.y]

    let distanceX = graphicendpoint[0] - graphicstartpoint[0]
    let distanceY = graphicendpoint[1] - graphicstartpoint[1]
    graphic.x += distanceX
    graphic.y += distanceY
    graphicstartpoint = graphicendpoint
})


//able interact
app.stage.interactive = true
//set interaction shape
app.stage.hitArea = new PIXI.Rectangle(0, 0, 500, 500)


let drawlock = true
let startpoint = []
let endpoint = []
let linepaths = []
app.stage.on('pointerdown', e => {
    drawlock = false
    let graphiclocation = e.data.getLocalPosition(graphic)
    startpoint = [graphiclocation.x, graphiclocation.y]
    linepaths = []
    linepaths.push([graphiclocation.x, graphiclocation.y])

})
app.stage.on('pointerup', e => {
    drawlock = true
    graphic.moveTo(linepaths[0][0],linepaths[0][1])
    linepaths.map(a => {
        graphic.lineTo(a[0], a[1])
    })
})
app.stage.on('pointermove', e => {
    if (drawlock) {
        return
    }
    let graphiclocation = e.data.getLocalPosition(graphic)
    linepaths.push([graphiclocation.x, graphiclocation.y])
    endpoint = [graphiclocation.x, graphiclocation.y]
    startpoint = endpoint
})