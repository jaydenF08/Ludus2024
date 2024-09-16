const config = {
    type: Phaser.AUTO,
    parent: "canvas-wrapper",
    width: 800,
    height: 600,
    transparent: true,
    scene: Intro
};
const game = new Phaser.Game(config);