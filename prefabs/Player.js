class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.moveSpeed = 2
        //this.direction = 1
        this.body.setDamping(true).setDrag(0.5)
    }

    update() {
        const { left, right, up, down} = this.scene.keys
        
        if(up.isDown) {
            console.log('up')
            this.y -= this.moveSpeed
        }
        else if(down.isDown) {
            console.log('down')
            this.y += this.moveSpeed
        }
    }



}