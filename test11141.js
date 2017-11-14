let app = new PIXI.Application(500, 500, {
    backgroundColor: 0x00ffbb
})

let container = new PIXI.Container()
let texture = PIXI.Texture.fromImage('./bunny.png')

//create a 5*5 grid of bunnies
for (let i = 0; i < 25; i++) {
    let bunny = new PIXI.Sprite(texture)
    with(bunny) {
        anchor.set(0.5)
        x = (i % 5) * 40
        y = Math.floor(i / 5) * 40
    }
    container.addChild(bunny)
}

//center on the screen
with(container) {
    x = (app.renderer.width - container.width) / 2
    y = (app.renderer.height - container.height) / 2
}
app.stage.addChild(container)





document.body.appendChild(app.view)