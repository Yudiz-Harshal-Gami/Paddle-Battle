class GameManager {
    constructor(scene) {
        this.scene = scene;
        this.ballInfo = {
            ownPlayerBall: {
                x: 300,
                y: 570,
                scale: 0.8,
                bounce: 0.7,
                mass: 1,
                maxVelocity: 700
            },
            oppoPlayerBall: {
                x: 1620,
                y: 570,
                scale: 0.8,
                bounce: 0.7,
                mass: 1,
                maxVelocity: 700
            },
            mainBall: {
                x: 960,
                y: 570,
                scale: 0.5,
                bounce: 1,
                mass: 0.75,
                maxVelocity: 600
            }
        }
    }
}