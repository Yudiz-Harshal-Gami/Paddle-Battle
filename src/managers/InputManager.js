export default class InputManager {
    constructor(scene) {
        this.oScene = scene;
    }

    levelSceneInput() {

        this.oScene.btnPlay.setInteractive();
        this.oScene.btnHowToPlay.setInteractive();
        this.oScene.btnMusic.setInteractive();
        this.oScene.btnVolume.setInteractive();
        this.oScene.popup_backgound.setInteractive();
        this.oScene.btnClose.setInteractive();

        this.oScene.btnClose.on('pointerdown', () => {
            this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
            this.oScene.container_timer_popup.setVisible(false);
        });
        this.oScene.btnClose.on('pointerover', () => this.pointerOverTween(this.oScene.btnClose, 0.8));
        this.oScene.btnClose.on('pointerout', () => this.pointerOutTween(this.oScene.btnClose, 0.8));

        this.oScene.btnPlay.on('pointerdown', () => {
            this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
            this.oScene.container_timer_popup.setVisible(true);
        })
        this.oScene.btnPlay.on('pointerover', () => {
            this.pointerOverTween(this.oScene.container_play_button, 1)
        })
        this.oScene.btnPlay.on('pointerout', () => {
            this.pointerOutTween(this.oScene.container_play_button, 1)
        })

        this.oScene.btnHowToPlay.on('pointerdown', () => {
            this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
            // code for how to play;
        })
        this.oScene.btnHowToPlay.on('pointerover', () => {
            this.pointerOverTween(this.oScene.container_how_to_play_button, 1)
        })
        this.oScene.btnHowToPlay.on('pointerout', () => {
            this.pointerOutTween(this.oScene.container_how_to_play_button, 1)
        })

        this.oScene.btnMusic.on('pointerdown', () => {
            if (this.oScene.btnMusic.texture.key == 'music') {
                this.oScene.gameData.gameMusic = false;
                this.oScene.btnMusic.setTexture('music_off');
                this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
                this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.musicArray, true);
            }
            else {
                this.oScene.gameData.gameMusic = true;
                this.oScene.btnMusic.setTexture('music');
                this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
                this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.musicArray, false);
            }
        })
        this.oScene.btnMusic.setTexture(this.oScene.gameData.gameMusic ? 'music' : 'music_off');
        this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.musicArray, this.oScene.gameData.gameMusic ? false : true);
        this.oScene.btnMusic.on('pointerover', () => { this.pointerOverTween(this.oScene.btnMusic, 1) })
        this.oScene.btnMusic.on('pointerout', () => { this.pointerOutTween(this.oScene.btnMusic, 1) })

        this.oScene.btnVolume.on('pointerdown', () => {
            if (this.oScene.btnVolume.texture.key == 'volume') {
                this.oScene.gameData.gameSound = false;
                this.oScene.btnVolume.setTexture('volume_off');
                this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
                this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.soundArray, true);
            }
            else {
                this.oScene.gameData.gameSound = true;
                this.oScene.btnVolume.setTexture('volume');
                this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
                this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.soundArray, false);
            }
        })
        this.oScene.btnVolume.setTexture(this.oScene.gameData.gameSound ? 'volume' : 'volume_off');
        this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.soundArray, this.oScene.gameData.gameSound ? false : true);
        this.oScene.btnVolume.on('pointerover', () => { this.pointerOverTween(this.oScene.btnVolume, 1) })
        this.oScene.btnVolume.on('pointerout', () => { this.pointerOutTween(this.oScene.btnVolume, 1) })

        this.oScene.btn_game_timer_1.setInteractive();
        this.oScene.btn_game_timer_2.setInteractive();
        this.oScene.btn_game_timer_3.setInteractive();
        this.oScene.btn_game_timer_4.setInteractive();

        this.oScene.btn_game_timer_1.on('pointerdown', () => {
            this.oScene.gameData.gameTime = 60
            this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
            this.oScene.oSoundManager.stopAllSound();
            this.oScene.scene.start('GamePlay', this.oScene.gameData);
        })
        this.oScene.btn_game_timer_1.on('pointerover', () => {
            this.pointerOverTween(this.oScene.container_game_timer_1, 1)
        })
        this.oScene.btn_game_timer_1.on('pointerout', () => {
            this.pointerOutTween(this.oScene.container_game_timer_1, 1)
        })

        this.oScene.btn_game_timer_2.on('pointerdown', () => {
            this.oScene.gameData.gameTime = 120
            this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
            this.oScene.oSoundManager.stopAllSound();
            this.oScene.scene.start('GamePlay', this.oScene.gameData);
        })
        this.oScene.btn_game_timer_2.on('pointerover', () => {
            this.pointerOverTween(this.oScene.container_game_timer_2, 1)
        })
        this.oScene.btn_game_timer_2.on('pointerout', () => {
            this.pointerOutTween(this.oScene.container_game_timer_2, 1)
        })

        this.oScene.btn_game_timer_3.on('pointerdown', () => {
            this.oScene.gameData.gameTime = 300
            this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
            this.oScene.oSoundManager.stopAllSound();
            this.oScene.scene.start('GamePlay', this.oScene.gameData);
        })
        this.oScene.btn_game_timer_3.on('pointerover', () => {
            this.pointerOverTween(this.oScene.container_game_timer_3, 1)
        })
        this.oScene.btn_game_timer_3.on('pointerout', () => {
            this.pointerOutTween(this.oScene.container_game_timer_3, 1)
        })

        this.oScene.btn_game_timer_4.on('pointerdown', () => {
            this.oScene.gameData.gameTime = 600
            this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
            this.oScene.oSoundManager.stopAllSound();
            this.oScene.scene.start('GamePlay', this.oScene.gameData);
        })
        this.oScene.btn_game_timer_4.on('pointerover', () => {
            this.pointerOverTween(this.oScene.container_game_timer_4, 1)
        })
        this.oScene.btn_game_timer_4.on('pointerout', () => {
            this.pointerOutTween(this.oScene.container_game_timer_4, 1)
        })


    }

    gamePlaySceneInput() {
        // All Input Button
        this.oScene.btnReplayGame.setInteractive();
        this.oScene.btnReplayGame.on('pointerdown', () => {
            this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
            this.oScene.oSoundManager.stopAllSound();
            this.oScene.scene.start('GamePlay', this.oScene.gameData);
        })
        this.oScene.btnReplayGame.on('pointerover', () => {
            this.pointerOverTween(this.oScene.container_player2_button, 1);
        })
        this.oScene.btnReplayGame.on('pointerout', () => {
            this.pointerOutTween(this.oScene.container_player2_button, 1);
        })

        this.oScene.btnGameOver.setInteractive();
        this.oScene.btnGameOver.on('pointerdown', () => {
            this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
            this.oScene.oSoundManager.stopAllSound();
            this.oScene.scene.start('Level', this.oScene.gameData)
        })
        this.oScene.btnGameOver.on('pointerover', () => {
            this.pointerOverTween(this.oScene.container_player1_button, 1);
        })
        this.oScene.btnGameOver.on('pointerout', () => {
            this.pointerOutTween(this.oScene.container_player1_button, 1);
        })

        this.oScene.btnMusic.setInteractive();
        this.oScene.btnMusic.on('pointerdown', () => {
            if (this.oScene.btnMusic.texture.key == 'music') {
                this.oScene.gameData.gameMusic = false;
                this.oScene.btnMusic.setTexture('music_off');
                this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
                this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.musicArray, true);
            }
            else {
                this.oScene.gameData.gameMusic = true;
                this.oScene.btnMusic.setTexture('music');
                this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
                this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.musicArray, false);
            }
        })
        this.oScene.btnMusic.setTexture(this.oScene.gameData.gameMusic ? 'music' : 'music_off');
        this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.musicArray, this.oScene.gameData.gameMusic ? false : true);
        this.oScene.btnMusic.on('pointerover', () => { this.pointerOverTween(this.oScene.btnMusic, 0.8) })
        this.oScene.btnMusic.on('pointerout', () => { this.pointerOutTween(this.oScene.btnMusic, 0.8) })

        this.oScene.btnVolume.setInteractive();
        this.oScene.btnVolume.on('pointerdown', () => {
            if (this.oScene.btnVolume.texture.key == 'volume') {
                this.oScene.gameData.gameSound = false;
                this.oScene.btnVolume.setTexture('volume_off');
                this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
                this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.soundArray, true);
            }
            else {
                this.oScene.gameData.gameSound = true;
                this.oScene.btnVolume.setTexture('volume');
                this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.soundArray, false);
            }
        })
        this.oScene.btnVolume.setTexture(this.oScene.gameData.gameSound ? 'volume' : 'volume_off');
        this.oScene.oSoundManager.toggleSound(this.oScene.oSoundManager.soundArray, this.oScene.gameData.gameSound ? false : true);
        this.oScene.btnVolume.on('pointerover', () => { this.pointerOverTween(this.oScene.btnVolume, 0.8) })
        this.oScene.btnVolume.on('pointerout', () => { this.pointerOutTween(this.oScene.btnVolume, 0.8) })


        this.oScene.btnGameQuit.setInteractive();
        this.oScene.btnGameQuit.on('pointerdown', () => {
            clearInterval(this.oScene.timeInterval)
            clearInterval(this.oScene.timeInterval1)
            clearInterval(this.oScene.tempGameTimer)
            this.oScene.oSoundManager.soundPlay(this.oScene.oSoundManager.clickSound, false);
            this.oScene.oSoundManager.stopAllSound();
            this.oScene.scene.start('Level', this.oScene.gameData)
        })
        this.oScene.btnGameQuit.on('pointerover', () => {
            this.pointerOverTween(this.oScene.btnGameQuit, 0.8);
        })
        this.oScene.btnGameQuit.on('pointerout', () => {
            this.pointerOutTween(this.oScene.btnGameQuit, 0.8);
        })
    }

    pointerOverTween(btn, initSclae) {
        this.oScene.tweens.add({
            targets: btn,
            scaleX: initSclae + 0.05,
            scaleY: initSclae + 0.05,
            duration: 100
        })
    }

    pointerOutTween(btn, initSclae) {
        this.oScene.tweens.add({
            targets: btn,
            scaleX: initSclae,
            scaleY: initSclae,
            duration: 100
        })
    }
}