class UiManager {
    constructor(scene) {
        this.oScene = scene;
    }

    setPreloadUi() {
        switch (this.oScene.oGameManager.player1Color) {
            case "purple":
                this.oScene.player1_border_preload.setTexture('purple_border');
                this.oScene.txt_colour_preload.setTexture('purple_colour_text');
                this.oScene.player1_background_preload.setTexture('purple_splash');
                break;
            case "orange":
                this.oScene.player1_border_preload.setTexture('orange_border');
                this.oScene.txt_colour_preload.setTexture('orange_colour_text');
                this.oScene.player1_background_preload.setTexture('orange_splash');
                break;
            case "red":
                this.oScene.player1_border_preload.setTexture('red_border');
                this.oScene.txt_colour_preload.setTexture('red_colour_text');
                this.oScene.player1_background_preload.setTexture('red_splash');
                break;
            case "blue":
                this.oScene.player1_border_preload.setTexture('blue_border');
                this.oScene.txt_colour_preload.setTexture('blue_colour_text');
                this.oScene.player1_background_preload.setTexture('blue_splash');
                break;
            case "yellow":
                this.oScene.player1_border_preload.setTexture('yellow_border');
                this.oScene.txt_colour_preload.setTexture('yellow_colour_text');
                this.oScene.player1_background_preload.setTexture('yellow_splash');
                break;
            case "green":
                this.oScene.player1_border_preload.setTexture('green_border');
                this.oScene.txt_colour_preload.setTexture('green_colour_text');
                this.oScene.player1_background_preload.setTexture('green_splash');
                break;
            default:
                this.oScene.player1_border_preload.setTexture('green_border');
                this.oScene.txt_colour_preload.setTexture('green_colour_text');
                this.oScene.player1_background_preload.setTexture('green_splash');
                break;
        }
        switch (this.oScene.oGameManager.player2Color) {
            case "purple":
                this.oScene.player2_border_preload.setTexture('purple_border');
                this.oScene.txt_battle_preload.setTexture('purple_battle_text');
                this.oScene.player2_background_preload.setTexture('purple_splash');
                break;
            case "orange":
                this.oScene.player2_border_preload.setTexture('orange_border');
                this.oScene.txt_battle_preload.setTexture('orange_battle_text');
                this.oScene.player2_background_preload.setTexture('orange_splash');
                break;
            case "red":
                this.oScene.player2_border_preload.setTexture('red_border');
                this.oScene.txt_battle_preload.setTexture('red_battle_text');
                this.oScene.player2_background_preload.setTexture('red_splash');
                break;
            case "blue":
                this.oScene.player2_border_preload.setTexture('blue_border');
                this.oScene.txt_battle_preload.setTexture('blue_battle_text');
                this.oScene.player2_background_preload.setTexture('blue_splash');
                break;
            case "yellow":
                this.oScene.player2_border_preload.setTexture('yellow_border');
                this.oScene.txt_battle_preload.setTexture('yellow_battle_text');
                this.oScene.player2_background_preload.setTexture('yellow_splash');
                break;
            case "green":
                this.oScene.player2_border_preload.setTexture('green_border');
                this.oScene.txt_battle_preload.setTexture('green_battle_text');
                this.oScene.player2_background_preload.setTexture('green_splash');
                break;
            default:
                this.oScene.player2_border_preload.setTexture('blue_border');
                this.oScene.txt_battle_preload.setTexture('blue_battle_text');
                this.oScene.player2_background_preload.setTexture('blue_splash');
                break;
        }
    }

