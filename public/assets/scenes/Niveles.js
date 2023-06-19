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
      this.add.image(800, 600, "Niveles").setScale(2);
      this.add.image(800, 600, "Boton1").setScale(1.5).setInteractive()
      .on("pointerdown", () => this.scene.start("Nivel1"));
      this.add.image(800, 1100, "Menu").setScale(1).setInteractive()
      .on("pointerdown", () => this.scene.start("Menu"));
}
}