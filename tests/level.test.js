// FILEPATH: /Users/yudiz/Documents/HTML5 Projects/Mini-Games/Colour-Battle/tests/level.test.js
import Level from '../src/scenes/Level';
import GameManager from '../src/managers/GameManager';
import InputManager from '../src/managers/InputManager';
import SoundManager from '../src/managers/SoundManager';
import UiManager from '../src/managers/UiManager';

jest.mock('../src/managers/GameManager');
jest.mock('../src/managers/InputManager');
jest.mock('../src/managers/SoundManager');
jest.mock('../src/managers/UiManager');

describe('Level', () => {
    let level;

    beforeEach(() => {
        level = new Level();
        level.editorCreate = jest.fn();
        level.tweens = {
            add: jest.fn()
        };
        level.container_level_scene_logo = {};
        level.gameData = {
            player1Color: 'red',
            player2Color: 'blue'
        };
    });

    it('should create managers', () => {
        level.create();

        expect(level.oGameManager).toBeInstanceOf(GameManager);
        expect(level.oSoundManager).toBeInstanceOf(SoundManager);
        expect(level.oUiManager).toBeInstanceOf(UiManager);
        expect(level.oInputManager).toBeInstanceOf(InputManager);
    });

    it('should set player colors if defined', () => {
        level.create();

        expect(level.oGameManager.player1Color).toBe('red');
        expect(level.oGameManager.player2Color).toBe('blue');
    });

    it('should call setLevelUi on UiManager', () => {
        level.create();

        expect(level.oUiManager.setLevelUi).toHaveBeenCalled();
    });

    it('should call soundPlay on SoundManager', () => {
        level.create();

        expect(level.oSoundManager.soundPlay).toHaveBeenCalled();
    });

    it('should add a tween to the logo', () => {
        level.create();

        expect(level.tweens.add).toHaveBeenCalledWith({
            targets: level.container_level_scene_logo,
            scaleX: 1.02,
            scaleY: 1.02,
            duration: 500,
            repeat: -1,
            yoyo: true
        });
    });
});