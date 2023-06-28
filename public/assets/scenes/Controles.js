export default class Controles extends Phaser.Scene {
    constructor() {

      super("Controles");
    }
    init () {

    }
    preload () {
      this.load.image("PControles", "./public/assets/images/PControles.png")
      this.load.image("Menu", "./public/assets/images/Menu.png")
    }
    create () {
      this.add.image(800, 600, "PControles").setScale(2);
      this.add.image(800, 1100, "Menu").setScale(2).setInteractive()
      .on("pointerdown", () => this.scene.start("Menu"));
}
}