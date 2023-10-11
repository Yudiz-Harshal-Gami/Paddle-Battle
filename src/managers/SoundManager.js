class SoundManager {
    constructor(scene) {
        this.scene = scene;
    }

    soundPlay(key,loop) {
        key.play();
        key.loop = loop;
    }

    soundStop(key) {
        key.stop();
        key.loop = false;
    }
}