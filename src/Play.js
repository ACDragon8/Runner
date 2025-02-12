class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    preload() {

    }

    create() {
        console.log("World!")
        this.background = this.add.tileSprite(0,0,1080,720,'background').setOrigin(0,0)
        this.player = this.physics.add.sprite(width/4, height/2, 'tank-anims')
        this.player.anims.play('move')
    }

    update() {
        this.background.tilePositionX += 2
        
        

    }
}