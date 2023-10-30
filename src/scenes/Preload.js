
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progress
		const progress = this.add.text(960, 740, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.visible = false;
		progress.text = "0%";
		progress.setStyle({ "fontSize": "60px" });

		// player1_background_preload
		const player1_background_preload = this.add.image(196, 599, "green_splash");
		player1_background_preload.scaleX = -1;

		// player2_background_preload
		const player2_background_preload = this.add.image(1724, 599, "blue_splash");

		// container_preload_scene_logo
		const container_preload_scene_logo = this.add.container(960, 234);

		// player2_border_preload
		const player2_border_preload = this.add.image(106, -24, "blue_border");
		player2_border_preload.scaleX = -1;
		container_preload_scene_logo.add(player2_border_preload);

		// player1_border_preload
		const player1_border_preload = this.add.image(-106, -25, "green_border");
		container_preload_scene_logo.add(player1_border_preload);

		// txt_colour_preload
		const txt_colour_preload = this.add.image(0, -31, "green_colour_text");
		container_preload_scene_logo.add(txt_colour_preload);

		// txt_battle_preload
		const txt_battle_preload = this.add.image(-2, 55, "blue_battle_text");
		container_preload_scene_logo.add(txt_battle_preload);

		// blue_dot
		const blue_dot = this.add.image(1, -101, "game_ball");
		blue_dot.scaleX = 0.65;
		blue_dot.scaleY = 0.65;
		container_preload_scene_logo.add(blue_dot);

		// progress (components)
		new PreloadText(progress);

		this.progress = progress;
		this.player1_background_preload = player1_background_preload;
		this.player2_background_preload = player2_background_preload;
		this.container_preload_scene_logo = container_preload_scene_logo;
		this.player2_border_preload = player2_border_preload;
		this.player1_border_preload = player1_border_preload;
		this.txt_colour_preload = txt_colour_preload;
		this.txt_battle_preload = txt_battle_preload;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	progress;
	/** @type {Phaser.GameObjects.Image} */
	player1_background_preload;
	/** @type {Phaser.GameObjects.Image} */
	player2_background_preload;
	/** @type {Phaser.GameObjects.Container} */
	container_preload_scene_logo;
	/** @type {Phaser.GameObjects.Image} */
	player2_border_preload;
	/** @type {Phaser.GameObjects.Image} */
	player1_border_preload;
	/** @type {Phaser.GameObjects.Image} */
	txt_colour_preload;
	/** @type {Phaser.GameObjects.Image} */
	txt_battle_preload;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.oGameManager = new GameManager(this);
		this.oUiManager = new UiManager(this);
		this.oUiManager.setPreloadUi();

		this.gameData = {
			player1Color: this.oGameManager.player1Color,
			player2Color: this.oGameManager.player2Color,
			gameSound: this.oGameManager.gameSound,
			gameMusic: this.oGameManager.gameMusic,
			gameTime: this.oGameManager.gameTime
		}

		this.fakeLoader();

		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("GamePlay", this.gameData));
		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Level", this.gameData));
	}

	fakeLoader() {
		const loadingDuration = 2000;
		const intervalDuration = 20;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.progress.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;

			this.progress.setText(currentInterval + '%')

			currentInterval++;

			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.scene.start("Level", this.gameData);
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
