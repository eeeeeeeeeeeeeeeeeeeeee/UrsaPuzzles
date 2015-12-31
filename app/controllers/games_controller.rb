class GamesController < ApplicationController

  def update
    @game = Game.find(params[:id])

    update_params = {current_board_state: game_params[:current_game_state],
                     time_elapsed: game_params[:time_elapsed],
                     won: game_params[:won]}

    unless @game.update(update_params)
      flash.now[:errors] = @user.errors.full_messages
    end

    render json: ""
  end

  private
  def game_params
    params.require(:game).permit({:current_game_state => []}, :time_elapsed, :won)
  end
end
