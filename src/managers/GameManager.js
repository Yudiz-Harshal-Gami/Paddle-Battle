class GameManager {
    constructor(scene) {
        this.scene = scene;
        this.gameTime = 120 // in second
        this.gameStartCounter = 5
        this.randomColorArray = ['purple', 'orange', 'red', 'blue', 'yellow', 'green'];
        this.player1Color;
        this.player2Color;
        this.gameSound = true;
        this.gameMusic = true;
        this.ballInfo = {
            player1Ball: {
                x: 400,
                y: 540, // 495
                scale: 1,
                bounce: 1,
                mass: 1,
                maxVelocity: 800,
                accelerationX: 1100,
                accelerationY: 2000,
            },
            player2Ball: {
                x: 1520,
                y: 540,
                scale: 1,
                bounce: 1,
                mass: 1,
                maxVelocity: 800,
                accelerationX: 1100,
                accelerationY: 2000,
            },
            mainBall: {
                x: 960,
                y: 540,
                scale: 1,
                bounce: 1,
                mass: 0.8,
                maxVelocity: 750,
            }
        }
        this.setPlayerColor();
    }

    getRandomColor() {
        return this.randomColorArray[Math.floor(Math.random() * this.randomColorArray.length)];
    }

    setPlayerColor() {
        this.player1Color = this.getRandomColor();

        let tempColor2 = () => {
            this.player2Color = this.getRandomColor();
            if (this.player1Color === this.player2Color) {
                tempColor2();
            }
        };
        tempColor2();

    }
}