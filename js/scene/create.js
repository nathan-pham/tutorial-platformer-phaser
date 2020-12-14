import { createPlayer } from "./components/player.js"
import { createPlatforms } from "./components/platforms.js"
import { createBombs, hitBomb } from "./components/bombs.js"
import { createStars, collectStar } from "./components/stars.js"
import { createScore, increaseScore } from "./components/score.js"

let platforms, player, stars, score, bombs

function create() {
  this.add.image(400, 300, "sky")

  platforms = createPlatforms(this)
  player = createPlayer(this)
  stars = createStars(this)
  bombs = createBombs(this)
  score = createScore(this)

  this.physics.add.collider(platforms, player)
  this.physics.add.collider(platforms, stars)
  this.physics.add.collider(platforms, bombs)

  this.physics.add.collider(player, bombs, ((player, bomb) => {
    hitBomb(player, bomb, this)
  }), null, this)

  this.physics.add.overlap(player, stars, ((player, star) => {
    collectStar(player, star)
    increaseScore(score)

    if(stars.countActive(true) == 0) {
      stars.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true)
      })

      let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)

      let bomb = bombs.create(x, 16, "bomb")
      bomb.setBounce(1)
      bomb.setCollideWorldBounds(true)
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
    }

  }), null, this)
}

/**    if (stars.countActive(true) === 0)
    {
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

    }
 */

export default create
export {
  player
}