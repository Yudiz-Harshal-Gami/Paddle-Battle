
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

		// container_bound
		const container_bound = this.add.container(0, 0);

		// left_bound
		const left_bound = this.add.rectangle(1, 540, 1, 1080);
		left_bound.setOrigin(1, 0.5);
		left_bound.isFilled = true;
		container_bound.add(left_bound);

		// top_bound
		const top_bound = this.add.rectangle(960, 1, 1920, 1);
		top_bound.setOrigin(0.5, 1);
		top_bound.isFilled = true;
		container_bound.add(top_bound);

		// right_bound
		const right_bound = this.add.rectangle(1919, 540, 1, 1080);
		right_bound.setOrigin(0, 0.5);
		right_bound.isFilled = true;
		container_bound.add(right_bound);

		// bottom_bound
		const bottom_bound = this.add.rectangle(960, 1080, 1920, 1);
		bottom_bound.setOrigin(0.5, 1);
		bottom_bound.isFilled = true;
		container_bound.add(bottom_bound);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(30, 30, 1860, 1020);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isStroked = true;

		// txtOwnScoreCard
		const txtOwnScoreCard = this.add.text(400, 342, "", {});
		txtOwnScoreCard.setOrigin(0.5, 0.5);
		txtOwnScoreCard.text = "0";
		txtOwnScoreCard.setStyle({ "fontSize": "45px" });

		// txtOppoScoreCard
		const txtOppoScoreCard = this.add.text(1520, 342, "", {});
		txtOppoScoreCard.setOrigin(0.5, 0.5);
		txtOppoScoreCard.text = "0";
		txtOppoScoreCard.setStyle({ "fontSize": "45px" });

		this.container_bound = container_bound;
		this.left_bound = left_bound;
		this.top_bound = top_bound;
		this.right_bound = right_bound;
		this.bottom_bound = bottom_bound;
		this.txtOwnScoreCard = txtOwnScoreCard;
		this.txtOppoScoreCard = txtOppoScoreCard;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_bound;
	/** @type {Phaser.GameObjects.Rectangle} */
	left_bound;
	/** @type {Phaser.GameObjects.Rectangle} */
	top_bound;
	/** @type {Phaser.GameObjects.Rectangle} */
	right_bound;
	/** @type {Phaser.GameObjects.Rectangle} */
	bottom_bound;
	/** @type {Phaser.GameObjects.Text} */
	txtOwnScoreCard;
	/** @type {Phaser.GameObjects.Text} */
	txtOppoScoreCard;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.oGameManager = new GameManager(this);

		// set Game Data
		this.score = {
			ownScore: 0,
			oppoScore: 0
		}

		this.isBallCollide = false

		this.txtOwnScoreCard.setText(this.score.ownScore);
		this.txtOppoScoreCard.setText(this.score.oppoScore);

		// set World Bound Size
		this.world = this.physics.world;
		this.world.setBounds(30, 30, 1860, 1020);

		this.playerBalls();
		this.moveBall1();
		this.moveBall2();
		this.setBall();
		this.setGoalPost();

	}

	update() {
		if (!this.isBallCollide) {
			this.checkGoal();
		}
	}

	setGoalPost() {
		this.ownPlayerGoalPost = this.physics.add.image(1912, 540, "goalPost");
		this.ownPlayerGoalPost.body.setImmovable(true);
		this.ownPlayerGoalPost.body.setAllowGravity(false);

		this.oppoPlayerGoalPost = this.physics.add.image(8, 540, "goalPost");
		this.oppoPlayerGoalPost.body.setImmovable(true);
		this.oppoPlayerGoalPost.body.setAllowGravity(false);
	}

	checkGoal() {
		this.physics.collide(this.ownPlayerGoalPost, this.ball, () => {
			this.isBallCollide = true
			this.score.ownScore += 1
			this.txtOwnScoreCard.setText(this.score.ownScore);
			this.ballDestroy();
			this.setGoalAnimation(this.ball.x, this.ball.y, 'right')
		})
		this.physics.collide(this.oppoPlayerGoalPost, this.ball, () => {
			this.isBallCollide = true
			this.score.oppoScore += 1
			this.txtOppoScoreCard.setText(this.score.oppoScore);
			this.setGoalAnimation(this.ball.x, this.ball.y, 'left')
			this.ballDestroy();
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

		let tempBall = this.add.image(ballX, ballY, "gray_ball").setScale(this.oGameManager.ballInfo.mainBall.scale)

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
		this.ball.destroy();
		this.ownPlayerBall.setVisible(false);
		this.oppoPlayerBall.setVisible(false);
		let tempTime = 5

		// set time at score card
		this.txtOwnScoreCard.setText(tempTime);
		this.txtOppoScoreCard.setText(tempTime);

		// display temp ball
		let tempOwnBall = this.add.image(this.oGameManager.ballInfo.ownPlayerBall.x, this.oGameManager.ballInfo.ownPlayerBall.y, "blue_ball").setScale(this.oGameManager.ballInfo.ownPlayerBall.scale)
		let tempOppoBall = this.add.image(this.oGameManager.ballInfo.oppoPlayerBall.x, this.oGameManager.ballInfo.oppoPlayerBall.y, "red_ball").setScale(this.oGameManager.ballInfo.oppoPlayerBall.scale)
		let tempMainBall = this.add.image(this.oGameManager.ballInfo.mainBall.x, this.oGameManager.ballInfo.mainBall.y, "gray_ball").setScale(this.oGameManager.ballInfo.mainBall.scale)


		let timeInterval = setInterval(() => {
			this.txtOwnScoreCard.setText(tempTime);
			this.txtOppoScoreCard.setText(tempTime);
			tempTime--
			if (tempTime < 0) {
				clearTimeout(timeInterval);
				// set Score
				this.txtOwnScoreCard.setText(this.score.ownScore);
				this.txtOppoScoreCard.setText(this.score.oppoScore);

				// set New Body
				this.ownPlayerBall.destroy();
				this.oppoPlayerBall.destroy();
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

	playerBalls() {
		this.ownPlayerBall = this.physics.add.image(this.oGameManager.ballInfo.ownPlayerBall.x, this.oGameManager.ballInfo.ownPlayerBall.y, "blue_ball").setCircle(54, 0, 0).setCollideWorldBounds(true);
		this.ownPlayerBall.setImmovable(false);
		this.ownPlayerBall.setScale(this.oGameManager.ballInfo.ownPlayerBall.scale)
		this.ownPlayerBall.setBounce(this.oGameManager.ballInfo.ownPlayerBall.bounce);
		this.ownPlayerBall.setMass(this.oGameManager.ballInfo.ownPlayerBall.mass);
		this.ownPlayerBall.setMaxVelocity(this.oGameManager.ballInfo.ownPlayerBall.maxVelocity);

		this.oppoPlayerBall = this.physics.add.image(this.oGameManager.ballInfo.oppoPlayerBall.x, this.oGameManager.ballInfo.oppoPlayerBall.y, "red_ball").setCircle(54, 0, 0).setCollideWorldBounds(true);
		this.oppoPlayerBall.setImmovable(false)
		this.oppoPlayerBall.setScale(this.oGameManager.ballInfo.oppoPlayerBall.scale)
		this.oppoPlayerBall.setBounce(this.oGameManager.ballInfo.oppoPlayerBall.bounce);
		this.oppoPlayerBall.setMass(this.oGameManager.ballInfo.oppoPlayerBall.mass);
		this.oppoPlayerBall.setMaxVelocity(this.oGameManager.ballInfo.oppoPlayerBall.maxVelocity);

		this.physics.add.collider(this.ownPlayerBall, this.oppoPlayerBall);
	}

	setBall() {
		this.ball = this.physics.add.image(this.oGameManager.ballInfo.mainBall.x, this.oGameManager.ballInfo.mainBall.y, "gray_ball").setCircle(54, 0, 0).setCollideWorldBounds(true);
		this.ball.setImmovable(false)
		this.ball.setScale(this.oGameManager.ballInfo.mainBall.scale)
		this.ball.setBounce(this.oGameManager.ballInfo.mainBall.bounce);
		this.ball.setMass(this.oGameManager.ballInfo.mainBall.mass);
		this.ball.setMaxVelocity(this.oGameManager.ballInfo.mainBall.maxVelocity);

		this.physics.add.collider(this.ownPlayerBall, this.ball);
		this.physics.add.collider(this.oppoPlayerBall, this.ball);
	}

	moveBall1() {
		if (this.ownPlayerBall.body !== undefined) {
			this.input.keyboard.on('keydown-A', () => {
				this.ownPlayerBall.body.setAccelerationX(-500);
			});
			this.input.keyboard.on('keyup-A', () => {
				this.ownPlayerBall.body.setAccelerationX(0);
			});
			this.input.keyboard.on('keydown-D', () => {
				this.ownPlayerBall.body.setAccelerationX(500);
			});
			this.input.keyboard.on('keyup-D', () => {
				this.ownPlayerBall.body.setAccelerationX(0);
			});
			this.input.keyboard.on('keydown-W', () => {
				this.ownPlayerBall.body.setAccelerationY(-1000);
			});
			this.input.keyboard.on('keyup-W', () => {
				this.ownPlayerBall.body.setAccelerationY(0);
			});
			this.input.keyboard.on('keydown-S', () => {
				this.ownPlayerBall.body.setAccelerationY(1000);
			});
			this.input.keyboard.on('keyup-S', () => {
				this.ownPlayerBall.body.setAccelerationY(0);
			});
		}
	}
	moveBall2() {
		if (this.oppoPlayerBall !== undefined) {
			this.input.keyboard.on('keydown', (event) => {
				switch (event.code) {
					case 'ArrowLeft':
						this.oppoPlayerBall.body.setAccelerationX(-500);
						break;
					case 'ArrowRight':
						this.oppoPlayerBall.body.setAccelerationX(500);
						break;
					case 'ArrowUp':
						this.oppoPlayerBall.body.setAccelerationY(-1000);
						break;
					case 'ArrowDown':
						this.oppoPlayerBall.body.setAccelerationY(1000);
						break;
				}
			});
			this.input.keyboard.on('keyup', (event) => {
				switch (event.code) {
					case 'ArrowLeft':
						this.oppoPlayerBall.body.setAccelerationX(0);
						break;
					case 'ArrowRight':
						this.oppoPlayerBall.body.setAccelerationX(0);
						break;
					case 'ArrowUp':
						this.oppoPlayerBall.body.setAccelerationY(0);
						break;
					case 'ArrowDown':
						this.oppoPlayerBall.body.setAccelerationY(0);
						break;
				}
			});
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
