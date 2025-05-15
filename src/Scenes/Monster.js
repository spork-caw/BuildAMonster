class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        this.SPEED = 10;


        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueD.png");
        my.sprite.armright = this.add.sprite(this.bodyX+100, this.bodyY+50, "monsterParts", "arm_blueA.png");
        my.sprite.armleft = this.add.sprite(this.bodyX-100, this.bodyY+50, "monsterParts", "arm_blueE.png");
        my.sprite.armleft.flipX = true
        my.sprite.legright = this.add.sprite(this.bodyX+70, this.bodyY+110, "monsterParts", "leg_blueC.png");
        my.sprite.legleft = this.add.sprite(this.bodyX-70, this.bodyY+110, "monsterParts", "leg_blueE.png");
        my.sprite.legleft.flipX = true
        my.sprite.eyeupper = this.add.sprite(this.bodyX, this.bodyY-40, "monsterParts", "eye_human_red.png").setScale(0.75);
        my.sprite.eyeright = this.add.sprite(this.bodyX+40, this.bodyY, "monsterParts", "eye_closed_feminine.png");
        my.sprite.eyeleft = this.add.sprite(this.bodyX-40, this.bodyY, "monsterParts", "eye_yellow.png").setScale(0.75);
        my.sprite.eyebrow = this.add.sprite(this.bodyX, this.bodyY-70, "monsterParts", "eyebrowA.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouthC.png");
        my.sprite.hornright = this.add.sprite(this.bodyX+50, this.bodyY-70, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.hornleft = this.add.sprite(this.bodyX-50, this.bodyY-70, "monsterParts", "detail_green_ear.png");
        my.sprite.hornleft.flipX = true

        //keyboard inputs
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    moveMonster(speed) {
        for (let part in this.my.sprite) {
            this.my.sprite[part].x += speed;
        }
    }


    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            // smile
            my.sprite.mouth.setTexture("monsterParts", "mouthC.png");
        }
    
        if (Phaser.Input.Keyboard.JustDown(this.keyF)) {
            // fangs
            my.sprite.mouth.setTexture("monsterParts", "mouthJ.png");
        }
        if (this.keyA.isDown)
             {
            //left
            console.log ("moving left");
            this.moveMonster(-this.SPEED);
        }
        if (this.keyD.isDown)
            {
           //right
           console.log ("moving right");
           this.moveMonster(+this.SPEED);
       }
    }
}