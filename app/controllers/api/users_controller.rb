class Api::UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save
      sign_in(user)
      render json: user
    else
      render json: user.errors.full_messages, status: 404
    end
  end

  def show
    current_games = Game.where("user_id = ?", current_user.id)

    render json: current_games
  end

  def index
    current_games = Game.where("user_id = ?", current_user.id)

    render json: current_games
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, {:current_game_state => []}, :time_elapsed)
  end

end
