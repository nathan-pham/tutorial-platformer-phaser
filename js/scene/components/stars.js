function createStars(_this) {
  const { physics } = _this

  const stars = physics.add.group({
    key: "star",
    repeat: 11,
    setXY: { x: 12, y:0, stepX: 70 }
  })

  stars.children.iterate((child) => {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
  })

  return stars
}

function collectStar(player, star) {
  star.disableBody(true, true)
}

export {
  createStars,
  collectStar
}