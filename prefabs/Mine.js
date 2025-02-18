class Mine extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)
    }

    update() {
        this.x -= speed

        if(this.x < 0) {
            this.y = height - (height / 2 *Math.random())
            this.x = width
        }
    }
}