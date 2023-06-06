import Menu from "./public/assets/scenes/Menu.js"
import Mercado from "./public/assets/scenes/Mercado.js"
import Niveles from "./public/assets/scenes/Niveles.js"
import Final from "./public/assets/scenes/Final.js"

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      min: {
        width: 800,
        height: 600,
      },
      max: {
        width: 1600,
        height: 1200,
      },
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 },
        debug: true,
      },
    },
   
    scene: [Menu, Mercado, Niveles, Final],
  };
  
  // Create a new Phaser game instance
  window.game = new Phaser.Game(config);
