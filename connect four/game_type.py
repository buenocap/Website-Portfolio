import game_functions

def PvP(game):
    player_one = game_functions.player(1);
    player_two = game_functions.player(2);
    game.createBoard();
    game.displayBoard();
    while(game.game_status == False):
        game.placeToken(player_one.get_token());
        game.placeToken(player_two.get_token());
    return 0;

def PvC(game):
    print("Player Vs Computer");
    return