"""

Connect Four

Pedro Bueno Castaneda

This file provides all functionality needed to properly run the game in the user's terminal.

"""

import numpy as np


#Initialize a profile for the player

class player:

    def __init__(self,token,turn=0,score=0):
        self.token = token;
        self.turn = turn;
        self.score = score;
    
    def get_token(self):
        return self.token;

    def set_token(self, x):
        self.token = x;
        
    def get_turn(self):
        return self.turn;

    def set_turn(self, x):
        self.turn = x;
        
    def get_score(self):
        return self.score;

    def set_score(self, x):
        self.score = x;

#Initialize a profile for the computer
class computer:

    def __init__(self,token,turn=0,score=0):
        self.token = token;
        self.turn = turn;
        self.score = score;

    def get_token(self):
        return self.token;

    def set_token(self, x):
        self.token = x;
        
    def get_turn(self):
        return self.turn;

    def set_turn(self, x):
        self.turn = x;
        
    def get_score(self):
        return self.score;

    def set_score(self, x):
        self.score = x;

#Initalize a profile for the game
class Tic_Tac_Toe:

    def __init__(self,game_over = False, game_board =[]):
        self.game_status = game_over;
        self.game_board = game_board;
        
    def get_game_status(self):
        return self.game_status;

    def create_board(self):
        game_board = np.zeros((6,7));
        self.game_board = game_board;
        return game_board;

    def display_board(self):
        print(" 1  2  3  4  5  6  7");
        print(" ---------------------");
        for x in self.game_board:
            print(x)
        return 0;

# Allow the player to place a token on the game board
    def place_token(self,token):
        game_board_length = len(self.game_board);
        valid = False;
        placement = int(input("Player {token} please enter number 1-7: ".format(token=token)))-1;
        print("\n");

        if(placement > -1 and placement < 7):
            for x in reversed(range(-1,game_board_length)):
                if x == -1:
                    print("Row is full made another selection!");
                    self.display_board();
                    self.place_token(token);
                if(self.game_board[x][placement] == 0):
                    self.game_board[x][placement] = token;
                    self.display_board();
                    return 0
        
    def check_win(self, currentX, currentY, player):

        tracker = 0;

        #Checking left win condition
        while(currentY > -1):
            if(self.game_board[currentX][currentY] == 0):
                currentY -=1;
            tracker +=1;
            if(tracker == 4):
                print("Player {player} has won the match!".format(player.get_token()));
                self.game_status = True;