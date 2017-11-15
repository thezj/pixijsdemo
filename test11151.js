let app = new PIXI.Application(500, 500, {
    backgroundColor: 0x00ffaa
})
document.body.appendChild(app.view)



//scale mode for all texture ,will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST



let sprite = PIXI.Sprite.fromImage('./bunny.png')
//set the initial position
sprite.anchor.set(0.5)
sprite.x = app.renderer.width / 2
sprite.y = app.renderer.height / 2
//set interactivity
sprite.interactive = true
//show hand cursor
sprite.buttonMode = true
//pointers normalize touch and mouse
//click,tap is mouse or touch only
sprite.on('pointerdown', e => {
    sprite.scale.x *= 1.25
    sprite.scale.y *= 1.25
})



let texture = PIXI.Texture.fromImage('./p2.jpeg')
//create a tiling sprite
//require a texture ，a width and a height
let tilingsprite = new PIXI.extras.TilingSprite(texture, app.renderer.width, app.renderer.height)
var count = 0;
app.ticker.add(delta => {
    //弧度 = 角度（0 到 360度 ）* （2*PI/360）
    //math.cos sin range =  [-1 - 1]
    tilingsprite.tileScale.x = Math.cos((count % 360) * (2 * Math.PI / 360)) * 2 + 3
    tilingsprite.tileScale.y = Math.sin((count % 360) * (2 * Math.PI / 360)) * 2 + 3
    count += 0.8
    tilingsprite.tilePosition.x += 1;
    tilingsprite.tilePosition.y += 1;
})



let basictext = new PIXI.Text('Basic text in pixi')
basictext.x = 100
basictext.y = 100
let richstyle = new PIXI.TextStyle({
    fontFamily: 'Arial', //字体
    fontSize: 36, //字体大小
    fontStyle: 'italic', //字体样式
    fontWeight: 'bold', //字体粗细
    fill: ['#00ff00', '#0000ff'], //gradient 梯度
    stroke: '#FFFFFF', //描边颜色
    strokeThickness: 10, //描边宽度
    lineHeight: 40, //行高
    dropShadow: true, //阴影开启
    dropShadowColor: '#111111', //阴影颜色
    dropShadowBlur: 7, //阴影模糊度
    dropShadowAngle: Math.PI / 2, //阴影角度
    dropShadowDistance: 3, //阴影距离
    wordWrap: true, //换行
    wordWrapWidth: 200, //换行宽度
})

let richtext = new PIXI.Text('rich text with a lot of options an across multiple lines', richstyle)
richtext.x = 100
richtext.y = 200

app.stage.addChild(tilingsprite)
app.stage.addChild(richtext)
app.stage.addChild(basictext)
app.stage.addChild(sprite)