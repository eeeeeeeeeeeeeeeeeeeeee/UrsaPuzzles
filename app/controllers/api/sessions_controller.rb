class Api::SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      render json: user
    else
      # flash.now[:errors] = ["Invalid username or password"]
      render json: ["Invalid username or password"], status: 404
    end
  end

  def destroy
    user = current_user

    if user
      sign_out
      render json: user, status: 200
		else
			render json: ["Nobody signed in"], status: 404
		end
  end

end
