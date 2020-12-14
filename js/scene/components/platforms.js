function createPlatforms(_this) {
  const { physics } = _this
  
  const platforms = physics.add.staticGroup()

  platforms.create(400, 568, "platform").setScale(2).refreshBody()
  platforms.create(600, 400, "platform")
  platforms.create(750, 220, "platform")
  platforms.create(50, 250, "platform")

  return platforms
}

export {
  createPlatforms
}