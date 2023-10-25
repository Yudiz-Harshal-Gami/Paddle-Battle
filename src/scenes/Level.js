
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

		// btnVolume
		const btnVolume = this.add.image(890, 857, "volume");

		// btnMusic
		const btnMusic = this.add.image(1030, 857, "music");

		// player1_background_level
		const player1_background_level = this.add.image(196, 599, "green_splash");
		player1_background_level.scaleX = -1;

		// player2_background_level
		const player2_background_level = this.add.image(1724, 599, "blue_splash");

		// container_level_scene_logo
		const container_level_scene_logo = this.add.container(960, 234);

		// player2_border_level
		const player2_border_level = this.add.image(106, -24, "blue_border");
		player2_border_level.scaleX = -1;
		container_level_scene_logo.add(player2_border_level);

		// player1_border_level
		const player1_border_level = this.add.image(-106, -25, "green_border");
		container_level_scene_logo.add(player1_border_level);

		// txt_colour_level
		const txt_colour_level = this.add.image(0, -31, "green_colour_text");
		container_level_scene_logo.add(txt_colour_level);

		// txt_battle_level
		const txt_battle_level = this.add.image(-2, 55, "blue_battle_text");
		container_level_scene_logo.add(txt_battle_level);

		// game_ball
		const game_ball = this.add.image(1, -101, "game_ball");
		game_ball.scaleX = 0.65;
		game_ball.scaleY = 0.65;
		container_level_scene_logo.add(game_ball);

		// container_how_to_play_button
		const container_how_to_play_button = this.add.container(960, 668);

		// btnHowToPlay
		const btnHowToPlay = this.add.image(0, 0, "button");
		btnHowToPlay.alpha = 0.0001;
		btnHowToPlay.alphaTopLeft = 0.0001;
		btnHowToPlay.alphaTopRight = 0.0001;
		btnHowToPlay.alphaBottomLeft = 0.0001;
		btnHowToPlay.alphaBottomRight = 0.0001;
		container_how_to_play_button.add(btnHowToPlay);

		// txtHowToPlay
		const txtHowToPlay = this.add.text(0, 0, "", {});
		txtHowToPlay.setOrigin(0.5, 0.5);
		txtHowToPlay.text = "HOW TO PLAY";
		txtHowToPlay.setStyle({ "fontSize": "45px" });
		container_how_to_play_button.add(txtHowToPlay);

		// btnHowToPlayPlayer2
		const btnHowToPlayPlayer2 = this.add.image(93, 0, "blue_button");
		btnHowToPlayPlayer2.scaleX = -1;
		container_how_to_play_button.add(btnHowToPlayPlayer2);

		// btnHowToPlayPlayer1
		const btnHowToPlayPlayer1 = this.add.image(-93, 0, "green_button");
		container_how_to_play_button.add(btnHowToPlayPlayer1);

		// container_play_button
		const container_play_button = this.add.container(960, 506);

		// btnPlay
		const btnPlay = this.add.image(0, 0, "button");
		btnPlay.alpha = 0.001;
		btnPlay.alphaTopLeft = 0.001;
		btnPlay.alphaTopRight = 0.001;
		btnPlay.alphaBottomLeft = 0.001;
		btnPlay.alphaBottomRight = 0.001;
		container_play_button.add(btnPlay);

		// txtPlay
		const txtPlay = this.add.text(0, 0, "", {});
		txtPlay.setOrigin(0.5, 0.5);
		txtPlay.text = "PLAY";
		txtPlay.setStyle({ "fontSize": "50px" });
		container_play_button.add(txtPlay);

		// btnPlayPlayer2
		const btnPlayPlayer2 = this.add.image(94, 0, "blue_button");
		btnPlayPlayer2.scaleX = -1;
		container_play_button.add(btnPlayPlayer2);

		// btnPlayPlayer1
		const btnPlayPlayer1 = this.add.image(-93, 0, "green_button");
		container_play_button.add(btnPlayPlayer1);

		// container_timer_popup
		const container_timer_popup = this.add.container(0, 0);
		container_timer_popup.visible = false;

		// popup_backgound
		const popup_backgound = this.add.image(960, 540, "black_screen");
		container_timer_popup.add(popup_backgound);

		// text_1
		const text_1 = this.add.text(960, 199, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Select Game Time";
		text_1.setStyle({ "fontSize": "50px" });
		container_timer_popup.add(text_1);

		// btnClose
		const btnClose = this.add.image(960, 833, "cross");
		btnClose.scaleX = 0.8;
		btnClose.scaleY = 0.8;
		btnClose.angle = 45;
		container_timer_popup.add(btnClose);

		// container_game_timer_4
		const container_game_timer_4 = this.add.container(960, 713);
		container_timer_popup.add(container_game_timer_4);

		// btn_game_timer_4
		const btn_game_timer_4 = this.add.image(0, 0, "button");
		btn_game_timer_4.scaleX = 0.56;
		btn_game_timer_4.scaleY = 0.6;
		btn_game_timer_4.alpha = 0.0001;
		btn_game_timer_4.alphaTopLeft = 0.0001;
		btn_game_timer_4.alphaTopRight = 0.0001;
		btn_game_timer_4.alphaBottomLeft = 0.0001;
		btn_game_timer_4.alphaBottomRight = 0.0001;
		container_game_timer_4.add(btn_game_timer_4);

		// player1_game_timer_4
		const player1_game_timer_4 = this.add.image(-60, 0, "green_button");
		player1_game_timer_4.scaleX = 0.6;
		player1_game_timer_4.scaleY = 0.6;
		container_game_timer_4.add(player1_game_timer_4);

		// player2_game_timer_4
		const player2_game_timer_4 = this.add.image(60, 0, "blue_button");
		player2_game_timer_4.scaleX = -0.6;
		player2_game_timer_4.scaleY = 0.6;
		container_game_timer_4.add(player2_game_timer_4);

		// text_5
		const text_5 = this.add.text(0, 0, "", {});
		text_5.setOrigin(0.5, 0.5);
		text_5.text = "10 Minutes";
		text_5.setStyle({ "fontSize": "30px" });
		container_game_timer_4.add(text_5);

		// container_game_timer_3
		const container_game_timer_3 = this.add.container(960, 606);
		container_timer_popup.add(container_game_timer_3);

		// btn_game_timer_3
		const btn_game_timer_3 = this.add.image(0, 0, "button");
		btn_game_timer_3.scaleX = 0.56;
		btn_game_timer_3.scaleY = 0.6;
		btn_game_timer_3.alpha = 0.0001;
		btn_game_timer_3.alphaTopLeft = 0.0001;
		btn_game_timer_3.alphaTopRight = 0.0001;
		btn_game_timer_3.alphaBottomLeft = 0.0001;
		btn_game_timer_3.alphaBottomRight = 0.0001;
		container_game_timer_3.add(btn_game_timer_3);

		// player1_game_timer_3
		const player1_game_timer_3 = this.add.image(-60, 0, "green_button");
		player1_game_timer_3.scaleX = 0.6;
		player1_game_timer_3.scaleY = 0.6;
		container_game_timer_3.add(player1_game_timer_3);

		// player2_game_timer_3
		const player2_game_timer_3 = this.add.image(60, 0, "blue_button");
		player2_game_timer_3.scaleX = -0.6;
		player2_game_timer_3.scaleY = 0.6;
		container_game_timer_3.add(player2_game_timer_3);

		// text_4
		const text_4 = this.add.text(0, 0, "", {});
		text_4.setOrigin(0.5, 0.5);
		text_4.text = "5 Minutes";
		text_4.setStyle({ "fontSize": "30px" });
		container_game_timer_3.add(text_4);

		// container_game_timer_2
		const container_game_timer_2 = this.add.container(960, 499);
		container_timer_popup.add(container_game_timer_2);

		// btn_game_timer_2
		const btn_game_timer_2 = this.add.image(0, 0, "button");
		btn_game_timer_2.scaleX = 0.56;
		btn_game_timer_2.scaleY = 0.6;
		btn_game_timer_2.alpha = 0.0001;
		btn_game_timer_2.alphaTopLeft = 0.0001;
		btn_game_timer_2.alphaTopRight = 0.0001;
		btn_game_timer_2.alphaBottomLeft = 0.0001;
		btn_game_timer_2.alphaBottomRight = 0.0001;
		container_game_timer_2.add(btn_game_timer_2);

		// player1_game_timer_2
		const player1_game_timer_2 = this.add.image(-60, 0, "green_button");
		player1_game_timer_2.scaleX = 0.6;
		player1_game_timer_2.scaleY = 0.6;
		container_game_timer_2.add(player1_game_timer_2);

		// player2_game_timer_2
		const player2_game_timer_2 = this.add.image(60, 0, "blue_button");
		player2_game_timer_2.scaleX = -0.6;
		player2_game_timer_2.scaleY = 0.6;
		container_game_timer_2.add(player2_game_timer_2);

		// text_3
		const text_3 = this.add.text(0, 0, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "2 Minutes";
		text_3.setStyle({ "fontSize": "30px" });
		container_game_timer_2.add(text_3);

		// container_game_timer_1
		const container_game_timer_1 = this.add.container(960, 392);
		container_timer_popup.add(container_game_timer_1);

		// btn_game_timer_1
		const btn_game_timer_1 = this.add.image(0, 0, "button");
		btn_game_timer_1.scaleX = 0.56;
		btn_game_timer_1.scaleY = 0.6;
		btn_game_timer_1.alpha = 0.0001;
		btn_game_timer_1.alphaTopLeft = 0.0001;
		btn_game_timer_1.alphaTopRight = 0.0001;
		btn_game_timer_1.alphaBottomLeft = 0.0001;
		btn_game_timer_1.alphaBottomRight = 0.0001;
		container_game_timer_1.add(btn_game_timer_1);

		// player1_game_timer_1
		const player1_game_timer_1 = this.add.image(-60, 0, "green_button");
		player1_game_timer_1.scaleX = 0.6;
		player1_game_timer_1.scaleY = 0.6;
		container_game_timer_1.add(player1_game_timer_1);

		// player2_game_timer_1
		const player2_game_timer_1 = this.add.image(60, 0, "blue_button");
		player2_game_timer_1.scaleX = -0.6;
		player2_game_timer_1.scaleY = 0.6;
		container_game_timer_1.add(player2_game_timer_1);

		// text_2
		const text_2 = this.add.text(0, 0, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "1 Minutes";
		text_2.setStyle({ "fontSize": "30px" });
		container_game_timer_1.add(text_2);

		this.btnVolume = btnVolume;
		this.btnMusic = btnMusic;
		this.player1_background_level = player1_background_level;
		this.player2_background_level = player2_background_level;
		this.container_level_scene_logo = container_level_scene_logo;
		this.player2_border_level = player2_border_level;
		this.player1_border_level = player1_border_level;
		this.txt_colour_level = txt_colour_level;
		this.txt_battle_level = txt_battle_level;
		this.container_how_to_play_button = container_how_to_play_button;
		this.btnHowToPlay = btnHowToPlay;
		this.txtHowToPlay = txtHowToPlay;
		this.btnHowToPlayPlayer2 = btnHowToPlayPlayer2;
		this.btnHowToPlayPlayer1 = btnHowToPlayPlayer1;
		this.container_play_button = container_play_button;
		this.btnPlay = btnPlay;
		this.txtPlay = txtPlay;
		this.btnPlayPlayer2 = btnPlayPlayer2;
		this.btnPlayPlayer1 = btnPlayPlayer1;
		this.container_timer_popup = container_timer_popup;
		this.popup_backgound = popup_backgound;
		this.btnClose = btnClose;
		this.container_game_timer_4 = container_game_timer_4;
		this.btn_game_timer_4 = btn_game_timer_4;
		this.player1_game_timer_4 = player1_game_timer_4;
		this.player2_game_timer_4 = player2_game_timer_4;
		this.container_game_timer_3 = container_game_timer_3;
		this.btn_game_timer_3 = btn_game_timer_3;
		this.player1_game_timer_3 = player1_game_timer_3;
		this.player2_game_timer_3 = player2_game_timer_3;
		this.container_game_timer_2 = container_game_timer_2;
		this.btn_game_timer_2 = btn_game_timer_2;
		this.player1_game_timer_2 = player1_game_timer_2;
		this.player2_game_timer_2 = player2_game_timer_2;
		this.container_game_timer_1 = container_game_timer_1;
		this.btn_game_timer_1 = btn_game_timer_1;
		this.player1_game_timer_1 = player1_game_timer_1;
		this.player2_game_timer_1 = player2_game_timer_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btnVolume;
	/** @type {Phaser.GameObjects.Image} */
	btnMusic;
	/** @type {Phaser.GameObjects.Image} */
	player1_background_level;
	/** @type {Phaser.GameObjects.Image} */
	player2_background_level;
	/** @type {Phaser.GameObjects.Container} */
	container_level_scene_logo;
	/** @type {Phaser.GameObjects.Image} */
	player2_border_level;
	/** @type {Phaser.GameObjects.Image} */
	player1_border_level;
	/** @type {Phaser.GameObjects.Image} */
	txt_colour_level;
	/** @type {Phaser.GameObjects.Image} */
	txt_battle_level;
	/** @type {Phaser.GameObjects.Container} */
	container_how_to_play_button;
	/** @type {Phaser.GameObjects.Image} */
	btnHowToPlay;
	/** @type {Phaser.GameObjects.Text} */
	txtHowToPlay;
	/** @type {Phaser.GameObjects.Image} */
	btnHowToPlayPlayer2;
	/** @type {Phaser.GameObjects.Image} */
	btnHowToPlayPlayer1;
	/** @type {Phaser.GameObjects.Container} */
	container_play_button;
	/** @type {Phaser.GameObjects.Image} */
	btnPlay;
	/** @type {Phaser.GameObjects.Text} */
	txtPlay;
	/** @type {Phaser.GameObjects.Image} */
	btnPlayPlayer2;
	/** @type {Phaser.GameObjects.Image} */
	btnPlayPlayer1;
	/** @type {Phaser.GameObjects.Container} */
	container_timer_popup;
	/** @type {Phaser.GameObjects.Image} */
	popup_backgound;
	/** @type {Phaser.GameObjects.Image} */
	btnClose;
	/** @type {Phaser.GameObjects.Container} */
	container_game_timer_4;
	/** @type {Phaser.GameObjects.Image} */
	btn_game_timer_4;
	/** @type {Phaser.GameObjects.Image} */
	player1_game_timer_4;
	/** @type {Phaser.GameObjects.Image} */
	player2_game_timer_4;
	/** @type {Phaser.GameObjects.Container} */
	container_game_timer_3;
	/** @type {Phaser.GameObjects.Image} */
	btn_game_timer_3;
	/** @type {Phaser.GameObjects.Image} */
	player1_game_timer_3;
	/** @type {Phaser.GameObjects.Image} */
	player2_game_timer_3;
	/** @type {Phaser.GameObjects.Container} */
	container_game_timer_2;
	/** @type {Phaser.GameObjects.Image} */
	btn_game_timer_2;
	/** @type {Phaser.GameObjects.Image} */
	player1_game_timer_2;
	/** @type {Phaser.GameObjects.Image} */
	player2_game_timer_2;
	/** @type {Phaser.GameObjects.Container} */
	container_game_timer_1;
	/** @type {Phaser.GameObjects.Image} */
	btn_game_timer_1;
	/** @type {Phaser.GameObjects.Image} */
	player1_game_timer_1;
	/** @type {Phaser.GameObjects.Image} */
	player2_game_timer_1;

	/* START-USER-CODE */

	// Write more your code here

	init(data) {
		this.gameData = data;
	}

	create() {

		this.editorCreate();

		this.oGameManager = new GameManager(this);
		this.oSoundManager = new SoundManager(this);
		this.oUiManager = new UiManager(this);
		this.oInputManager = new InputManager(this);
		this.oInputManager.levelSceneInput();

		if (this.gameData.player1Color !== undefined && this.gameData.player2Color !== undefined) {
			this.oGameManager.player1Color = this.gameData.player1Color
			this.oGameManager.player2Color = this.gameData.player2Color
		}
		this.oUiManager.setLevelUi();

		this.oSoundManager.soundPlay(this.oSoundManager.backgroundMusic , true);

		this.tweenLogo = this.tweens.add({
			targets: this.container_level_scene_logo,
			scaleX: 1.02,
			scaleY: 1.02,
			duration: 500,
			repeat: -1,
			yoyo: true
		})

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
