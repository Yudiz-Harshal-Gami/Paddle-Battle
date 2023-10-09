
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

		// rectangle_1
		const rectangle_1 = this.add.rectangle(30, 30, 1860, 1020);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isStroked = true;

		// txtPlayer1ScoreCard
		const txtPlayer1ScoreCard = this.add.text(400, 342, "", {});
		txtPlayer1ScoreCard.setOrigin(0.5, 0.5);
		txtPlayer1ScoreCard.setStyle({ "fontSize": "45px" });

		// txtPlayer2ScoreCard
		const txtPlayer2ScoreCard = this.add.text(1520, 342, "", {});
		txtPlayer2ScoreCard.setOrigin(0.5, 0.5);
		txtPlayer2ScoreCard.setStyle({ "fontSize": "45px" });

		// txtTimer
		const txtTimer = this.add.text(960, 84, "", {});
		txtTimer.setOrigin(0.5, 0.5);
		txtTimer.setStyle({ "fontSize": "30px" });

		// container_gameover_popup
		const container_gameover_popup = this.add.container(0, 0);
		container_gameover_popup.visible = false;

		// txtWinner
		const txtWinner = this.add.text(960, 540, "", {});
		txtWinner.setOrigin(0.5, 0.5);
		txtWinner.setStyle({ "fontSize": "45px" });
		container_gameover_popup.add(txtWinner);

		this.txtPlayer1ScoreCard = txtPlayer1ScoreCard;
		this.txtPlayer2ScoreCard = txtPlayer2ScoreCard;
		this.txtTimer = txtTimer;
		this.container_gameover_popup = container_gameover_popup;
		this.txtWinner = txtWinner;

		this.events.emit("scene-awake");
	}

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

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.oGameManager = new GameManager(this);

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
		this.world.setBounds(30, 30, 1860, 1020);

		this.gameTimer(120)
		this.playerBalls();
		this.setBall();
		this.moveBall1();
		this.moveBall2();
		this.setGoalPost();

	}

	update() {
		if (!this.isBallCollide && !this.isGameOver) {
			this.checkGoal();
		}
	}

	playerBalls() {
		this.player1Ball = this.physics.add.image(this.oGameManager.ballInfo.player1Ball.x, this.oGameManager.ballInfo.player1Ball.y, "blue_ball").setCircle(54, 0, 0).setCollideWorldBounds(true);
		this.player1Ball.setImmovable(false);
		this.player1Ball.setScale(this.oGameManager.ballInfo.player1Ball.scale)
		this.player1Ball.setBounce(this.oGameManager.ballInfo.player1Ball.bounce);
		this.player1Ball.setMass(this.oGameManager.ballInfo.player1Ball.mass);
		this.player1Ball.setMaxVelocity(this.oGameManager.ballInfo.player1Ball.maxVelocity);

		this.player2Ball = this.physics.add.image(this.oGameManager.ballInfo.player2Ball.x, this.oGameManager.ballInfo.player2Ball.y, "red_ball").setCircle(54, 0, 0).setCollideWorldBounds(true);
		this.player2Ball.setImmovable(false)
		this.player2Ball.setScale(this.oGameManager.ballInfo.player2Ball.scale)
		this.player2Ball.setBounce(this.oGameManager.ballInfo.player2Ball.bounce);
		this.player2Ball.setMass(this.oGameManager.ballInfo.player2Ball.mass);
		this.player2Ball.setMaxVelocity(this.oGameManager.ballInfo.player2Ball.maxVelocity);

		this.physics.add.collider(this.player1Ball, this.player2Ball);
	}

	setBall() {
		this.ball = this.physics.add.image(this.oGameManager.ballInfo.mainBall.x, this.oGameManager.ballInfo.mainBall.y, "gray_ball").setCircle(54, 0, 0).setCollideWorldBounds(true);
		this.ball.setImmovable(false)
		this.ball.setScale(this.oGameManager.ballInfo.mainBall.scale)
		this.ball.setBounce(this.oGameManager.ballInfo.mainBall.bounce);
		this.ball.setMass(this.oGameManager.ballInfo.mainBall.mass);
		this.ball.setMaxVelocity(this.oGameManager.ballInfo.mainBall.maxVelocity);

		this.physics.add.collider(this.player1Ball, this.ball);
		this.physics.add.collider(this.player2Ball, this.ball);
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
		this.player1GoalPost = this.physics.add.image(1912, 540, "goalPost");
		this.player1GoalPost.body.setImmovable(true);
		this.player1GoalPost.body.setAllowGravity(false);

		this.player2GoalPost = this.physics.add.image(8, 540, "goalPost");
		this.player2GoalPost.body.setImmovable(true);
		this.player2GoalPost.body.setAllowGravity(false);
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
		let temp
		switch (direction) {
			case 'left':
				temp = -100;
				break;
			case 'right':
				temp = 100;
				break;
		}

		let tempBall = this.add.image(ballX, ballY, "gray_ball").setScale(this.oGameManager.ballInfo.mainBall.scale);

		this.tweens.add({
			targets: tempBall,
			x: ballX + temp,
			y: ballY,
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
			let tempOwnBall = this.add.image(this.oGameManager.ballInfo.player1Ball.x, this.oGameManager.ballInfo.player1Ball.y, "blue_ball").setScale(this.oGameManager.ballInfo.player1Ball.scale)
			let tempOppoBall = this.add.image(this.oGameManager.ballInfo.player2Ball.x, this.oGameManager.ballInfo.player2Ball.y, "red_ball").setScale(this.oGameManager.ballInfo.player2Ball.scale)
			let tempMainBall = this.add.image(this.oGameManager.ballInfo.mainBall.x, this.oGameManager.ballInfo.mainBall.y, "gray_ball").setScale(this.oGameManager.ballInfo.mainBall.scale)

			let timeInterval = setInterval(() => {
				this.txtPlayer1ScoreCard.setText(tempTime);
				this.txtPlayer2ScoreCard.setText(tempTime);
				tempTime--

				if (this.isTimeOver) {
					clearTimeout(timeInterval);
					this.ball.setVisible(false);
					this.player1Ball.setVisible(false);
					this.player2Ball.setVisible(false);

					tempOwnBall.destroy();
					tempOppoBall.destroy();
					tempMainBall.destroy();

					this.gameOver();
				}

				if (tempTime < 0) {
					clearTimeout(timeInterval);
					// set Score
					this.txtPlayer1ScoreCard.setText(this.score.player1Score);
					this.txtPlayer2ScoreCard.setText(this.score.player2Score);

					// set New Body
					this.ball.destroy();
					this.player1Ball.destroy();
					this.player2Ball.destroy();
					this.playerBalls();
					this.setBall();

					// destroy tempBall
					tempOwnBall.destroy();
					tempOppoBall.destroy();
					tempMainBall.destroy();

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

		this.txtPlayer2ScoreCard.setVisible(false);
		this.txtPlayer1ScoreCard.setVisible(false);

		this.container_gameover_popup.setVisible(true);

		if (this.score.player1Score > this.score.player2Score) {
			this.txtWinner.setText('Player 1 Win')
		}
		else if (this.score.player1Score < this.score.player2Score) {
			this.txtWinner.setText('Player 2 Win')
		}
		else {
			this.txtWinner.setText('Tie')
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
