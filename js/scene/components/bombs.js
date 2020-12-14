function createBombs(_this) {
  const { physics } = _this
  const bombs = physics.add.group()

  return bombs
}

/**this.physics.add.collider(bombs, platforms);

this.physics.add.collider(player, bombs, hitBomb, null, this);
 */

function hitBomb(player, bomb, _this) {
  _this.physics.pause()
  player.setTint(0xff0000)
  player.anims.play("turn")
  player.gameOver = true
}

export {
  createBombs,
  hitBomb
}