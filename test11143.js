let app = new PIXI.Application(500, 500, {
    backgroundColor: 0x00ffbb
})
document.body.appendChild(app.view)

const loader = new PIXI.loaders.Loader()
loader.add('./fighter.json')
loader.load((loader, resource) => {
    let frames = []
    for (var i = 0; i < 30; i++) {
        let index = i < 10 ? '0' + i : i
        frames.push(PIXI.Texture.fromFrame('rollSequence00' + index + '.png'))
    }
    //create a animated sprite
    let animation = new PIXI.extras.AnimatedSprite(frames)
    let tempnum = 0
    // setInterval(i => {
    //     animation.gotoAndStop(tempnum % 29)
    //     tempnum++
    // }, 100)
    animation.x = (app.renderer.width - animation.width) / 2
    app.stage.addChild(animation)

    let rotationbar = PIXI.Sprite.fromImage('./ducati.jpg')
    rotationbar.width = 500
    rotationbar.y = 300
    rotationbar.height = 50
    rotationbar.interactive = true
    let mousemovelock = false
    rotationbar.on('pointerdown', e => {
        mousemovelock = true
    })
    rotationbar.on('pointerup', e => {
        mousemovelock = false
    })
    rotationbar.on('pointermove', e => {
        if (!mousemovelock) {
            return
        }
        let framenum = Math.floor((e.data.global.x / app.renderer.width) * frames.length)
        if (framenum < 0) {
            framenum = 0
        } else if (framenum > 29) {
            framenum = 29
        }
        animation.gotoAndStop(framenum)
    })

    app.stage.addChild(rotationbar)



})