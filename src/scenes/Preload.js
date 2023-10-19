
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

		// splash_background
		this.add.image(960, 540, "splash_background");

		// progress
		const progress = this.add.text(960, 740, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "60px" });

		// logo
		this.add.image(960, 234, "logo");

		// progress (components)
		new PreloadText(progress);

		this.progress = progress;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	progress;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.fakeLoader();

		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("GamePlay"));
	}

	fakeLoader() {
		const loadingDuration = 2000;
		const intervalDuration = 20;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			const currentProgress = currentInterval * progressIncrement;

			this.progress.setText(currentInterval + '%')

			currentInterval++;

			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.scene.start("Level");
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
