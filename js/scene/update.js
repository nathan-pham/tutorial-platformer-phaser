import { player } from "./create.js"

let speed = 160
let jump = 330

function update() {
  const cursors = this.input.keyboard.createCursorKeys()

  if(player.gameOver) {
    return
  }

  if(cursors.space.isDown) {
    speed = 400
  }
  else {
    speed = 160
  }

  if(cursors.left.isDown) {
    player.setVelocityX(-speed)
    player.anims.play("left", true)
  }
  else if(cursors.right.isDown) {
    player.setVelocityX(speed)
    player.anims.play("right", true)
  }
  else {
    player.setVelocityX(0)
    player.anims.play("turn")
  }

  if(cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-jump)
  }
}

export default update