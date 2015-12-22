class Api::UsersController < ApplicationController

  def show
    current_games = Game.where("user_id = ?", current_user.id)

    render json: current_games
  end

  def index
    current_games = Game.where("user_id = ?", current_user.id)

    render json: current_games
  end



end
