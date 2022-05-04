input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    子彈 = 0
    led.setBrightness(128)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let 子彈 = 0
let sprite: game.LedSprite = null
game.setLife(3)
sprite = game.createSprite(2, 4)
