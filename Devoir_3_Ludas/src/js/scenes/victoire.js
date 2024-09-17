class victoire extends Phaser.Scene {
 
    constructor() {
        super({ key: "Victoire" });
    }
 
    preload() {
        this.load.image("menu", "assets/Menu Principal.png");

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
        const menu = this.add.image(400,480, "menu").setInteractive().setScale(0.5);
        menu.on("pointerdown", () => this.sceneéstarté("Jeu"))
    }
 
    update() {}
}