export default class GameOver2 extends Phaser.Scene {
    constructor() {

      super("GameOver2");
    }


preload () {
    this.load.image("Gameover", "./public/assets/images/PGameover.png");
    this.load.image("Reintentar", "./public/assets/images/Reintentar.png");
    this.load.image("VMenu", "./public/assets/images/Menu.png");
}

create (){
    this.add.image(800, 600, "Gameover").setScale(1)
    this.add.image(400, 970, "VMenu").setScale(2).setInteractive()
    .on("pointerdown", () => this.scene.start("Menu"));
    this.add.image(400, 850, "Reintentar").setScale(1).setInteractive()
    .on("pointerdown", () => this.scene.start("Nivel2"));
}
}