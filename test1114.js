let app = new PIXI.Application(500, 500, {
    backgroundColor: 0x000000
})

document.body.appendChild(app.view)

//create a new sprite from an image path
let motorbike = PIXI.Sprite.fromImage('./ducati.jpg')

//center the sprite to the center of the screen
motorbike.anchor.set(0.5)
//缩放精灵
motorbike.scale.set(0.4)

//move the sprite to the center of the screen
motorbike.x = app.renderer.width / 2
motorbike.y = app.renderer.width / 2

app.stage.addChild(motorbike)

//listen for animate update

//定时tick（滴答声）
app.ticker.add(delta => {
    //just for fun ,let's rotate mr rabbit a little
    //delta is 1 if running at 100% performance
    //creates frame-independent tranformation
    motorbike.rotation += 0.01
})