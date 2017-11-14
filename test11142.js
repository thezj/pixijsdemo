let app = new PIXI.Application(500, 500, {
    backgroundColor: 0x00ffbb
})

let container = new PIXI.Container()
for (i = 0; i < 25; i++) {
    let bunny = new PIXI.Sprite.fromImage('./bunny.png')
    bunny.anchor.set(0)
    bunny.x = (i % 5) * 40
    bunny.y = Math.floor(i / 5) * 40
    container.addChild(bunny)
}

with(container) {
    pivot.x = (container.width + 40) / 2
    pivot.y = (container.height + 40) / 2
    x = 100
    y = 100
}

setInterval(i => {
    container.rotation += 0.05
}, 10)

app.stage.addChild(container)
document.body.appendChild(app.view)