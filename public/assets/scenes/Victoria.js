export default class Victoria extends Phaser.Scene {
    constructor() {

      super("Victoria");

    }

preload () {
    this.load.image("Victoria", "./public/assets/images/PVictoria.png");
    this.load.image("VolverN", "./public/assets/images/Niveles.png");
}

create (){
    this.add.image(800, 600, "Victoria").setScale(1)
    this.add.image(400, 980, "VolverN").setScale(1).setInteractive()
    .on("pointerdown", () => this.scene.start("Niveles"));
}
}