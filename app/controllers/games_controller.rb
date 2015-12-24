class GamesController < ApplicationController

  def update
    @game = Game.find(params[:id])

    update_params = {current_board_state: user_params[:current_game_state],
                     time_elapsed: user_params[:time_elapsed]}

    unless @game.update(update_params)
      flash.now[:errors] = @user.errors.full_messages
    end

    render json: ""
  end

  private
  def user_params
    params.require(:game).permit({:current_game_state => []}, :time_elapsed)
  end
end
