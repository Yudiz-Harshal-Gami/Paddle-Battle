
// You can write more code here

/* START OF COMPILED CODE */

class GamePlay extends Phaser.Scene {

	constructor() {
		super("GamePlay");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// player1_background
		const player1_background = this.add.image(490, 540, "green_background");

		// player2_background
		const player2_background = this.add.image(1429, 540, "blue_background");
		player2_background.scaleX = -1;

		// container_game_play
		const container_game_play = this.add.container(0, 0);

		// stick
		const stick = this.add.image(959.5, 539.5, "stick");
		container_game_play.add(stick);

		// txtTimer
		const txtTimer = this.add.text(960, 121, "", {});
		txtTimer.setOrigin(0.5, 0.5);
		txtTimer.setStyle({ "fontSize": "38px" });
		container_game_play.add(txtTimer);

		// txtPlayer1ScoreCard
		const txtPlayer1ScoreCard = this.add.text(570, 540, "", {});
		txtPlayer1ScoreCard.setOrigin(0.5, 0.5);
		txtPlayer1ScoreCard.alpha = 0.5;
		txtPlayer1ScoreCard.alphaTopLeft = 0.5;
		txtPlayer1ScoreCard.alphaTopRight = 0.5;
		txtPlayer1ScoreCard.alphaBottomLeft = 0.5;
		txtPlayer1ScoreCard.alphaBottomRight = 0.5;
		txtPlayer1ScoreCard.setStyle({ "color": "#610480", "fontSize": "400px" });
		container_game_play.add(txtPlayer1ScoreCard);

		// txtPlayer2ScoreCard
		const txtPlayer2ScoreCard = this.add.text(1350, 540, "", {});
		txtPlayer2ScoreCard.setOrigin(0.5, 0.5);
		txtPlayer2ScoreCard.alpha = 0.5;
		txtPlayer2ScoreCard.alphaTopLeft = 0.5;
		txtPlayer2ScoreCard.alphaTopRight = 0.5;
		txtPlayer2ScoreCard.alphaBottomLeft = 0.5;
		txtPlayer2ScoreCard.alphaBottomRight = 0.5;
		txtPlayer2ScoreCard.setStyle({ "color": "#804500", "fontSize": "400px" });
		container_game_play.add(txtPlayer2ScoreCard);

		// player1_controller
		const player1_controller = this.add.image(406, 515, "green_controller_aswd");
		container_game_play.add(player1_controller);

		// player2_controller
		const player2_controller = this.add.image(1520, 495, "blue_controller_arrows");
		container_game_play.add(player2_controller);

		// intial_game_ball
		const intial_game_ball = this.add.image(960, 540, "game_ball");
		container_game_play.add(intial_game_ball);

		// btnMusic
		const btnMusic = this.add.image(210, 117, "music");
		btnMusic.scaleX = 0.8;
		btnMusic.scaleY = 0.8;
		container_game_play.add(btnMusic);

		// btnVolume
		const btnVolume = this.add.image(121, 117, "volume");
		btnVolume.scaleX = 0.8;
		btnVolume.scaleY = 0.8;
		container_game_play.add(btnVolume);

		// btnGameQuit
		const btnGameQuit = this.add.image(1808, 119, "cross");
		btnGameQuit.scaleX = 0.8;
		btnGameQuit.scaleY = 0.8;
		btnGameQuit.angle = 45;
		container_game_play.add(btnGameQuit);

		// txt_player1_info
		const txt_player1_info = this.add.text(406, 854, "", {});
		txt_player1_info.setOrigin(0.5, 0.5);
		txt_player1_info.text = "Prees any WASD key to Begin";
		txt_player1_info.setStyle({ "fontSize": "30px" });
		container_game_play.add(txt_player1_info);

		// txt_player2_info
		const txt_player2_info = this.add.text(1520, 854, "", {});
		txt_player2_info.setOrigin(0.5, 0.5);
		txt_player2_info.text = "Prees any Arrow key to Begin";
		txt_player2_info.setStyle({ "fontSize": "30px" });
		container_game_play.add(txt_player2_info);

		// container_ball_particles
		const container_ball_particles = this.add.container(0, 0);
		container_game_play.add(container_ball_particles);

		// container_gameover_popup
		const container_gameover_popup = this.add.container(0, 0);
		container_gameover_popup.visible = false;

		// black_screen
		const black_screen = this.add.image(960, 540, "black_screen");
		container_gameover_popup.add(black_screen);

		// player2_scoreboard
		const player2_scoreboard = this.add.image(1142, 500, "blue_scoreboard");
		player2_scoreboard.scaleX = -1;
		container_gameover_popup.add(player2_scoreboard);

		// player1_scoreboard
		const player1_scoreboard = this.add.image(777, 500, "green_scoreboard");
		container_gameover_popup.add(player1_scoreboard);

		// txtWinner
		const txtWinner = this.add.text(960, 387, "", {});
		txtWinner.setOrigin(0.5, 0.5);
		txtWinner.setStyle({ "fontSize": "35px" });
		container_gameover_popup.add(txtWinner);

		// txtPlayer1FinalScore
		const txtPlayer1FinalScore = this.add.text(924, 604, "", {});
		txtPlayer1FinalScore.setOrigin(1, 0.5);
		txtPlayer1FinalScore.alpha = 0.7;
		txtPlayer1FinalScore.alphaTopLeft = 0.7;
		txtPlayer1FinalScore.alphaTopRight = 0.7;
		txtPlayer1FinalScore.alphaBottomLeft = 0.7;
		txtPlayer1FinalScore.alphaBottomRight = 0.7;
		txtPlayer1FinalScore.setStyle({ "color": "#C000FF", "fontSize": "120px" });
		container_gameover_popup.add(txtPlayer1FinalScore);

		// txtPlayer2FinalScore
		const txtPlayer2FinalScore = this.add.text(996, 604, "", {});
		txtPlayer2FinalScore.setOrigin(0, 0.5);
		txtPlayer2FinalScore.alpha = 0.7;
		txtPlayer2FinalScore.alphaTopLeft = 0.7;
		txtPlayer2FinalScore.alphaTopRight = 0.7;
		txtPlayer2FinalScore.alphaBottomLeft = 0.7;
		txtPlayer2FinalScore.alphaBottomRight = 0.7;
		txtPlayer2FinalScore.setStyle({ "color": "#FF8900", "fontSize": "120px" });
		container_gameover_popup.add(txtPlayer2FinalScore);

		// text_1
		const text_1 = this.add.text(960, 604, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "-";
		text_1.setStyle({ "fontSize": "120px" });
		container_gameover_popup.add(text_1);

		// score_text
		const score_text = this.add.image(960, 487, "score_text");
		container_gameover_popup.add(score_text);

		// gameover_text
		const gameover_text = this.add.image(960, 199, "gameover_text");
		container_gameover_popup.add(gameover_text);

		// container_player2_button
		const container_player2_button = this.add.container(1160, 836);
		container_gameover_popup.add(container_player2_button);

		// btnReplayGame
		const btnReplayGame = this.add.image(0, 0, "button");
		btnReplayGame.scaleX = 0.8;
		btnReplayGame.scaleY = 0.8;
		btnReplayGame.alpha = 0.01;
		btnReplayGame.alphaTopLeft = 0.01;
		btnReplayGame.alphaTopRight = 0.01;
		btnReplayGame.alphaBottomLeft = 0.01;
		btnReplayGame.alphaBottomRight = 0.01;
		container_player2_button.add(btnReplayGame);

		// txtReplayGame
		const txtReplayGame = this.add.text(0, 0, "", {});
		txtReplayGame.setOrigin(0.5, 0.5);
		txtReplayGame.text = "Replay";
		txtReplayGame.setStyle({ "color": "#ffffffff", "fontSize": "50px" });
		container_player2_button.add(txtReplayGame);

		// btnReplayGamePlayer1
		const btnReplayGamePlayer1 = this.add.image(-90, 0, "green_button");
		btnReplayGamePlayer1.scaleX = 0.8;
		btnReplayGamePlayer1.scaleY = 0.8;
		container_player2_button.add(btnReplayGamePlayer1);

		// btnReplayGamePlayer2
		const btnReplayGamePlayer2 = this.add.image(90, 0, "blue_button");
		btnReplayGamePlayer2.scaleX = -0.8;
		btnReplayGamePlayer2.scaleY = 0.8;
		container_player2_button.add(btnReplayGamePlayer2);

		// container_player1_button
		const container_player1_button = this.add.container(760, 834);
		container_gameover_popup.add(container_player1_button);

		// btnGameOver
		const btnGameOver = this.add.image(0, 0, "button");
		btnGameOver.scaleX = 0.8;
		btnGameOver.scaleY = 0.8;
		btnGameOver.alpha = 0.01;
		btnGameOver.alphaTopLeft = 0.01;
		btnGameOver.alphaTopRight = 0.01;
		btnGameOver.alphaBottomLeft = 0.01;
		btnGameOver.alphaBottomRight = 0.01;
		container_player1_button.add(btnGameOver);

		// txtGameOver
		const txtGameOver = this.add.text(0, 0, "", {});
		txtGameOver.setOrigin(0.5, 0.5);
		txtGameOver.text = "Home";
		txtGameOver.setStyle({ "color": "#ffffffff", "fontSize": "55px" });
		container_player1_button.add(txtGameOver);

		// btnGameOverPlayer1
		const btnGameOverPlayer1 = this.add.image(-90, 0, "green_button");
		btnGameOverPlayer1.scaleX = 0.8;
		btnGameOverPlayer1.scaleY = 0.8;
		container_player1_button.add(btnGameOverPlayer1);

		// btnGameOverPlayer2
		const btnGameOverPlayer2 = this.add.image(90, 0, "blue_button");
		btnGameOverPlayer2.scaleX = -0.8;
		btnGameOverPlayer2.scaleY = 0.8;
		container_player1_button.add(btnGameOverPlayer2);

		this.player1_background = player1_background;
		this.player2_background = player2_background;
		this.container_game_play = container_game_play;
		this.txtTimer = txtTimer;
		this.txtPlayer1ScoreCard = txtPlayer1ScoreCard;
		this.txtPlayer2ScoreCard = txtPlayer2ScoreCard;
		this.player1_controller = player1_controller;
		this.player2_controller = player2_controller;
		this.intial_game_ball = intial_game_ball;
		this.btnMusic = btnMusic;
		this.btnVolume = btnVolume;
		this.btnGameQuit = btnGameQuit;
		this.txt_player1_info = txt_player1_info;
		this.txt_player2_info = txt_player2_info;
		this.container_ball_particles = container_ball_particles;
		this.container_gameover_popup = container_gameover_popup;
		this.player2_scoreboard = player2_scoreboard;
		this.player1_scoreboard = player1_scoreboard;
		this.txtWinner = txtWinner;
		this.txtPlayer1FinalScore = txtPlayer1FinalScore;
		this.txtPlayer2FinalScore = txtPlayer2FinalScore;
		this.container_player2_button = container_player2_button;
		this.btnReplayGame = btnReplayGame;
		this.txtReplayGame = txtReplayGame;
		this.btnReplayGamePlayer1 = btnReplayGamePlayer1;
		this.btnReplayGamePlayer2 = btnReplayGamePlayer2;
		this.container_player1_button = container_player1_button;
		this.btnGameOver = btnGameOver;
		this.txtGameOver = txtGameOver;
		this.btnGameOverPlayer1 = btnGameOverPlayer1;
		this.btnGameOverPlayer2 = btnGameOverPlayer2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	player1_background;
	/** @type {Phaser.GameObjects.Image} */
	player2_background;
	/** @type {Phaser.GameObjects.Container} */
	container_game_play;
	/** @type {Phaser.GameObjects.Text} */
	txtTimer;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayer1ScoreCard;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayer2ScoreCard;
	/** @type {Phaser.GameObjects.Image} */
	player1_controller;
	/** @type {Phaser.GameObjects.Image} */
	player2_controller;
	/** @type {Phaser.GameObjects.Image} */
	intial_game_ball;
	/** @type {Phaser.GameObjects.Image} */
	btnMusic;
	/** @type {Phaser.GameObjects.Image} */
	btnVolume;
	/** @type {Phaser.GameObjects.Image} */
	btnGameQuit;
	/** @type {Phaser.GameObjects.Text} */
	txt_player1_info;
	/** @type {Phaser.GameObjects.Text} */
	txt_player2_info;
	/** @type {Phaser.GameObjects.Container} */
	container_ball_particles;
	/** @type {Phaser.GameObjects.Container} */
	container_gameover_popup;
	/** @type {Phaser.GameObjects.Image} */
	player2_scoreboard;
	/** @type {Phaser.GameObjects.Image} */
	player1_scoreboard;
	/** @type {Phaser.GameObjects.Text} */
	txtWinner;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayer1FinalScore;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayer2FinalScore;
	/** @type {Phaser.GameObjects.Container} */
	container_player2_button;
	/** @type {Phaser.GameObjects.Image} */
	btnReplayGame;
	/** @type {Phaser.GameObjects.Text} */
	txtReplayGame;
	/** @type {Phaser.GameObjects.Image} */
	btnReplayGamePlayer1;
	/** @type {Phaser.GameObjects.Image} */
	btnReplayGamePlayer2;
	/** @type {Phaser.GameObjects.Container} */
	container_player1_button;
	/** @type {Phaser.GameObjects.Image} */
	btnGameOver;
	/** @type {Phaser.GameObjects.Text} */
	txtGameOver;
	/** @type {Phaser.GameObjects.Image} */
	btnGameOverPlayer1;
	/** @type {Phaser.GameObjects.Image} */
	btnGameOverPlayer2;

	/* START-USER-CODE */

	// Write your code here

	init(data) {
		this.gameData = data;
	}

	create() {

		this.editorCreate();

		this.oGameManager = new GameManager(this);
		this.oSoundManager = new SoundManager(this);
		this.oUiManager = new UiManager(this);
		this.oInputManager = new InputManager(this);
		this.oInputManager.gamePlaySceneInput();

		if (this.gameData.player1Color !== undefined && this.gameData.player2Color !== undefined && this.gameData.gameTime !== undefined) {
			this.oGameManager.player1Color = this.gameData.player1Color;
			this.oGameManager.player2Color = this.gameData.player2Color;
			this.oGameManager.gameTime = this.gameData.gameTime;
		}

		this.oUiManager.setGamePlayUi();
		this.isGameOver = false
		this.isTimeOver = false
		this.isGameStart = false
		this.isBallCollide = false
		this.isGamePause = false
		this.isPlayer1Ready = false
		this.isPlayer2Ready = false

		this.oSoundManager.soundPlay(this.oSoundManager.backgroundMusic, true);

		this.input.keyboard.on('keydown', (event) => {
			if (!this.isPlayer1Ready) {
				switch (event.code) {
					case 'KeyA':
						this.txt_player1_info.setVisible(false);
						this.isPlayer1Ready = true;
						this.playerReady();
						break;
					case 'KeyD':
						this.txt_player1_info.setVisible(false);
						this.isPlayer1Ready = true;
						this.playerReady();
						break;
					case 'KeyW':
						this.txt_player1_info.setVisible(false);
						this.isPlayer1Ready = true;
						this.playerReady();
						break;
					case 'KeyS':
						this.txt_player1_info.setVisible(false);
						this.isPlayer1Ready = true;
						this.playerReady();
						break;
				}
			}
			if (!this.isPlayer2Ready) {
				switch (event.code) {
					case 'ArrowLeft':
						this.txt_player2_info.setVisible(false);
						this.isPlayer2Ready = true;
						this.playerReady();
						break;
					case 'ArrowRight':
						this.txt_player2_info.setVisible(false);
						this.isPlayer2Ready = true;
						this.playerReady();
						break;
					case 'ArrowUp':
						this.txt_player2_info.setVisible(false);
						this.isPlayer2Ready = true;
						this.playerReady();
						break;
					case 'ArrowDown':
						this.txt_player2_info.setVisible(false);
						this.isPlayer2Ready = true;
						this.playerReady();
						break;
				}
			}
		})

	}

	playerReady() {
		if (this.isPlayer1Ready && this.isPlayer2Ready) {
			// Add Game Start Timer
			let tempTimeCounter = this.oGameManager.gameStartCounter;
			this.txtPlayer1ScoreCard.setText(tempTimeCounter);
			this.txtPlayer2ScoreCard.setText(tempTimeCounter);

			tempTimeCounter--;
			this.tempGameTimer = setInterval(() => {
				this.txtPlayer1ScoreCard.setText(tempTimeCounter);
				this.txtPlayer2ScoreCard.setText(tempTimeCounter);
				tempTimeCounter--;
				if (tempTimeCounter < -1) {
					this.isGameStart = true;
					this.oSoundManager.soundPlay(this.oSoundManager.whistleSound, false)

					// Destroy Controller Image
					this.intial_game_ball.destroy();
					this.player1_controller.destroy();
					this.player2_controller.destroy();

					clearInterval(this.tempGameTimer);
					this.gameStart();
				}
				this.oSoundManager.soundPlay(this.oSoundManager.timerSound, false);
			}, 1000)
		}

	}

	gameStart() {

		// set Game Data
		this.score = {
			player1Score: 0,
			player2Score: 0
		}

		this.isFirstCollide = false;
		this.txtPlayer1ScoreCard.setText(this.score.player1Score);
		this.txtPlayer2ScoreCard.setText(this.score.player2Score);

		// set World Bound Size
		this.world = this.physics.world;
		this.world.setBounds(68, 68, 1784, 944);

		this.gameTimer(this.oGameManager.gameTime)
		this.playerBalls();
		this.setBall();

		this.setGoalPost();
	}

	update() {
		if (this.isGameStart) {
			this.moveBall1();
			this.moveBall2();

			if (!this.isGameOver) {

				if (!this.isBallCollide) {
					this.checkGoal();
				}

				if (!this.isTimeOver) {
					this.physics.collide(this.player1Ball, this.ball, () => {
						this.isFirstCollide = true;
						if (Math.abs(this.player1Ball.body.velocity.x.toFixed(0)) > 200 || Math.abs(this.ball.body.velocity.x.toFixed(0)) > 200) {
							if (!this.isGameOver) {
								if (!this.isGamePause) {
									this.oSoundManager.soundPlay(this.oSoundManager.ballBounceSound, false);
								}
							}
							this.ballBounceAnimation(this.player1Ball, "x")
							this.ballBounceAnimation(this.ball, "x")
						}
						if (Math.abs(this.player1Ball.body.velocity.y.toFixed(0)) > 200 || Math.abs(this.ball.body.velocity.y.toFixed(0)) > 200) {
							if (!this.isGameOver) {
								if (!this.isGamePause) {
									this.oSoundManager.soundPlay(this.oSoundManager.ballBounceSound, false);
								}
							}
							this.ballBounceAnimation(this.player1Ball, "y")
							this.ballBounceAnimation(this.ball, "y")
						}
					})
					this.physics.collide(this.player2Ball, this.ball, () => {
						this.isFirstCollide = true;
						if (Math.abs(this.player2Ball.body.velocity.x.toFixed(0)) > 200 || Math.abs(this.ball.body.velocity.x.toFixed(0)) > 200) {
							if (!this.isGameOver) {
								if (!this.isGamePause) {
									this.oSoundManager.soundPlay(this.oSoundManager.ballBounceSound, false);
								}
							}
							this.ballBounceAnimation(this.player2Ball, "x")
							this.ballBounceAnimation(this.ball, "x")
						}
						if (Math.abs(this.player2Ball.body.velocity.y.toFixed(0)) > 200 || Math.abs(this.ball.body.velocity.y.toFixed(0)) > 200) {
							if (!this.isGameOver) {
								if (!this.isGamePause) {
									this.oSoundManager.soundPlay(this.oSoundManager.ballBounceSound, false);
								}
							}
							this.ballBounceAnimation(this.player2Ball, "y")
							this.ballBounceAnimation(this.ball, "y")
						}
					})

					this.physics.collide(this.player1Ball, this.player2Ball, () => {
						if (Math.abs(this.player1Ball.body.velocity.x.toFixed(0)) > 200 || Math.abs(this.player2Ball.body.velocity.x.toFixed(0)) > 200) {
							this.ballBounceAnimation(this.player1Ball, "x")
							this.ballBounceAnimation(this.player2Ball, "x")
						}
						if (Math.abs(this.player1Ball.body.velocity.y.toFixed(0)) > 200 || Math.abs(this.player2Ball.body.velocity.y.toFixed(0)) > 200) {
							this.ballBounceAnimation(this.player1Ball, "y")
							this.ballBounceAnimation(this.player2Ball, "y")
						}
					})

					if ((Math.abs(this.ball.body.velocity.x > 700) || Math.abs(this.ball.body.velocity.y > 700)) && this.isFirstCollide) {
						// if ((Math.abs(this.ball.body.velocity.x > 100) || Math.abs(this.ball.body.velocity.y > 100)) && this.isFirstCollide) {
						this.ballParticle();
					}
					else {
						if (this.ballParticles !== undefined) {
							this.container_ball_particles.getAll().forEach(items => {
								items.destroy();
							})
							this.emitter.stop();
						}
					}
				}
			}
		}
	}

	playerBalls() {
		let tempPlayer1BallColor = this.oGameManager.player1Color + "_ball";
		this.player1Ball = this.physics.add.image(this.oGameManager.ballInfo.player1Ball.x, this.oGameManager.ballInfo.player1Ball.y, tempPlayer1BallColor).setCircle(52, 0, 0).setCollideWorldBounds(true);
		this.player1Ball.setImmovable(false);
		this.player1Ball.setScale(this.oGameManager.ballInfo.player1Ball.scale)
		this.player1Ball.setBounce(this.oGameManager.ballInfo.player1Ball.bounce);
		this.player1Ball.setMass(this.oGameManager.ballInfo.player1Ball.mass);
		this.player1Ball.setMaxVelocity(this.oGameManager.ballInfo.player1Ball.maxVelocity);
		this.container_game_play.add(this.player1Ball)

		this.player1Ball.body.onWorldBounds = true;
		this.physics.world.on('worldbounds', (body, up, down, left, right) => {
			if (body.gameObject === this.player1Ball) {
				if (Math.abs(this.player1Ball.body.velocity.y.toFixed(0)) > 200) {
					if (down || up) {
						this.ballBounceAnimation(this.player1Ball, "y")
					}
				}
				if (Math.abs(this.player1Ball.body.velocity.x.toFixed(0)) > 200) {
					if (left || right) {
						this.ballBounceAnimation(this.player1Ball, "x")
					}
				}
			}
		});

		let tempPlayer2BallColor = this.oGameManager.player2Color + "_ball";
		this.player2Ball = this.physics.add.image(this.oGameManager.ballInfo.player2Ball.x, this.oGameManager.ballInfo.player2Ball.y, tempPlayer2BallColor).setCircle(52, 0, 0).setCollideWorldBounds(true);
		this.player2Ball.setImmovable(false)
		this.player2Ball.setScale(this.oGameManager.ballInfo.player2Ball.scale)
		this.player2Ball.setBounce(this.oGameManager.ballInfo.player2Ball.bounce);
		this.player2Ball.setMass(this.oGameManager.ballInfo.player2Ball.mass);
		this.player2Ball.setMaxVelocity(this.oGameManager.ballInfo.player2Ball.maxVelocity);
		this.container_game_play.add(this.player2Ball)

		this.player2Ball.body.onWorldBounds = true;
		this.physics.world.on('worldbounds', (body, up, down, left, right) => {
			if (body.gameObject === this.player2Ball) {
				if (Math.abs(this.player2Ball.body.velocity.y.toFixed(0)) > 200) {
					if (down || up) {
						// ball bounce sound
						this.ballBounceAnimation(this.player2Ball, "y")
					}
				}
				if (Math.abs(this.player2Ball.body.velocity.x.toFixed(0)) > 200) {
					if (left || right) {
						this.ballBounceAnimation(this.player2Ball, "x")
					}
				}
			}
		});
		// this.physics.add.collider(this.player1Ball, this.player2Ball);
	}

	setBall() {
		this.ball = this.physics.add.image(this.oGameManager.ballInfo.mainBall.x, this.oGameManager.ballInfo.mainBall.y, "game_ball").setCircle(30, 2, 2).setCollideWorldBounds(true);
		this.ball.setImmovable(false)
		this.ball.setScale(this.oGameManager.ballInfo.mainBall.scale)
		this.ball.setBounce(this.oGameManager.ballInfo.mainBall.bounce);
		this.ball.setMass(this.oGameManager.ballInfo.mainBall.mass);
		this.ball.setMaxVelocity(this.oGameManager.ballInfo.mainBall.maxVelocity);
		this.container_game_play.add(this.ball)

		this.container_ball_particles.setVisible(true);

		this.ball.body.onWorldBounds = true;
		this.physics.world.on('worldbounds', (body, up, down, left, right) => {
			if (body.gameObject === this.ball) {
				if (Math.abs(this.ball.body.velocity.y.toFixed(0)) > 200) {
					if (down || up) {
						// ball bounce sound
						if (!this.isGameOver) {
							if (!this.isGamePause) {
								this.oSoundManager.soundPlay(this.oSoundManager.ballBounceSound, false);
							}
						}
						this.ballBounceAnimation(this.ball, "y")
					}
				}
				if (Math.abs(this.ball.body.velocity.x.toFixed(0)) > 200) {
					if (left || right) {
						this.ballBounceAnimation(this.ball, "x")
					}
				}
			}
		});

		// this.physics.add.collider(this.player1Ball, this.ball);
		// this.physics.add.collider(this.player2Ball, this.ball);

	}

	ballBounceAnimation(ball, scale) {
		switch (scale) {
			case "x":
				this.tweens.add({
					targets: ball,
					scaleX: { from: 1, to: 0.85 },
					duration: 70,
					yoyo: true
				})
				break;
			case "y":
				this.tweens.add({
					targets: ball,
					scaleY: { from: 1, to: 0.7 },
					duration: 70,
					yoyo: true
				})
				break;
		}
	}

	moveBall1() {
		if (this.player1Ball.body !== undefined) {
			this.input.keyboard.on('keydown', (event) => {
				switch (event.code) {
					case 'KeyA':
						this.player1Ball.body.setAccelerationX(-this.oGameManager.ballInfo.player1Ball.accelerationX);
						break;
					case 'KeyD':
						this.player1Ball.body.setAccelerationX(this.oGameManager.ballInfo.player1Ball.accelerationX);
						break;
					case 'KeyW':
						this.player1Ball.body.setAccelerationY(-this.oGameManager.ballInfo.player1Ball.accelerationY);
						break;
					case 'KeyS':
						this.player1Ball.body.setAccelerationY(this.oGameManager.ballInfo.player1Ball.accelerationY);
						break;
				}
			})
			this.input.keyboard.on('keyup', (event) => {
				switch (event.code) {
					case 'KeyA':
						this.player1Ball.body.setAccelerationX(0);
						break;
					case 'KeyD':
						this.player1Ball.body.setAccelerationX(0);
						break;
					case 'KeyW':
						this.player1Ball.body.setAccelerationY(0);
						break;
					case 'KeyS':
						this.player1Ball.body.setAccelerationY(0);
						break;
				}
			});
		}
	}

	moveBall2() {
		if (this.player2Ball !== undefined) {
			this.input.keyboard.on('keydown', (event) => {
				switch (event.code) {
					case 'ArrowLeft':
						this.player2Ball.body.setAccelerationX(-this.oGameManager.ballInfo.player2Ball.accelerationX);
						break;
					case 'ArrowRight':
						this.player2Ball.body.setAccelerationX(this.oGameManager.ballInfo.player2Ball.accelerationX);
						break;
					case 'ArrowUp':
						this.player2Ball.body.setAccelerationY(-this.oGameManager.ballInfo.player2Ball.accelerationY);
						break;
					case 'ArrowDown':
						this.player2Ball.body.setAccelerationY(this.oGameManager.ballInfo.player2Ball.accelerationY);
						break;
				}
			});
			this.input.keyboard.on('keyup', (event) => {
				switch (event.code) {
					case 'ArrowLeft':
						this.player2Ball.body.setAccelerationX(0);
						break;
					case 'ArrowRight':
						this.player2Ball.body.setAccelerationX(0);
						break;
					case 'ArrowUp':
						this.player2Ball.body.setAccelerationY(0);
						break;
					case 'ArrowDown':
						this.player2Ball.body.setAccelerationY(0);
						break;
				}
			});
		}
	}

	setGoalPost() {
		this.player1GoalPost = this.physics.add.image(1855, 540, "goal_post");
		this.player1GoalPost.body.setImmovable(true);
		this.player1GoalPost.body.setAllowGravity(false);
		this.container_game_play.add(this.player1GoalPost)

		this.player2GoalPost = this.physics.add.image(65, 540, "goal_post");
		this.player2GoalPost.body.setImmovable(true);
		this.player2GoalPost.body.setAllowGravity(false);
		this.container_game_play.add(this.player2GoalPost)
	}

	checkGoal() {
		this.physics.collide(this.player1GoalPost, this.ball, () => {
			if (!this.isGameOver) {
				this.oSoundManager.soundPlay(this.oSoundManager.goalSound, false);
			}
			this.isBallCollide = true
			this.isFirstCollide = false;
			this.score.player1Score += 1
			this.txtPlayer1ScoreCard.setText(this.score.player1Score);
			this.setGoalAnimation(this.ball.x, this.ball.y, 'right');
			this.checkGameStatus();
		})
		this.physics.collide(this.player2GoalPost, this.ball, () => {
			if (!this.isGameOver) {
				this.oSoundManager.soundPlay(this.oSoundManager.goalSound, false);
			}
			this.isBallCollide = true
			this.isFirstCollide = false;
			this.score.player2Score += 1
			this.txtPlayer2ScoreCard.setText(this.score.player2Score);
			this.setGoalAnimation(this.ball.x, this.ball.y, 'left')
			this.checkGameStatus();
		})
	}

	setGoalAnimation(ballX, ballY, direction) {
		// goal sound here
		let temp
		switch (direction) {
			case 'left':
				temp = 25;
				break;
			case 'right':
				temp = 1895;
				break;
		}

		this.container_ball_particles.setVisible(false);

		let tempBall = this.add.image(ballX, ballY, "game_ball").setScale(this.oGameManager.ballInfo.mainBall.scale);
		this.container_game_play.add(tempBall);

		this.tweens.add({
			targets: tempBall,
			x: { from: ballX, to: temp },
			y: 540,
			duration: 150,
			scaleX: { from: this.ball.scaleX, to: 0.1 },
			scaleY: { from: this.ball.scaleY, to: 0.1 },
			onComplete: () => {
				tempBall.destroy();
			}
		})
	}

	ballParticle() {
		this.ballParticles = this.add.particles('ballParticleImage');
		this.container_ball_particles.add(this.ballParticles);
		// Create the firework emitter
		this.emitter = this.ballParticles.createEmitter({
			x: this.ball.x,
			y: this.ball.y,
			// speed: { min: -10, max: 10 },
			angle: { min: 0, max: 360 },
			scale: { start: 0.8, end: 0 },
			frequency: 1,
			lifespan: 250,
		});
		this.emitter.startFollow(this.ball)
		this.emitter.stop();

		// Position the this.emitter where you want the firework to explode
		this.emitter.setPosition(this.ball.x, this.ball.y);
		// Explode once
		this.emitter.explode(100, this.ball.x, this.ball.y);
	}

	ballDestroy() {

		this.isGamePause = true;

		this.ball.setVisible(false);
		this.player1Ball.setVisible(false);
		this.player2Ball.setVisible(false);
		let tempTime = 3

		// set time at score card
		this.txtPlayer1ScoreCard.setText(tempTime);
		this.txtPlayer2ScoreCard.setText(tempTime);

		if (!this.isTimeOver) {

			// display temp ball
			let tempPlayer1BallColor = this.oGameManager.player1Color + "_ball";
			let tempPlayer2BallColor = this.oGameManager.player2Color + "_ball";

			this.tempOwnBall = this.add.image(this.oGameManager.ballInfo.player1Ball.x, this.oGameManager.ballInfo.player1Ball.y, tempPlayer1BallColor).setScale(this.oGameManager.ballInfo.player1Ball.scale)
			this.tempOppoBall = this.add.image(this.oGameManager.ballInfo.player2Ball.x, this.oGameManager.ballInfo.player2Ball.y, tempPlayer2BallColor).setScale(this.oGameManager.ballInfo.player2Ball.scale)
			this.tempMainBall = this.add.image(this.oGameManager.ballInfo.mainBall.x, this.oGameManager.ballInfo.mainBall.y, "game_ball").setScale(this.oGameManager.ballInfo.mainBall.scale)

			this.timeInterval1 = setInterval(() => {
				this.txtPlayer1ScoreCard.setText(tempTime);
				this.txtPlayer2ScoreCard.setText(tempTime);
				tempTime--

				if (tempTime < -1) {
					clearInterval(this.timeInterval1);
					this.isGamePause = false;
					// set Score
					this.txtPlayer1ScoreCard.setText(this.score.player1Score);
					this.txtPlayer2ScoreCard.setText(this.score.player2Score);
					this.oSoundManager.soundPlay(this.oSoundManager.whistleSound, false);

					// set New Body
					this.ball.destroy();
					this.player1Ball.destroy();
					this.player2Ball.destroy();
					this.playerBalls();
					this.setBall();

					// destroy tempBall
					this.tempOwnBall.destroy();
					this.tempOppoBall.destroy();
					this.tempMainBall.destroy();

					this.isBallCollide = false;
				}
				this.oSoundManager.soundPlay(this.oSoundManager.timerSound, false);
			}, 1000);
		}
	}

	gameTimer(duration) {
		let timer = duration, minutes, seconds;

		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		this.txtTimer.setText(`${minutes}.${seconds}`)

		timer--;

		this.timeInterval = setInterval(() => {

			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			this.txtTimer.setText(`${minutes}.${seconds}`)

			if (--timer < -1) {
				timer = duration;
			}

			if (timer < 0) {
				clearInterval(this.timeInterval);
				this.isTimeOver = true;
				this.checkGameStatus();
			}
		}, 1000);
	}

	checkGameStatus() {
		if (this.isTimeOver) {
			this.gameOver();
		}
		this.ballDestroy();
	}

	gameOver() {
		this.isGameOver = true;

		this.oSoundManager.toggleMute(this.oSoundManager.ballBounceSound, true);
		this.oSoundManager.toggleMute(this.oSoundManager.timerSound, true);
		this.oSoundManager.toggleMute(this.oSoundManager.whistleSound, true);

		this.oSoundManager.soundPlay(this.oSoundManager.winnerSound, false);

		if (this.tempMainBall !== undefined && this.tempOppoBall !== undefined && this.tempOwnBall !== undefined) {
			this.tempOwnBall.setVisible(false)
			this.tempOppoBall.setVisible(false)
			this.tempMainBall.setVisible(false)
		}

		this.container_gameover_popup.setVisible(true);
		this.container_game_play.setVisible(false);

		this.txtPlayer1FinalScore.setText(this.score.player1Score);
		this.txtPlayer2FinalScore.setText(this.score.player2Score);

		if (this.score.player1Score > this.score.player2Score) {
			this.addConfetti('player1');
			this.txtWinner.setText('Player 1 was victorious!')
		}
		else if (this.score.player1Score < this.score.player2Score) {
			this.addConfetti('player2');
			this.txtWinner.setText('Player 2 was victorious!')
		}
		else {
			this.txtWinner.setText('Game Tie !')
		}

	}

	addConfetti(player) {

		let end = Date.now() + (10 * 100);

		// go Buckeyes!
		let colors = [this.oGameManager.player1Color, this.oGameManager.player2Color];

		(function frame() {
			confetti({
				particleCount: 2,
				angle: player === 'player1' ? 60 : 120,
				spread: 70,
				origin: { x: player === 'player1' ? 0 : 1 },
				shapes: ["image"],
				shapeOptions: {
					image: [{
						src: `./assets/images/game-play/${colors[0]}/${colors[0]}_ball.png`,
						width: 32,
						height: 32,
					},
					{
						src: `./assets/images/game-play/${colors[1]}/${colors[1]}_ball.png`,
						width: 32,
						height: 32,
					}],
				},
			});

			if (Date.now() < end) {
				requestAnimationFrame(frame);
			}
		}());

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
