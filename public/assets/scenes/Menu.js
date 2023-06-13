export default class Menu extends Phaser.Scene {
    constructor() {

      super("Menu");
    }

init () {

}
preload () {
    this.load.image("Inicio", "./public/assets/images/Inicio.png")
    this.load.image("Jugar", "./public/assets/images/Jugar.png")
    this.load.image("Controles", "./public/assets/images/Controles.png")
    this.load.image("Creditos", "./public/assets/images/Creditos.png")
} 

create () {
this.add.image(400, 300, "Inicio").setScale(1);
this.add.image(240, 380, "Jugar").setScale(1).setInteractive()
.on("pointerdown", () => this.scene.start("Niveles"));
this.add.image(245, 440, "Controles").setScale(1).setInteractive()
.on("pointerdown", () => this.scene.start("Controles"));
this.add.image(240, 500, "Creditos").setScale(1).setInteractive()
.on("pointerdown", () => this.scene.start("Creditos"));;

}
}



