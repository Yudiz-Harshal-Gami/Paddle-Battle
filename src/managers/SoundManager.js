class SoundManager {
    constructor(scene) {
        this.scene = scene;

        this.backgroundMusic = this.scene.sound.add('backgroundMusic').setVolume(0.8);

        this.clickSound = this.scene.sound.add('clickSound').setVolume(0.8);
        this.timerSound = this.scene.sound.add('timerSound').setVolume(0.4);
        this.whistleSound = this.scene.sound.add('whistleSound').setVolume(0.8);
        this.ballBounceSound = this.scene.sound.add('ballBounceSound').setVolume(0.8);
        this.goalSound = this.scene.sound.add('goalSound').setVolume(0.8);
        this.winnerSound = this.scene.sound.add('winnerSound').setVolume(0.8);

        this.soundArray = [this.whistleSound, this.ballBounceSound, this.goalSound, this.timerSound, this.winnerSound, this.clickSound];
        this.musicArray = [this.backgroundMusic];
    }

    soundPlay(key, loop) {
        key.play();
        key.loop = loop;
    }

    soundStop(key, loop) {
        key.stop();
        key.loop = false;
    }

    toggleMute(key, value) {
        key.mute = value
    }

    toggleSound(key, value) {
        key.forEach(item => {
            item.mute = value;
        })
    }

    stopAllSound() {
        this.soundArray.forEach(item => {
            item.stop();
        })
        this.musicArray.forEach(item => {
            item.stop();
        })
    }

}