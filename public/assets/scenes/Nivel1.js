export default class Nivel1 extends Phaser.Scene {
    constructor() {

      super("Nivel1");
    }

init () {
    this.score = 0

}
preload () {
    this.load.tilemapTiledJSON("map", "./public/tilemaps/nivel1.json");
    this.load.image("tilesFondo", "./public/assets/images/fondo.png");
    this.load.image("tilesPlataforma", "./public/assets/images/plataforma.png");
    this.load.spritesheet("jugador", "./public/assets/images/spritesheet.png", {
      frameWidth: 1632,
      frameHeight: 2262,
    });
  }
create () {
    this.add.image(400, 300, "Fondo").setScale(1);
    this.add.image(400, 300, "Plataforma").setScale(1);

this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("jugador", { start: 1, end: 0 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "up",
    frames: [{ key: "jugador", frame: 5 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("jugador", { start: 2, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "down",
    frames: this.anims.generateFrameNumbers("jugador", { frame: 4 }),
    frameRate: 20,
  });

  this.anims.create({
    key: "turn",
    frames: this.anims.generateFrameNumbers("jugador", { frame: 2}),
    frameRate: 20
  });
  const map = this.make.tilemap({ key: "map" });
    const capaFondo = map.addTilesetImage("fondo", "tilesFondo");
    const capaPlataformas = map.addTilesetImage("plataforma", "tilesPlataforma");
    const fondoLayer = map.createLayer("fondo", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer(
      "plataformas",
      capaPlataformas,
      0,
      0
    );
    const objectosLayer = map.getObjectLayer("objetos");
    plataformaLayer.setCollisionByProperty({ colision: true });
    let spawnPoint = map.findObject("objetos", (obj) => obj.name === "Zhao");
    console.log(spawnPoint);
    this.jugador = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "Jugador");
    this.jugador.setBounce(0.1);
    this.jugador.setCollideWorldBounds(true);
    this.jugador.setScale(1);

    this.cursors = this.input.keyboard.createCursorKeys();

this.score = 0;
    this.scoreText = this.add.text(700, 20,  " " + this.score, {
      fontSize: "32px",
      fontStyle: "bold",
      fill: "#ffffff",
    });
  }
}
