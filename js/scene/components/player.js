function createPlayer(_this) {
  const { physics, anims } = _this

  const player = physics.add.sprite(100, 450, "dude")
  player.setBounce(0.2)
  player.setCollideWorldBounds(true)
  player.gameOver = false

  anims.create({
    key: "left",
    frames: anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  })

  anims.create({
    key: "turn",
    frames: [ { key: "dude", frame: 4 } ],
    frameRate: 20
  })

  anims.create({
    key: "right",
    frames: anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  })

  return player
}

export {
  createPlayer
}
