export default class Victoria extends Phaser.Scene {
    constructor() {

      super("Victoria");

    }
init () {
Nivel1P
}

preload () {
    this.load.image("Victoria", "./public/assets/images/PVictoria.png");
    this.load.image("Niveles", "./public/assets/images/Niveles.png");
}

create (){
    this.add.image(800, 600, "Victoria").setScale(1)
    this.add.image(400, 1100, "Menu").setScale(2).setInteractive()
    .on("pointerdown", () => this.scene.start("Menu"));
    this.add.image(400, 980, "Niveles").setScale(1).setInteractive()
    .on("pointerdown", () => this.scene.start("Niveles", { Nivel1P}
    ));
}
}