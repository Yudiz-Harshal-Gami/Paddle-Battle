class GameManager {
    constructor(scene) {
        this.scene = scene;
        this.gameTime = 120 // in second
        this.ballInfo = {
            player1Ball: {
                x: 300,
                y: 540,
                scale: 1,
                bounce: 0.7,
                mass: 1,
                maxVelocity: 1000,
                accelerationX: 1000,
                accelerationY: 1800,
            },
            player2Ball: {
                x: 1620,
                y: 540,
                scale: 1,
                bounce: 0.7,
                mass: 1,
                maxVelocity: 1000,
                accelerationX: 1000,
                accelerationY: 1800,
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
    }
}