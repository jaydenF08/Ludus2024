class jeu extends Phaser.Scene {
 
    constructor() {
        super({ key: "jeu" });
    }
 
    preload() {
        this.load.image("jeu", "assets/JEU.png");
        this.load.image("quitter", "assets/QUITTER.png")
    }
 
    create() {
        const width = this.scale.width;
        const height = this.scale.height;
        this.img = this.add.image(width / 2, height / 2, "jeu")
 
        const quitter = this.add.image(400,200, "quitter").setInteractive().setScale(0.5);
        quitter.on("pointerdown", () => this.scene.start("intro"));
 
    }
 
    update() {}
}