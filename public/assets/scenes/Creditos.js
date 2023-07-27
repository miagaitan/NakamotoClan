export default class Creditos extends Phaser.Scene {
    constructor() {

      super("Creditos");
    }
    init () {

    }
    preload () {
      this.load.image("PCreditos", "./public/assets/images/PCreditos.png")
      this.load.image("Volver", "./public/assets/images/volver.png")
    }
    create () {
      this.add.image(800, 600, "PCreditos").setScale(2);
      this.add.image(800, 1100, "Volver").setScale(0.50).setInteractive()
      .on("pointerdown", () => this.scene.start("Menu"));
}
}

