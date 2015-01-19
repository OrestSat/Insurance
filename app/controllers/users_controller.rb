class UsersController < ApplicationController
  protect_from_forgery with: :exception

  def show
    set_user
    render json: @user
  end

  def edit
  end
  
  def update
    set_user
    @user.update(username: params[:username])
    render json: @user
  end

	private

	def set_user
	  @user = User.find(params[:id])
	end
end