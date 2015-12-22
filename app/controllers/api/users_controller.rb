class Api::UsersController < ApplicationController

  def show
    current_games = Game.where("user_id = ?", current_user.id)

    render json: current_games
  end

  def index
    current_games = Game.where("user_id = ?", current_user.id)
    # clues = Clue.where("puzzle_id = ?", game_params[:puzzle_id])

    render json: current_games
    # render json: {game: current_games[0], puzzle: , clues: }
  end

  private
  def game_params
    params.require(:user).permit(:puzzle_id)
  end


end
