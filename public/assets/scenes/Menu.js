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
this.add.image(800, 600, "Inicio").setScale(2);
this.add.image(480, 760, "Jugar").setScale(2).setInteractive()
.on("pointerdown", () => this.scene.start("Niveles"));
this.add.image(490, 880, "Controles").setScale(2).setInteractive()
.on("pointerdown", () => this.scene.start("Controles"));
this.add.image(480, 1000, "Creditos").setScale(2).setInteractive()
.on("pointerdown", () => this.scene.start("Creditos"));;

}
}



