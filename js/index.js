import preload from "./scene/preload.js"
import create from "./scene/create.js"
import update from "./scene/update.js"

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload, create, update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  parent: document.getElementById("app")
}

const game = new Phaser.Game(config)