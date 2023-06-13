export default class Niveles extends Phaser.Scene {
    constructor() {

      super("Niveles");
    }
    init () {

    }
    preload () {
      this.load.image("Niveles", "./public/assets/images/Niveles.png")
      this.load.image("Menu", "./public/assets/images/Menu.png")
      this.load.image("Boton1", "./public/assets/images/Boton1.png")
    }
    create () {
      this.add.image(400, 300, "Niveles").setScale(1);
      this.add.image(400, 300, "Boton1").setScale(0.75).setInteractive()
      .on("pointerdown", () => this.scene.start("Nivel1"));
      this.add.image(400, 550, "Menu").setScale(1).setInteractive()
      .on("pointerdown", () => this.scene.start("Menu"));
}
}