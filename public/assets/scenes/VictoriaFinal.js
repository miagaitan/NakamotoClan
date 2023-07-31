export default class VictoriaFinal extends Phaser.Scene {
    constructor() {

      super("VictoriaFinal");

    }

preload () {
    this.load.image("victoriaf", "./public/assets/images/victoriafinal.png");
    this.load.image("flechafinal", "./public/assets/images/final.png");
}

create (){
    this.add.image(800, 600, "victoriaf").setScale(2)
    this.add.image(1400, 1000, "flechafinal").setScale(0.6).setInteractive()
    .on("pointerdown", () => this.scene.start("Niveles"));

    console.log("A")
}
}