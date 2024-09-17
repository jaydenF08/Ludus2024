class Intro extends Phaser.Scene {
    constructor() {
        super({ key: "Intro"});
    }

    preload() {
        this.load.image("fond", "assets/fond.png");
        this.load.image("Commencer", "assets/Commencer.png");
        this.load.image("Crédit", "assets/CRÉDIT.png");
        this.load.image("Comment jouer", "assets/COMMENT JOUER.png");


    }

    create() {
        // fond image
        let scaleX = 0;
        let scaleY = 0;
        let scale = 0;

        this.fond = this.add.image(config.width / 2, config.height / 2, "fond");
        scaleX = config.width / this.fond.width;
        scaleY = config.height / this.fond.height;
        scale = Math.max(scaleX, scaleY);
        this.fond.setScale(scale);

// Bouton Commencer
const Commencer = this.add.image(400,480, "Commencer").setInteractive().setScale(0.5);
Commencer.on("pointerdown", () => this.sceneéstarté("Jeu"))

// Bouton Crédits
const Crédit = this.add.image(650,475, "Crédit").setInteractive().setScale(0.5);
Commencer.on("pointerdown", () => this.sceneéstarté("Jeu"))

// Bouton Comment jouer
const Commener = this.add.image(130,480, "Comment jouer").setInteractive().setScale(0.4);
Commencer.on("pointerdown", () => this.sceneéstarté("Jeu"))




    }

    update() {

    }
}