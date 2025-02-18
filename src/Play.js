class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    preload() {

    }

    create() {
        //console.log("World!")
        this.gameOver = false

        this.keys = this.input.keyboard.createCursorKeys()
        this.keys.HKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H)
        this.keys.FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)

        this.background = this.add.tileSprite(0,0,1080,720,'background').setOrigin(0,0)


        this.player = new Player(this, width/4, height/2, 'tank-anims', 0)
        this.player.anims.play('move')
        
        this.mines = []
        this.mines.push(new Mine(this, width *3 / 4, height / 2,'mine'))
        this.physics.add.collider(this.player, this.mines[-1], (player, mine) => {
            this.gameOver = true
        })
        this.physics.world.setBounds(0,0, width, height/2)

        
          
    }

    update() {
        if (!this.gameOver) {
            this.background.tilePositionX += speed
            for (let i = 0; i < this.mines.length; i++) {
                this.mines[i].update()
            }
            this.player.update()
        }
        else {
            console.log("game Over")
        }
        //player movement
        

        //mine reset
        


        
        

    }
}