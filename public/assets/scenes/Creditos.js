export default class Creditos extends Phaser.Scene {
    constructor() {

      super("Creditos");
    }
    init () {

    }
    preload () {
      this.load.image("PCreditos", "./public/assets/images/PCreditos.png")
      this.load.image("Menu", "./public/assets/images/Menu.png")
    }
    create () {
      this.add.image(400, 300, "PCreditos").setScale(1);
      this.add.image(400, 550, "Menu").setScale(1).setInteractive()
      .on("pointerdown", () => this.scene.start("Menu"));;
}
}

