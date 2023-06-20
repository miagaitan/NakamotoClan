import { ENEMIES } from "../scripts/utils.js"
const { BARREL, GHOST, GHOST2, MINI, PENGUIN } = ENEMIES

export default class Nivel1 extends Phaser.Scene {
    constructor() {

      super("Nivel1");
    }

init () {
    this.score = 0
    this.enemiesRecolected = {
      [BARREL]: {count: 0, score: 10},
      [GHOST]: {count: 0, score: 20},
      [GHOST2]: {count: 0, score: 30},
      [MINI]: {count: 0, score: 40},
      [PENGUIN]: {count: 0, score: 50}
    };
    console.log(this.enemiesRecolected);
  }
preload () {
    this.load.image("Fondo", "./public/assets/images/fondo.png");
    this.load.image("Plataforma", "./public/assets/images/plataforma.png");
    this.load.image(BARREL, "./public/assets/images/Barrel.png");
    this.load.image(GHOST, "./public/assets/images/Ghost.png");
    this.load.image(GHOST2, "./public/assets/images/Ghost2.png");
    this.load.image(MINI, "./public/assets/images/Mini.png");
    this.load.image(PENGUIN, "./public/assets/images/Penguin.png");
    this.load.spritesheet("jugador", "./public/assets/images/zhaosprite.png", {
      frameWidth: 998,
      frameHeight: 1842,
    });
  }
create () {
    this.add.image(800, 600, "Fondo").setScale(2);
    this.add.image(800, 600, "Plataforma").setScale(2);
    this.player = this.physics.add.sprite(400, 350, "jugador");
    this.player.setCollideWorldBounds(true);
    this.player.setScale(0.3);
    
  this.enemiesGroup = this.physics.add.group();
  let plataforma = this.physics.add.staticGroup();

this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("jugador", { start: 3, end: 0 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "up",
    frames: [{ key: "jugador", frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("jugador", { start: 5, end: 8 }),
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
    frames: this.anims.generateFrameNumbers("jugador", { frame: 4}),
    frameRate: 20
  });

  this.time.addEvent({
    delay: 3000,
    callback: this.addEnemy,
    callbackScope: this,
    loop: true,
  });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, plataforma);
    this.physics.add.collider(this.player, this.enemiesGroup);
    this.physics.add.collider(this.enemiesGroup, plataforma);
    
this.score = 0;
    this.scoreText = this.add.text(700, 20,  " " + this.score, {
      fontSize: "32px",
      fontStyle: "bold",
      fill: "#ffffff",
    });
  }

  update () {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("left", true);
    }
    
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("right", true);
    }
    
    else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");
    }

    if (this.cursors.up.isDown && this.player.body.blocked.down) {
      this.player.setVelocityY(-330);
    }

  }

  addEnemy () {
    const randomEnemies = Phaser.Math.RND.pick([
     BARREL, 
     GHOST,
     GHOST2,
     MINI,
     PENGUIN,
    ]);

    
    const randomX = Phaser.Math.RND.between(0, 800);

    //add shape to screen
    this.enemiesGroup.create(randomX, 0, randomEnemies)
    .setBounce(0.2)
    .setScale(0.6)
    console.log("Enemy is added", randomX, randomEnemies);
  }
  collectEnemies(jugador, enemies) {
    enemies.disableBody(true,true);

    const enemyName = enemy.texture.key;
    const percentage = enemy.getData(POINTS_PERCENTAGE);
    const scoreNow = this.enemiesRecolected[enemyName].score * percentage;
    this.score += scoreNow;
    this.scoreText.setText(`Score: ${this.score.toString()}`);
    this.enemyRecolected[enemyName].count++;
}
}