    setLevelUi() {
        switch (this.oScene.oGameManager.player1Color) {
            case "purple":
                this.oScene.player1_border_level.setTexture('purple_border');
                this.oScene.txt_colour_level.setTexture('purple_colour_text');
                this.oScene.player1_background_level.setTexture('purple_splash');
                this.oScene.btnPlayPlayer1.setTexture('purple_button');
                this.oScene.btnHowToPlayPlayer1.setTexture('purple_button');
                this.oScene.player1_game_timer_1.setTexture('purple_button');
                this.oScene.player1_game_timer_2.setTexture('purple_button');
                this.oScene.player1_game_timer_3.setTexture('purple_button');
                this.oScene.player1_game_timer_4.setTexture('purple_button');
                break;
            case "orange":
                this.oScene.player1_border_level.setTexture('orange_border');
                this.oScene.txt_colour_level.setTexture('orange_colour_text');
                this.oScene.player1_background_level.setTexture('orange_splash');
                this.oScene.btnPlayPlayer1.setTexture('orange_button');
                this.oScene.btnHowToPlayPlayer1.setTexture('orange_button');
                this.oScene.player1_game_timer_1.setTexture('orange_button');
                this.oScene.player1_game_timer_2.setTexture('orange_button');
                this.oScene.player1_game_timer_3.setTexture('orange_button');
                this.oScene.player1_game_timer_4.setTexture('orange_button');
                break;
            case "red":
                this.oScene.player1_border_level.setTexture('red_border');
                this.oScene.txt_colour_level.setTexture('red_colour_text');
                this.oScene.player1_background_level.setTexture('red_splash');
                this.oScene.btnPlayPlayer1.setTexture('red_button');
                this.oScene.btnHowToPlayPlayer1.setTexture('red_button');
                this.oScene.player1_game_timer_1.setTexture('red_button');
                this.oScene.player1_game_timer_2.setTexture('red_button');
                this.oScene.player1_game_timer_3.setTexture('red_button');
                this.oScene.player1_game_timer_4.setTexture('red_button');
                break;
            case "blue":
                this.oScene.player1_border_level.setTexture('blue_border');
                this.oScene.txt_colour_level.setTexture('blue_colour_text');
                this.oScene.player1_background_level.setTexture('blue_splash');
                this.oScene.btnPlayPlayer1.setTexture('blue_button');
                this.oScene.btnHowToPlayPlayer1.setTexture('blue_button');
                this.oScene.player1_game_timer_1.setTexture('blue_button');
                this.oScene.player1_game_timer_2.setTexture('blue_button');
                this.oScene.player1_game_timer_3.setTexture('blue_button');
                this.oScene.player1_game_timer_4.setTexture('blue_button');
                break;
            case "yellow":
                this.oScene.player1_border_level.setTexture('yellow_border');
                this.oScene.txt_colour_level.setTexture('yellow_colour_text');
                this.oScene.player1_background_level.setTexture('yellow_splash');
                this.oScene.btnPlayPlayer1.setTexture('yellow_button');
                this.oScene.btnHowToPlayPlayer1.setTexture('yellow_button');
                this.oScene.player1_game_timer_1.setTexture('yellow_button');
                this.oScene.player1_game_timer_2.setTexture('yellow_button');
                this.oScene.player1_game_timer_3.setTexture('yellow_button');
                this.oScene.player1_game_timer_4.setTexture('yellow_button');
                break;
            case "green":
                this.oScene.player1_border_level.setTexture('green_border');
                this.oScene.txt_colour_level.setTexture('green_colour_text');
                this.oScene.player1_background_level.setTexture('green_splash');
                this.oScene.btnPlayPlayer1.setTexture('green_button');
                this.oScene.btnHowToPlayPlayer1.setTexture('green_button');
                this.oScene.player1_game_timer_1.setTexture('green_button');
                this.oScene.player1_game_timer_2.setTexture('green_button');
                this.oScene.player1_game_timer_3.setTexture('green_button');
                this.oScene.player1_game_timer_4.setTexture('green_button');
                break;
            default:
                this.oScene.player1_border_level.setTexture('green_border');
                this.oScene.txt_colour_level.setTexture('green_colour_text');
                this.oScene.player1_background_level.setTexture('green_splash');
                this.oScene.btnPlayPlayer1.setTexture('green_button');
                this.oScene.btnHowToPlayPlayer1.setTexture('green_button');
                this.oScene.player1_game_timer_1.setTexture('green_button');
                this.oScene.player1_game_timer_2.setTexture('green_button');
                this.oScene.player1_game_timer_3.setTexture('green_button');
                this.oScene.player1_game_timer_4.setTexture('green_button');
                break;
        }
        switch (this.oScene.oGameManager.player2Color) {
            case "purple":
                this.oScene.player2_border_level.setTexture('purple_border');
                this.oScene.txt_battle_level.setTexture('purple_battle_text');
                this.oScene.player2_background_level.setTexture('purple_splash');
                this.oScene.btnPlayPlayer2.setTexture('purple_button');
                this.oScene.btnHowToPlayPlayer2.setTexture('purple_button');
                this.oScene.player2_game_timer_1.setTexture('purple_button');
                this.oScene.player2_game_timer_2.setTexture('purple_button');
                this.oScene.player2_game_timer_3.setTexture('purple_button');
                this.oScene.player2_game_timer_4.setTexture('purple_button');
                break;
            case "orange":
                this.oScene.player2_border_level.setTexture('orange_border');
                this.oScene.txt_battle_level.setTexture('orange_battle_text');
                this.oScene.player2_background_level.setTexture('orange_splash');
                this.oScene.btnPlayPlayer2.setTexture('orange_button');
                this.oScene.btnHowToPlayPlayer2.setTexture('orange_button');
                this.oScene.player2_game_timer_1.setTexture('orange_button');
                this.oScene.player2_game_timer_2.setTexture('orange_button');
                this.oScene.player2_game_timer_3.setTexture('orange_button');
                this.oScene.player2_game_timer_4.setTexture('orange_button');
                break;
            case "red":
                this.oScene.player2_border_level.setTexture('red_border');
                this.oScene.txt_battle_level.setTexture('red_battle_text');
                this.oScene.player2_background_level.setTexture('red_splash');
                this.oScene.btnPlayPlayer2.setTexture('red_button');
                this.oScene.btnHowToPlayPlayer2.setTexture('red_button');
                this.oScene.player2_game_timer_1.setTexture('red_button');
                this.oScene.player2_game_timer_2.setTexture('red_button');
                this.oScene.player2_game_timer_3.setTexture('red_button');
                this.oScene.player2_game_timer_4.setTexture('red_button');
                break;
            case "blue":
                this.oScene.player2_border_level.setTexture('blue_border');
                this.oScene.txt_battle_level.setTexture('blue_battle_text');
                this.oScene.player2_background_level.setTexture('blue_splash');
                this.oScene.btnPlayPlayer2.setTexture('blue_button');
                this.oScene.btnHowToPlayPlayer2.setTexture('blue_button');
                this.oScene.player2_game_timer_1.setTexture('blue_button');
                this.oScene.player2_game_timer_2.setTexture('blue_button');
                this.oScene.player2_game_timer_3.setTexture('blue_button');
                this.oScene.player2_game_timer_4.setTexture('blue_button');
                break;
            case "yellow":
                this.oScene.player2_border_level.setTexture('yellow_border');
                this.oScene.txt_battle_level.setTexture('yellow_battle_text');
                this.oScene.player2_background_level.setTexture('yellow_splash');
                this.oScene.btnPlayPlayer2.setTexture('yellow_button');
                this.oScene.btnHowToPlayPlayer2.setTexture('yellow_button');
                this.oScene.player2_game_timer_1.setTexture('yellow_button');
                this.oScene.player2_game_timer_2.setTexture('yellow_button');
                this.oScene.player2_game_timer_3.setTexture('yellow_button');
                this.oScene.player2_game_timer_4.setTexture('yellow_button');
                break;
            case "green":
                this.oScene.player2_border_level.setTexture('green_border');
                this.oScene.txt_battle_level.setTexture('green_battle_text');
                this.oScene.player2_background_level.setTexture('green_splash');
                this.oScene.btnPlayPlayer2.setTexture('green_button');
                this.oScene.btnHowToPlayPlayer2.setTexture('green_button');
                this.oScene.player2_game_timer_1.setTexture('green_button');
                this.oScene.player2_game_timer_2.setTexture('green_button');
                this.oScene.player2_game_timer_3.setTexture('green_button');
                this.oScene.player2_game_timer_4.setTexture('green_button');
                break;
            default:
                this.oScene.player2_border_level.setTexture('blue_border');
                this.oScene.txt_battle_level.setTexture('blue_battle_text');
                this.oScene.player2_background_level.setTexture('blue_splash');
                this.oScene.btnPlayPlayer2.setTexture('blue_button');
                this.oScene.btnHowToPlayPlayer2.setTexture('blue_button');
                this.oScene.player2_game_timer_1.setTexture('blue_button');
                this.oScene.player2_game_timer_2.setTexture('blue_button');
                this.oScene.player2_game_timer_3.setTexture('blue_button');
                this.oScene.player2_game_timer_4.setTexture('blue_button');
                break;
        }
    }

