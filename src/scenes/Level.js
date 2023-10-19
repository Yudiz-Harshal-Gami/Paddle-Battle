
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// splash_background
		this.add.image(960, 540, "splash_background");

		// logo
		const logo = this.add.image(960, 234, "logo");

		// btnPlay
		const btnPlay = this.add.image(960, 509, "button");

		// txtPlay
		const txtPlay = this.add.text(960, 509, "", {});
		txtPlay.setOrigin(0.5, 0.5);
		txtPlay.text = "PLAY";
		txtPlay.setStyle({ "fontSize": "60px" });

		// btnHowToPlay
		const btnHowToPlay = this.add.image(960, 691, "button");

		// txtHowToPlay
		const txtHowToPlay = this.add.text(960, 691, "", {});
		txtHowToPlay.setOrigin(0.5, 0.5);
		txtHowToPlay.text = "HOW TO PLAY";
		txtHowToPlay.setStyle({ "fontSize": "60px" });

		// btnVolume
		const btnVolume = this.add.image(890, 857, "volume");

		// btnMusic
		const btnMusic = this.add.image(1030, 857, "music");

		this.logo = logo;
		this.btnPlay = btnPlay;
		this.txtPlay = txtPlay;
		this.btnHowToPlay = btnHowToPlay;
		this.txtHowToPlay = txtHowToPlay;
		this.btnVolume = btnVolume;
		this.btnMusic = btnMusic;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	logo;
	/** @type {Phaser.GameObjects.Image} */
	btnPlay;
	/** @type {Phaser.GameObjects.Text} */
	txtPlay;
	/** @type {Phaser.GameObjects.Image} */
	btnHowToPlay;
	/** @type {Phaser.GameObjects.Text} */
	txtHowToPlay;
	/** @type {Phaser.GameObjects.Image} */
	btnVolume;
	/** @type {Phaser.GameObjects.Image} */
	btnMusic;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.oGameManager = new GameManager(this);
		this.oSoundManager = new SoundManager(this);

		this.soundData = {
			gameSound: true,
			gameMusic: true
		}

		this.tweenLogo = this.tweens.add({
			targets: this.logo,
			scaleX: 1.02,
			scaleY: 1.02,
			duration: 500,
			repeat: -1,
			yoyo: true
		})

		this.btnPlay.setInteractive();
		this.btnHowToPlay.setInteractive();
		this.btnMusic.setInteractive();
		this.btnVolume.setInteractive();

		this.btnPlay.on('pointerdown', () => {
			this.scene.start('GamePlay', this.soundData);
		})
		this.btnPlay.on('pointerover', () => {
			this.pointerOverTween(this.btnPlay, 1)
			this.pointerOverTween(this.txtPlay, 1)
		})
		this.btnPlay.on('pointerout', () => {
			this.pointerOutTween(this.btnPlay, 1)
			this.pointerOutTween(this.txtPlay, 1)
		})

		this.btnHowToPlay.on('pointerdown', () => {
			// code for how to play;
		})
		this.btnHowToPlay.on('pointerover', () => {
			this.pointerOverTween(this.btnHowToPlay, 1)
			this.pointerOverTween(this.txtHowToPlay, 1)
		})
		this.btnHowToPlay.on('pointerout', () => {
			this.pointerOutTween(this.btnHowToPlay, 1)
			this.pointerOutTween(this.txtHowToPlay, 1)
		})

		this.btnMusic.on('pointerdown', () => {
			// code for how to play;
			if (this.btnMusic.texture.key == 'music') {
				this.btnMusic.setTexture('music_off');
			}
			else {
				this.btnMusic.setTexture('music');
			}
		})
		this.btnMusic.on('pointerover', () => { this.pointerOverTween(this.btnMusic, 1) })
		this.btnMusic.on('pointerout', () => { this.pointerOutTween(this.btnMusic, 1) })

		this.btnVolume.on('pointerdown', () => {
			// code for how to play;
			if (this.btnVolume.texture.key == 'volume') {
				this.btnVolume.setTexture('volume_off');
			}
			else {
				this.btnVolume.setTexture('volume');
			}
		})
		this.btnVolume.on('pointerover', () => { this.pointerOverTween(this.btnVolume, 1) })
		this.btnVolume.on('pointerout', () => { this.pointerOutTween(this.btnVolume, 1) })


	}

	pointerOverTween(btn, initSclae) {
		this.tweens.add({
			targets: btn,
			scaleX: initSclae + 0.05,
			scaleY: initSclae + 0.05,
			duration: 100
		})
	}
	pointerOutTween(btn, initSclae) {
		this.tweens.add({
			targets: btn,
			scaleX: initSclae,
			scaleY: initSclae,
			duration: 100
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
