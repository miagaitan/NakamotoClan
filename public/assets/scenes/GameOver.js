export default class GameOver extends Phaser.Scene {
    constructor() {

      super("GameOver");
    }


preload () {
    this.load.image("Gameover", "./public/assets/images/PGameover.png");
    this.load.image("Reintentar", "./public/assets/images/Reintentar.png");
}

create (){
    this.add.image(800, 600, "Gameover").setScale(1)
    this.add.image(400, 1100, "Menu").setScale(2).setInteractive()
    .on("pointerdown", () => this.scene.start("Menu"));
    this.add.image(400, 980, "Reintentar").setScale(1).setInteractive()
    .on("pointerdown", () => this.scene.start("Nivel1"));
}
}

