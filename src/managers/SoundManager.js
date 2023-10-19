class SoundManager {
    constructor(scene) {
        this.scene = scene;
        // this.backgroundMusic = this.scene.sound.add('background_music').setVolume(0.8);
        // this.clickSound = this.scene.sound.add('background_music').setVolume(0.8);
        this.whistleSound = this.scene.sound.add('whistle').setVolume(0.8);
        this.ballBounceSound = this.scene.sound.add('ball-bounce').setVolume(0.8);
        this.soundArray = [this.whistleSound, this.ballBounceSound];
        this.musicArray = [];

    }

    soundPlay(key, loop) {
        key.play();
        key.loop = loop;
    }

    soundStop(key, loop) {
        key.stop();
        key.loop = false;
    }

    toggleSound(key, value) {
        key.forEach(item => {
            // console.log(item, item.mute);/
        })
    }

}