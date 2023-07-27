export default class Niveles extends Phaser.Scene {
    constructor() {

      super("Niveles");
    }

    preload () {
      this.load.image("PNiveles", "./public/assets/images/PNiveles.png")
      this.load.image("Menu", "./public/assets/images/Menu.png")
      this.load.image("Boton1", "./public/assets/images/Boton1.png")
      this.load.image("Boton2", "./public/assets/images/Boton2.png")
      this.load.image("Boton3", "./public/assets/images/Boton3.png")
    }
    create () {
      this.add.image(800, 600, "PNiveles").setScale(2);
      this.add.image(950, 700, "Boton1").setScale(2).setInteractive()
      .on("pointerdown", () => this.scene.start("Nivel1"));
      this.add.image(800, 1100, "Menu").setScale(1).setInteractive()
      .on("pointerdown", () => this.scene.start("Menu"));
      this.add.image(700, 700, "Boton2").setScale(2).setInteractive()
      .on("pointerdown", () => this.scene.start("Nivel2"));
      this.add.image(1150, 575, "Boton3").setScale(2).setInteractive()
      .on("pointerdown", () => this.scene.start("Nivel3"));
       
}
}