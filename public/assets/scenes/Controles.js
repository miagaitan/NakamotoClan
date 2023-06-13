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
      this.add.image(400, 300, "PControles").setScale(1);
      this.add.image(400, 550, "Menu").setScale(1).setInteractive()
      .on("pointerdown", () => this.scene.start("Menu"));
}
}