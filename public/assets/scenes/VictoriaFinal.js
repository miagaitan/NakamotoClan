export default class VictoriaFinal extends Phaser.Scene {
    constructor() {

      super("VictoriaFinal");

    }

preload () {
    this.load.image("victoriaf", "./public/assets/images/victoriafinal.png");
    this.load.image("VolverN", "./public/assets/images/Niveles.png");
}

create (){
    this.add.image(800, 600, "victoriaf").setScale(2)
    this.add.image(400, 980, "VolverN").setScale(1).setInteractive()
    .on("pointerdown", () => this.scene.start("Niveles"));

    console.log("A")
}
}