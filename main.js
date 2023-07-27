import Menu from "./public/assets/scenes/Menu.js"
import Mercado from "./public/assets/scenes/Mercado.js"
import Niveles from "./public/assets/scenes/Niveles.js"
import Final from "./public/assets/scenes/Final.js"
import Creditos from "./public/assets/scenes/Creditos.js"
import Controles from "./public/assets/scenes/Controles.js"
import Nivel1 from "./public/assets/scenes/Nivel1.js"
import Nivel2 from "./public/assets/scenes/Nivel2.js"
import Nivel3 from "./public/assets/scenes/Nivel3.js"
import GameOver from "./public/assets/scenes/GameOver.js"
import Victoria from "./public/assets/scenes/Victoria.js"

const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1200,
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
        debug: false,
      },
    },
   
    scene: [Menu, Controles, Creditos, Mercado, Niveles, Nivel1, Nivel2, Nivel3, Final, GameOver, Victoria],
  };
  
  // Create a new Phaser game instance
  window.game = new Phaser.Game(config);
