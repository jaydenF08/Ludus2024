class Intro extends Phaser.Scene {

    preload() {

    }

    create() {
        // cils
let cil = this.add.graphics();


cil.lineStyle(6, 0x000000, 1);

// Ligne verticale
cil.moveTo(300, 200);
cil.lineTo(300, 150);

cil.moveTo(300, 200);
cil.lineTo(275, 150);

cil.moveTo(300, 200);
cil.lineTo(325, 150);

cil.strokePath(); // Important


        
    let graphics = this.add.graphics();

 //arc
 graphics.lineStyle(15, 0x000000, 1);
 let startAngle = Phaser.Math.DegToRad(0);
 let endAngle = Phaser.Math.DegToRad(180);
 graphics.beginPath();

 graphics.arc(400, 340, 100, startAngle, endAngle);
 graphics.strokePath();

 //yeux
 let graphicss = this.add.graphics();

 graphics.lineStyle(3, 0x344f95);
 graphics.fillStyle(0xffffff, 1);
 graphics.fillCircle(300, 200, 30);

 graphics.lineStyle(10, 0x000000);
 graphics.fillStyle(0xffffff, 1);
 graphics.strokeCircle(300, 200, 30);
 graphics.fillCircle(470, 200, 30);





    }

    update() {

    }
}