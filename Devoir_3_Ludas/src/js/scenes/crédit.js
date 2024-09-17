class crédit extends Phaser.Scene {
 
    constructor() {
        super({ key: "crédit" });
    }
 
    preload() {
        this.load.image("retour", "assets/RETOUR.png");
        this.load.image("fermer", "assets/FERMER.png");
        this.load.image("fond", "assets/fond.png");

        let scaleX = 0;
        let scaleY = 0;
        let scale = 0;

        this.fond = this.add.image(config.width / 2, config.height / 2, "fond");
        scaleX = config.width / this.fond.width;
        scaleY = config.height / this.fond.height;
        scale = Math.max(scaleX, scaleY);
        this.fond.setScale(scale);
        
    }
 
    create() {
        // Bouton Commencer
const retour = this.add.image(400,480, "retour").setInteractive().setScale(0.5);
retour.on("pointerdown", () => this.sceneéstarté("Jeu"))

// Bouton Crédits
const fermer = this.add.image(600,480, "fermer").setInteractive().setScale(0.5);
fermer.on("pointerdown", () => this.sceneéstarté("Jeu"))

    }
 
    update() {}
}