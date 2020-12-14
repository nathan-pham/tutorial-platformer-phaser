function preload() {
  const assets = {
    sky: [ "image" ],
    star: [ "image" ],
    bomb: [ "image" ],
    platform: [ "image" ],
    dude: [ "spritesheet", { frameWidth: 32, frameHeight: 48 } ]
  }

  for(const [asset, _type] of Object.entries(assets)) {
    let type = _type.shift()
    let params = [
      asset,
      `/assets/${asset}.png`,
      _type ? _type[0] : {}
    ]
    this.load[type](...params)
  }
}

export default preload