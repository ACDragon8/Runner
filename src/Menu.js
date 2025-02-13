class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        this.load.image('demo', './assets/demo.png')
        this.load.image('background', './assets/Background.png')
        this.load.image('tank','./assets/tank.png')
        this.load.image('mine','./assets/mine.png')
        this.load.spritesheet('tank-anims','./assets/tank-anims.png', {
            frameWidth: 128,
            frameHeight: 64,
        })
    }

    create() {
        console.log('Hello ')

        this.anims.create({
            key: 'move',
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('tank-anims', {start:0, end: 1})
        })
    }

    update() {
        
        this.scene.start('playScene')
    }

}