    setGamePlayUi() {
        this.setPlayer1Color();
        this.setPlayer2Color();
    }

    setPlayer1Color() {
        switch (this.oScene.oGameManager.player1Color) {
            case "purple":
                this.oScene.player1_background.setTexture('purple_background');
                this.oScene.player1_scoreboard.setTexture('purple_scoreboard');
                this.oScene.player1_controller.setTexture('purple_controller_aswd');
                this.oScene.btnGameOverPlayer1.setTexture('purple_button');
                this.oScene.btnReplayGamePlayer1.setTexture('purple_button');
                this.oScene.txtPlayer1ScoreCard.setStyle({ "color": "#C000FF" });
                this.oScene.txtPlayer1FinalScore.setStyle({ "color": "#C000FF" });
                this.oScene.txt_player1_info.setStyle({ "color": "#C000FF" });
                break;
            case "orange":
                this.oScene.player1_background.setTexture('orange_background');
                this.oScene.player1_scoreboard.setTexture('orange_scoreboard');
                this.oScene.player1_controller.setTexture('orange_controller_aswd');
                this.oScene.btnGameOverPlayer1.setTexture('orange_button');
                this.oScene.btnReplayGamePlayer1.setTexture('orange_button');
                this.oScene.txtPlayer1ScoreCard.setStyle({ "color": "#FF8900" });
                this.oScene.txtPlayer1FinalScore.setStyle({ "color": "#FF8900" });
                this.oScene.txt_player1_info.setStyle({ "color": "#FF8900" });
                break;
            case "red":
                this.oScene.player1_background.setTexture('red_background');
                this.oScene.player1_scoreboard.setTexture('red_scoreboard');
                this.oScene.player1_controller.setTexture('red_controller_aswd');
                this.oScene.btnGameOverPlayer1.setTexture('red_button');
                this.oScene.btnReplayGamePlayer1.setTexture('red_button');
                this.oScene.txtPlayer1ScoreCard.setStyle({ "color": "#F3023F" });
                this.oScene.txtPlayer1FinalScore.setStyle({ "color": "#F3023F" });
                this.oScene.txt_player1_info.setStyle({ "color": "#F3023F" });
                break;
            case "blue":
                this.oScene.player1_background.setTexture('blue_background');
                this.oScene.player1_scoreboard.setTexture('blue_scoreboard');
                this.oScene.player1_controller.setTexture('blue_controller_aswd');
                this.oScene.btnGameOverPlayer1.setTexture('blue_button');
                this.oScene.btnReplayGamePlayer1.setTexture('blue_button');
                this.oScene.txtPlayer1ScoreCard.setStyle({ "color": "#3E00FC" });
                this.oScene.txtPlayer1FinalScore.setStyle({ "color": "#3E00FC" });
                this.oScene.txt_player1_info.setStyle({ "color": "#3E00FC" });
                break;
            case "yellow":
                this.oScene.player1_background.setTexture('yellow_background');
                this.oScene.player1_scoreboard.setTexture('yellow_scoreboard');
                this.oScene.player1_controller.setTexture('yellow_controller_aswd');
                this.oScene.btnGameOverPlayer1.setTexture('yellow_button');
                this.oScene.btnReplayGamePlayer1.setTexture('yellow_button');
                this.oScene.txtPlayer1ScoreCard.setStyle({ "color": "#F6FF00" });
                this.oScene.txtPlayer1FinalScore.setStyle({ "color": "#F6FF00" });
                this.oScene.txt_player1_info.setStyle({ "color": "#F6FF00" });
                break;
            case "green":
                this.oScene.player1_background.setTexture('green_background');
                this.oScene.player1_scoreboard.setTexture('green_scoreboard');
                this.oScene.player1_controller.setTexture('green_controller_aswd');
                this.oScene.btnGameOverPlayer1.setTexture('green_button');
                this.oScene.btnReplayGamePlayer1.setTexture('green_button');
                this.oScene.txtPlayer1ScoreCard.setStyle({ "color": "#62FF00" });
                this.oScene.txtPlayer1FinalScore.setStyle({ "color": "#62FF00" });
                this.oScene.txt_player1_info.setStyle({ "color": "#62FF00" });
                break;
            default:
                break;
        }
    }
    setPlayer2Color() {
        switch (this.oScene.oGameManager.player2Color) {
            case "purple":
                this.oScene.player2_background.setTexture('purple_background');
                this.oScene.player2_scoreboard.setTexture('purple_scoreboard');
                this.oScene.player2_controller.setTexture('purple_controller_arrows');
                this.oScene.btnGameOverPlayer2.setTexture('purple_button');
                this.oScene.btnReplayGamePlayer2.setTexture('purple_button');
                this.oScene.txtPlayer2ScoreCard.setStyle({ "color": "#C000FF" });
                this.oScene.txtPlayer2FinalScore.setStyle({ "color": "#C000FF" });
                this.oScene.txt_player2_info.setStyle({ "color": "#C000FF" });
                break;
            case "orange":
                this.oScene.player2_background.setTexture('orange_background');
                this.oScene.player2_scoreboard.setTexture('orange_scoreboard');
                this.oScene.player2_controller.setTexture('orange_controller_arrows');
                this.oScene.btnGameOverPlayer2.setTexture('orange_button');
                this.oScene.btnReplayGamePlayer2.setTexture('orange_button');
                this.oScene.txtPlayer2ScoreCard.setStyle({ "color": "#FF8900" });
                this.oScene.txtPlayer2FinalScore.setStyle({ "color": "#FF8900" });
                this.oScene.txt_player2_info.setStyle({ "color": "#FF8900" });
                break;
            case "red":
                this.oScene.player2_background.setTexture('red_background');
                this.oScene.player2_scoreboard.setTexture('red_scoreboard');
                this.oScene.player2_controller.setTexture('red_controller_arrows');
                this.oScene.btnGameOverPlayer2.setTexture('red_button');
                this.oScene.btnReplayGamePlayer2.setTexture('red_button');
                this.oScene.txtPlayer2ScoreCard.setStyle({ "color": "#F3023F" });
                this.oScene.txtPlayer2FinalScore.setStyle({ "color": "#F3023F" });
                this.oScene.txt_player2_info.setStyle({ "color": "#F3023F" });
                break;
            case "blue":
                this.oScene.player2_background.setTexture('blue_background');
                this.oScene.player2_scoreboard.setTexture('blue_scoreboard');
                this.oScene.player2_controller.setTexture('blue_controller_arrows');
                this.oScene.btnGameOverPlayer2.setTexture('blue_button');
                this.oScene.btnReplayGamePlayer2.setTexture('blue_button');
                this.oScene.txtPlayer2ScoreCard.setStyle({ "color": "#3E00FC" });
                this.oScene.txtPlayer2FinalScore.setStyle({ "color": "#3E00FC" });
                this.oScene.txt_player2_info.setStyle({ "color": "#3E00FC" });
                break;
            case "yellow":
                this.oScene.player2_background.setTexture('yellow_background');
                this.oScene.player2_scoreboard.setTexture('yellow_scoreboard');
                this.oScene.player2_controller.setTexture('yellow_controller_arrows');
                this.oScene.btnGameOverPlayer2.setTexture('yellow_button');
                this.oScene.btnReplayGamePlayer2.setTexture('yellow_button');
                this.oScene.txtPlayer2ScoreCard.setStyle({ "color": "#F6FF00" });
                this.oScene.txtPlayer2FinalScore.setStyle({ "color": "#F6FF00" });
                this.oScene.txt_player2_info.setStyle({ "color": "#F6FF00" });
                break;
            case "green":
                this.oScene.player2_background.setTexture('green_background');
                this.oScene.player2_scoreboard.setTexture('green_scoreboard');
                this.oScene.player2_controller.setTexture('green_controller_arrows');
                this.oScene.btnGameOverPlayer2.setTexture('green_button');
                this.oScene.btnReplayGamePlayer2.setTexture('green_button');
                this.oScene.txtPlayer2ScoreCard.setStyle({ "color": "#62FF00" });
                this.oScene.txtPlayer2FinalScore.setStyle({ "color": "#62FF00" });
                this.oScene.txt_player2_info.setStyle({ "color": "#62FF00" });
                break;
            default:
                break;
        }
    }
}