import { ENEMIES } from "../scripts/utils.js"
const { BARREL, GHOST, GHOST2, MINI, PENGUIN } = ENEMIES

export default class Nivel1 extends Phaser.Scene {
    constructor() {

      super("Nivel1");
    }

init () {
    this.life= 100
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
    this.load.image("corazon", "./public/assets/images/corazon.png");
    this.load.image("yen", "./public/assets/images/yen.png");
    this.load.spritesheet("jugador", "./public/assets/images/zhaosprite.png", {
      frameWidth: 999,
      frameHeight: 1843,
    });
    this.load.spritesheet("jugadorup", "./public/assets/images/spriteup.png", {
      frameWidth: 999,
      frameHeight: 1843,
    });
    this.load.spritesheet("jugadordown", "./public/assets/images/spritedown.png", {
      frameWidth: 919,
      frameHeight: 1936,
    });
  }
create () {
    this.add.image(800, 600, "Fondo").setScale(2);
    this.player = this.physics.add.sprite(300, 925, "jugador");
    this.player.setCollideWorldBounds(true);
    this.player.setScale(0.2);
    
  this.add.image(1390, 63, "corazon")
  this.add.image(120, 63, "yen")

  this.enemiesGroup = this.physics.add.group();
  let platforms = this.physics.add.staticGroup();
  platforms.create(800, 1250, "Plataforma").setScale(2).refreshBody();

this.anims.create({
    key: "turn",
    frames: this.anims.generateFrameNumbers("jugador", {start: 4, end: 4}),
    frameRate: 20
  });

this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("jugador", { start: 3, end: 0 }),
    frameRate: 5,
    repeat: -1,
  });

  this.anims.create({
    key: "up",
    frames: [{ key: "jugadorup", frame: 0 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("jugador", { start: 5, end: 8 }),
    frameRate: 5,
    repeat: -1,
  });

  this.anims.create({
    key: "down",
    frames: [{ key: "jugadordown", frame: 0 }],
    frameRate: 20,
  });

  this.time.addEvent({
    delay: 5000,
    callback: this.addEnemy,
    callbackScope: this,
    loop: true,
  });

  this.cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(this.player, platforms);
  this.physics.add.collider(this.player, this.enemiesGroup);
  this.physics.add.overlap(this.enemiesGroup, platforms)

  this.physics.add.overlap(
    this.player,
    this.enemiesGroup,
    this.collectEnemies,
    null,
    this
  );

  // this.physics.add.overlap(
  //   this.enemiesGroup,
  //   platforms,
  //   this.destroyEnemies,
  //   null,
  //   this
  // );

this.score = 0;
    this.scoreText = this.add.text(150, 40,  " " + this.score, {
      fontSize: "50px",
      fontStyle: "bold",
      fill: "#ffffff",
    });
  
    this.life = 100;
    this.lifeText = this.add.text(1440, 40, " " + this.life, {
      fontSize: "50px",
      fontStyle: "bold", 
      fill: "#ffffff",
    });
    
  }

  update () {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-270);
      this.player.anims.play("left", true);
    }
    
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(270);
      this.player.anims.play("right", true);
    }
    
    else {
      this.player.setVelocityX(0);
      this.player.anims.play("turn");
    }

    if (this.cursors.up.isDown) {
      this.player.anims.play("up")
    }
    if (this.cursors.down.isDown) {
      this.player.anims.play("down");
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

    
    const randomX = Phaser.Math.RND.between(0, 1600);

    //add shape to screen
    this.enemiesGroup.create(randomX, 0, randomEnemies)
    .setBounce(0)
    .setScale(0.6)
    console.log("Enemy is added", randomX, randomEnemies);
  }
  destroyEnemies (platforms, enemies) {
    enemies.disableBody(true, true);
    
      }
  collectEnemies(player, enemies, life) {
    if (this.cursors.up.isDown) {
    enemies.disableBody(true,true);

    const enemyName = enemies.texture.key
    const scoreNow = this.enemiesRecolected[enemyName].score;
    this.score += scoreNow;
    this.scoreText.setText(` : ${this.score.toString()}`); }
    else {
      enemies.disableBody(true, true); 
      this.life = this.life - 25 ; 
    this.lifeText.setText(` : ${this.life.toString()}`);
    }

    this.lifeText.setText(this.life);
if (this.life <= 0) {
this.scene.start("GameOver");
}

this.scoreText.setText(this.score)
if (this.score >=300) {
  this.scene.start("Victoria");
}

}


}

