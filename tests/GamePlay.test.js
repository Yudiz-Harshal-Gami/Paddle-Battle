// FILEPATH: /Users/yudiz/Documents/HTML5 Projects/Mini-Games/Colour-Battle/tests/level.test.js

import GamePlay from '../src/scenes/GamePlay';
// import GameManager from '../src/managers/GameManager';
// import InputManager from '../src/managers/InputManager';
// import SoundManager from '../src/managers/SoundManager';
// import UiManager from '../src/managers/UiManager';

// jest.mock('../src/managers/GameManager');
// jest.mock('../src/managers/InputManager');
// jest.mock('../src/managers/SoundManager');
// jest.mock('../src/managers/UiManager');

describe('GamePlay', () => {
    let gamePlay;

    beforeEach(() => {
        gamePlay = new GamePlay();
        gamePlay.add = {
            image: jest.fn().mockReturnThis(),
            text: jest.fn().mockReturnValue({
                setOrigin: jest.fn().mockReturnThis(),
                setStyle: jest.fn().mockReturnThis()
            }),
            container: jest.fn().mockReturnThis()
        };
        gamePlay.add.container.mockReturnValue({ add: jest.fn() });
        gamePlay.events = {
            emit: jest.fn()
        };
    });

    it('should create game objects', () => {
        gamePlay.editorCreate();

        expect(gamePlay.add.image).toHaveBeenCalled();
        expect(gamePlay.add.text).toHaveBeenCalled();
        expect(gamePlay.add.container).toHaveBeenCalled();
    });

    it('should set properties of game objects', () => {
        gamePlay.editorCreate();

        const mockImage = gamePlay.add.image.mock.results[0].value;
        expect(mockImage.scaleX).toBeDefined();
        expect(mockImage.scaleY).toBeDefined();

        const mockText = gamePlay.add.text.mock.results[0].value;
        expect(mockText.setOrigin).toBeDefined();
        expect(mockText.setStyle).toBeDefined();
    });

    it('should add game objects to containers', () => {
        gamePlay.editorCreate();

        const mockContainer = gamePlay.add.container.mock.results[0].value;
        expect(mockContainer.add).toHaveBeenCalled();
    });
});