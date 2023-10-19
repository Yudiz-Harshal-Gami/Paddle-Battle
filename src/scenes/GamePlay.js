
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

		// game_background
		this.add.image(960, 540, "game_background");

		// container_game_play
		const container_game_play = this.add.container(0, 0);

		// stick
		const stick = this.add.image(960, 540, "stick");
		container_game_play.add(stick);

		// txtPlayer1ScoreCard
		const txtPlayer1ScoreCard = this.add.text(570, 540, "", {});
		txtPlayer1ScoreCard.setOrigin(0.5, 0.5);
		txtPlayer1ScoreCard.setStyle({ "color": "#610480", "fontSize": "400px" });
		container_game_play.add(txtPlayer1ScoreCard);

		// txtPlayer2ScoreCard
		const txtPlayer2ScoreCard = this.add.text(1350, 540, "", {});
		txtPlayer2ScoreCard.setOrigin(0.5, 0.5);
		txtPlayer2ScoreCard.setStyle({ "color": "#804500", "fontSize": "400px" });
		container_game_play.add(txtPlayer2ScoreCard);

		// txtTimer
		const txtTimer = this.add.text(960, 121, "", {});
		txtTimer.setOrigin(0.5, 0.5);
		txtTimer.setStyle({ "fontSize": "38px" });
		container_game_play.add(txtTimer);

		// container_gameover_popup
		const container_gameover_popup = this.add.container(0, 0);
		container_gameover_popup.visible = false;

		// black_screen
		const black_screen = this.add.image(960, 540, "black_screen");
		container_gameover_popup.add(black_screen);

		// gameover_box
		const gameover_box = this.add.image(960, 507, "gameover_box");
		container_gameover_popup.add(gameover_box);

		// txtWinner
		const txtWinner = this.add.text(960, 387, "", {});
		txtWinner.setOrigin(0.5, 0.5);
		txtWinner.setStyle({ "fontSize": "35px" });
		container_gameover_popup.add(txtWinner);

		// btnGameOver
		const btnGameOver = this.add.image(960, 836, "button");
		btnGameOver.scaleX = 0.8;
		btnGameOver.scaleY = 0.8;
		container_gameover_popup.add(btnGameOver);

		// txtGameOver
		const txtGameOver = this.add.text(960, 834, "", {});
		txtGameOver.setOrigin(0.5, 0.5);
		txtGameOver.text = "Home";
		txtGameOver.setStyle({ "color": "#ffffffff", "fontSize": "55px" });
		container_gameover_popup.add(txtGameOver);

		// txtPlayer1FinalScore
		const txtPlayer1FinalScore = this.add.text(924, 604, "", {});
		txtPlayer1FinalScore.setOrigin(1, 0.5);
		txtPlayer1FinalScore.setStyle({ "color": "#C000FF", "fontSize": "120px" });
		container_gameover_popup.add(txtPlayer1FinalScore);

		// txtPlayer2FinalScore
		const txtPlayer2FinalScore = this.add.text(996, 604, "", {});
		txtPlayer2FinalScore.setOrigin(0, 0.5);
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

		this.container_game_play = container_game_play;
		this.txtPlayer1ScoreCard = txtPlayer1ScoreCard;
		this.txtPlayer2ScoreCard = txtPlayer2ScoreCard;
		this.txtTimer = txtTimer;
		this.container_gameover_popup = container_gameover_popup;
		this.txtWinner = txtWinner;
		this.btnGameOver = btnGameOver;
		this.txtGameOver = txtGameOver;
		this.txtPlayer1FinalScore = txtPlayer1FinalScore;
		this.txtPlayer2FinalScore = txtPlayer2FinalScore;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_game_play;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayer1ScoreCard;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayer2ScoreCard;
	/** @type {Phaser.GameObjects.Text} */
	txtTimer;
	/** @type {Phaser.GameObjects.Container} */
	container_gameover_popup;
	/** @type {Phaser.GameObjects.Text} */
	txtWinner;
	/** @type {Phaser.GameObjects.Image} */
	btnGameOver;
	/** @type {Phaser.GameObjects.Text} */
	txtGameOver;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayer1FinalScore;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayer2FinalScore;

	/* START-USER-CODE */

	// Write your code here

	init(data) {
		this.soundData = data;
	}

	create() {

		this.editorCreate();

		this.oGameManager = new GameManager(this);
		this.oSoundManager = new SoundManager(this);

		this.oSoundManager.toggleSound(this.oSoundManager.soundArray, false);

		// set Game Data
		this.score = {
			player1Score: 0,
			player2Score: 0
		}

		this.isGameOver = false
		this.isTimeOver = false

		this.isBallCollide = false

		this.txtPlayer1ScoreCard.setText(this.score.player1Score);
		this.txtPlayer2ScoreCard.setText(this.score.player2Score);

		// set World Bound Size
		this.world = this.physics.world;
		this.world.setBounds(68, 68, 1784, 944);

		this.gameTimer(this.oGameManager.gameTime)
		this.playerBalls();
		this.setBall();
		this.moveBall1();
		this.moveBall2();
		this.setGoalPost();

		this.btnGameOver.setInteractive();
		this.btnGameOver.on('pointerdown', () => {
			this.scene.stop('GamePlay')
			this.scene.start('Level')
		})
		this.btnGameOver.on('pointerover', () => {
			this.pointerOverTween(this.btnGameOver, 0.8)
			this.pointerOverTween(this.txtGameOver, 1)
		})
		this.btnGameOver.on('pointerout', () => {
			this.pointerOutTween(this.btnGameOver, 0.8)
			this.pointerOutTween(this.txtGameOver, 1)
		})

	}

	update() {
		if (!this.isBallCollide && !this.isGameOver) {
			this.checkGoal();
		}
		if (!this.isGameOver && !this.isTimeOver) {

			this.physics.collide(this.player1Ball, this.ball, () => {
				if (Math.abs(this.player1Ball.body.velocity.x.toFixed(0)) > 200 || Math.abs(this.ball.body.velocity.x.toFixed(0)) > 200) {
					this.ballBounceAnimation(this.player1Ball, "x")
					this.ballBounceAnimation(this.ball, "x")
				}
				if (Math.abs(this.player1Ball.body.velocity.y.toFixed(0)) > 200 || Math.abs(this.ball.body.velocity.y.toFixed(0)) > 200) {
					this.ballBounceAnimation(this.player1Ball, "y")
					this.ballBounceAnimation(this.ball, "y")
				}
			})
			this.physics.collide(this.player2Ball, this.ball, () => {
				if (Math.abs(this.player2Ball.body.velocity.x.toFixed(0)) > 200 || Math.abs(this.ball.body.velocity.x.toFixed(0)) > 200) {
					this.ballBounceAnimation(this.player2Ball, "x")
					this.ballBounceAnimation(this.ball, "x")
				}
				if (Math.abs(this.player2Ball.body.velocity.y.toFixed(0)) > 200 || Math.abs(this.ball.body.velocity.y.toFixed(0)) > 200) {
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
		}
	}

	playerBalls() {
		this.player1Ball = this.physics.add.image(this.oGameManager.ballInfo.player1Ball.x, this.oGameManager.ballInfo.player1Ball.y, "purple_ball").setCircle(52, 0, 0).setCollideWorldBounds(true);
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
		
		this.player2Ball = this.physics.add.image(this.oGameManager.ballInfo.player2Ball.x, this.oGameManager.ballInfo.player2Ball.y, "orange_ball").setCircle(52, 0, 0).setCollideWorldBounds(true);
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
		this.ball = this.physics.add.image(this.oGameManager.ballInfo.mainBall.x, this.oGameManager.ballInfo.mainBall.y, "green_ball").setCircle(30, 2, 2).setCollideWorldBounds(true);
		this.ball.setImmovable(false)
		this.ball.setScale(this.oGameManager.ballInfo.mainBall.scale)
		this.ball.setBounce(this.oGameManager.ballInfo.mainBall.bounce);
		this.ball.setMass(this.oGameManager.ballInfo.mainBall.mass);
		this.ball.setMaxVelocity(this.oGameManager.ballInfo.mainBall.maxVelocity);
		this.container_game_play.add(this.ball)

		this.ball.body.onWorldBounds = true;
		this.physics.world.on('worldbounds', (body, up, down, left, right) => {
			if (body.gameObject === this.ball) {
				if (Math.abs(this.ball.body.velocity.y.toFixed(0)) > 200) {
					if (down || up) {
						// ball bounce sound
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
			this.isBallCollide = true
			this.score.player1Score += 1
			this.txtPlayer1ScoreCard.setText(this.score.player1Score);
			this.setGoalAnimation(this.ball.x, this.ball.y, 'right');
			this.checkGameStatus();
		})
		this.physics.collide(this.player2GoalPost, this.ball, () => {
			this.isBallCollide = true
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

		let tempBall = this.add.image(ballX, ballY, "green_ball").setScale(this.oGameManager.ballInfo.mainBall.scale);
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

	ballDestroy() {

		this.ball.setVisible(false);
		this.player1Ball.setVisible(false);
		this.player2Ball.setVisible(false);
		let tempTime = 2

		// set time at score card
		this.txtPlayer1ScoreCard.setText(tempTime);
		this.txtPlayer2ScoreCard.setText(tempTime);

		if (!this.isTimeOver) {

			// display temp ball
			this.tempOwnBall = this.add.image(this.oGameManager.ballInfo.player1Ball.x, this.oGameManager.ballInfo.player1Ball.y, "purple_ball").setScale(this.oGameManager.ballInfo.player1Ball.scale)
			this.tempOppoBall = this.add.image(this.oGameManager.ballInfo.player2Ball.x, this.oGameManager.ballInfo.player2Ball.y, "orange_ball").setScale(this.oGameManager.ballInfo.player2Ball.scale)
			this.tempMainBall = this.add.image(this.oGameManager.ballInfo.mainBall.x, this.oGameManager.ballInfo.mainBall.y, "green_ball").setScale(this.oGameManager.ballInfo.mainBall.scale)

			let timeInterval = setInterval(() => {
				this.txtPlayer1ScoreCard.setText(tempTime);
				this.txtPlayer2ScoreCard.setText(tempTime);
				tempTime--

				if (tempTime < 0) {
					clearTimeout(timeInterval);
					// set Score
					this.txtPlayer1ScoreCard.setText(this.score.player1Score);
					this.txtPlayer2ScoreCard.setText(this.score.player2Score);

					// new round whistle sound
					// this.oSoundManager.soundPlay(this.oSoundManager.whistleSound, false);

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

					this.isBallCollide = false
				}

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
			this.txtWinner.setText('Player 1 was victorious!')
		}
		else if (this.score.player1Score < this.score.player2Score) {
			this.txtWinner.setText('Player 2 was victorious!')
		}
		else {
			this.txtWinner.setText('Game Tie !')
		}

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
