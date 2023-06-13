export default class Nivel1 extends Phaser.Scene {
    constructor() {

      super("Nivel1");
    }

init () {
    this.score = 0

}
preload () {
    this.load.image("Plataforma", "./public/assets/images/plataforma.png")
    this.load.image("Fondo", "./public/assets/images/fondo.png")
    this.load.spritsheet("Zhao", "./public/assets/images/spritesheet.png", {
        frameWidth: 1632,
        frameHeight:2262,
    });
}
create () {
    this.add.image(400, 300, "Fondo").setScale(1);
    this.add.image(400, 300, "Plataforma").setScale(1);

this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("Zhao", { start: 1, end: 0 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "up",
    frames: [{ key: "Zhao", frame: 5 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("Zhao", { start: 2, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "down",
    frames: this.anims.generateFrameNumbers("Zhao", { frame: 4 }),
    frameRate: 20,
  })
}
}