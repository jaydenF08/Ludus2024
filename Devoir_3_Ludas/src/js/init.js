const config = {
    type: Phaser.AUTO,
    parent: "canvas-wrapper",
    width: 800,
    height: 600,
    scene: {Intro, jeu, victoire, commentjouer, crédit, partieterminé}
};
const game = new Phaser.Game(config);