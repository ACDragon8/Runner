class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    preload() {

    }

    create() {
        console.log("World!")

        this.background = this.add.tileSprite(0,0,1080,720,'background').setOrigin(0,0)


        this.player = new Player(this, width/4, height/2, 'tank-anims', 0)
        this.player.anims.play('move')
        

        this.mine = new Mine(this, width *3 / 4, height / 2,'mine')

        this.physics.world.setBounds(0,0, width, height/2)

        this.physics.add.collider
          
    }

    update() {
        this.background.tilePositionX += speed
        this.mine.update()

        //player movement
        
        if(this.mine.x < 0) {
            this.mine.x = width
        }


        
        

    }
}