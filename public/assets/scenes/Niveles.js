export default class Niveles extends Phaser.Scene {
    constructor() {

      super("Niveles");
    }

    preload () {
      this.load.image("PNiveles", "./public/assets/images/PNiveles.png")
      this.load.image("Volver", "./public/assets/images/volver.png")
      this.load.image("Boton1", "./public/assets/images/Boton1.png")
      this.load.image("Boton2", "./public/assets/images/Boton2.png")
      this.load.image("Boton3", "./public/assets/images/Boton3.png")
    }
    create () {
      this.add.image(800, 600, "PNiveles").setScale(2);
      this.add.image(430, 530, "Boton1").setScale(2.4).setInteractive()
      .on("pointerdown", () => this.scene.start("Nivel1"));
      this.add.image(150, 1100, "Volver").setScale(0.50).setInteractive()
      .on("pointerdown", () => this.scene.start("Menu"));
      this.add.image(800, 800, "Boton2").setScale(2.4).setInteractive()
      .on("pointerdown", () => this.scene.start("Nivel2"));
      this.add.image(1300, 575, "Boton3").setScale(2.4).setInteractive()
      .on("pointerdown", () => this.scene.start("Nivel3"));
       
}
}