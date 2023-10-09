class GameManager {
    constructor(scene) {
        this.scene = scene;
        this.ballInfo = {
            player1Ball: {
                x: 300,
                y: 570,
                scale: 0.8,
                bounce: 0.7,
                mass: 1,
                maxVelocity: 700,
                accelerationX: 700,
                accelerationY: 1500,
            },
            player2Ball: {
                x: 1620,
                y: 570,
                scale: 0.8,
                bounce: 0.7,
                mass: 1,
                maxVelocity: 700,
                accelerationX: 700,
                accelerationY: 1500,
            },
            mainBall: {
                x: 960,
                y: 570,
                scale: 0.5,
                bounce: 1,
                mass: 0.75,
                maxVelocity: 600,
            }
        }
    }
}