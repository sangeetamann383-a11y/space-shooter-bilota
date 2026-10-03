controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 5 . . . . . . . 
        . . . . . . . 5 2 . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 5 6 6 5 . . . . . . 
        . . . . . . 6 5 5 6 . . . . . . 
        . . . . . . 5 6 6 5 . . . . . . 
        . . . . . 2 5 2 5 5 2 . . . . . 
        . . . . . 2 5 5 2 5 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
let enemyship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 6 6 6 6 5 4 4 
    . . . . . . 6 6 6 9 6 9 9 . . . 
    . . . . 6 6 6 9 9 9 9 6 9 2 . . 
    . . 6 6 9 9 8 8 8 8 8 2 2 2 . . 
    . 6 9 6 8 8 8 9 9 9 9 2 2 2 . . 
    6 6 6 9 8 8 8 9 9 9 9 2 2 2 . . 
    . . 6 6 9 9 8 8 8 8 8 2 2 2 . . 
    . . . . 6 6 6 9 9 9 9 6 9 2 . . 
    . . . . . . 6 6 6 9 6 9 9 . . . 
    . . . . . . . . . 6 6 6 6 4 5 4 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    enemyship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . 2 2 5 5 8 8 5 2 . . . 
        . . . . 2 8 5 8 8 5 5 8 2 . . . 
        . . . 2 8 5 8 8 5 8 8 2 8 2 . . 
        4 5 4 2 5 8 8 5 8 5 2 8 5 2 2 . 
        . . 5 2 8 5 8 8 2 8 5 5 8 2 . . 
        . . . . 2 8 5 8 2 2 8 5 2 . . . 
        . . . . . 2 2 5 8 5 8 8 2 . . . 
        . . . . . . . 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemyship.x = scene.screenWidth()
    enemyship.vx = -20
    enemyship.y = randint(10, scene.screenHeight() - 10)
})
