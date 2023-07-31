import { ENEMIESX } from "../scripts/utils2.js"
const { GHOST2, PENGUIN, MINI } = ENEMIESX
import { ENEMIESY } from "../scripts/utils2.js"
const {STAR} = ENEMIESY

export default class Nivel2 extends Phaser.Scene {
    constructor() {

      super("Nivel2");
    }

init () {
    this.life= 100
    this.score = 0
    this.enemiesRecolected = {
      [STAR]: {count: 0, score: 0},
      [GHOST2]: {count: 0, score: 15},
      [MINI]: {count: 0, score: 30},
      [PENGUIN]: {count: 0, score: 30}
    };
    console.log(this.enemiesRecolected);
  }
preload () {
    this.load.image("Fondo2", "./public/assets/images/fondo2.png");
    this.load.image("Plataforma", "./public/assets/images/plataforma.png");
    this.load.image(STAR, "./public/assets/images/Star.png");
    this.load.image(GHOST2, "./public/assets/images/ghost2.png");
    this.load.image(MINI, "./public/assets/images/Mini.png");
    this.load.image(PENGUIN, "./public/assets/images/penguin.png");
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
    this.add.image(800, 600, "Fondo2").setScale(2);
    this.player = this.physics.add.sprite(300, 925, "jugador");
    this.player.setCollideWorldBounds(true);
    this.player.setScale(0.2);
    
  this.add.image(1390, 63, "corazon")
  this.add.image(120, 63, "yen")

  this.star = this.physics.add.group({
    immovable: true,
    allowGravity: false,
  });

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
    delay: 2400,
    callback: this.addEnemy,
    callbackScope: this,
    loop: true,
  });

  this.time.addEvent({
    delay: 4500,
    callback: this.addStar,
    callbackScope: this,
    loop: true,
  });

  this.cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.collider(this.player, platforms);
  this.physics.add.collider(this.player, this.enemiesGroup);
  this.physics.add.overlap(this.player, this.star);
  this.physics.add.overlap(this.enemiesGroup, platforms);

  this.physics.add.overlap(
    this.player,
    this.enemiesGroup,
    this.collectEnemies,
    null,
    this
  );
  this.physics.add.collider(
    this.player,
    this.star,
    this.collectStar,
    null,
    this
  );

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
      this.player.setVelocityX(-280);
      this.player.anims.play("left", true);
    }
    
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(280);
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
     GHOST2,
     MINI,
     PENGUIN,
    ]);

    
    const randomX = Phaser.Math.RND.between(0, 1600);

    //add shape to screen
    this.enemiesGroup.create(randomX, 0, randomEnemies)
    .setBounce(0)
    .setScale(0.6)
    console.log("EnemyX is added", randomX, randomEnemies);
    
    // const randomEnemiesY = Phaser.Math.RND.pick([
    //   STAR,
    // ]);

    // const randomY = Phaser.Math.RND.between (700, 900);

    // this.enemiesGroup.create(0, randomY, randomEnemiesY)
    // .setBounce(0)
    // .setScale(0.8)
    // console.log("EnemyY is added", randomY, randomEnemiesY);
  }
  
addStar () {
  const star = this.star.create(-100, 900, STAR)
  this.tweens.add({
    targets: star,
    x: 1800,
    flip: false,
    yoyo: false,
    duration: 3600,
    ease: "Linear", 
    // onComplete: () => {
    //   this.star.destroy();
    //   },
      loop: true,
      });

}
    
   

  destroyEnemies (platforms, enemies) {
    enemies.disableBody(true, true);
    
      }
  collectEnemies(player, enemies, star, life) {
    if (this.cursors.up.isDown) {
    enemies.disableBody(true,true);

    const enemyName = enemies.texture.key
    const scoreNow = this.enemiesRecolected[enemyName].score;
    this.score += scoreNow;
    this.scoreText.setText(`${this.score.toString()}`); }
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
if (this.score >=200) {
  this.scene.start("Victoria");

}}

 collectStar(player, star, life) {
  if (this.cursors.down.isDown) {
  star.disableBody(true,true);
}
  else {
    star.disableBody(true, true); 
    this.life = this.life - 25 ; 
  this.lifeText.setText(` ${this.life.toString()}`);
  }

  this.lifeText.setText(this.life);

  


}
}
