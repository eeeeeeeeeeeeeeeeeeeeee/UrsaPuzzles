class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render json: @user
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    current_game_state = user_params[:current_game_state]
    time_elapsed = user_params[:time_elapsed]

    update_params = {}

    unless current_user.update()
      flash.now[:errors] = @user.errors.full_messages
    end

  end

  private
  def user_params
    params.require(:user).permit(:password, :username, {:current_game_state => []}, :time_elapsed)
  end

end
