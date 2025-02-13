/*
Hao Deng
2/4/2025
Runner
 */

let config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        },

    },
    scene: [Menu, Play]
}

let game = new Phaser.Game(config)

let width = 1080
let height = 720
let speed = 2

