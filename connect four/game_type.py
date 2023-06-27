import game_functions


def PvP(game):

    player_one = game_functions.player(1);
    player_two = game_functions.player(2);
    game.create_board();
    game.display_board();
    while(game.game_status == False):
        game.place_token(player_one.get_token());
        game.check_win();
        game.place_token(player_two.get_token());
    return 0;


def PvC(game):
    print("Player Vs Computer");
    return