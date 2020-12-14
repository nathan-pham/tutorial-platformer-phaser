//scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

let score = 0

function createScore(_this) {
  const { add } = _this
  
  const scoreText = add.text(16, 16, "score: 0", {
    fontSize: "16px",
    fill: "#000"
  })

  return scoreText
}

function increaseScore(scoreText) {
  score += 10
  scoreText.setText(`Score: ${score}`)
}

export {
  createScore,
  increaseScore
}

