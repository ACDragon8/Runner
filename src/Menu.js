class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        
    }

    create() {
        console.log('Hello ')
    }

    update() {
        this.scene.start('playScene')
    }



}