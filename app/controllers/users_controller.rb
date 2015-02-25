class UsersController < ApplicationController
  protect_from_forgery with: :exception
  before_filter :authenticate_user!

  def index
    @users = User.all
    authorize User
    response = []
    @users.each do |user|
      resp = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        status: user.status
      }
      if user.manager
        resp2 = {
          manager: user.manager.username
        }
        resp.merge! resp2
      end
      response << resp
    end
    render json: response
  end

  def show
    set_user
    authorize @user
    render json: @user
  end
  
  def update
    set_user
    authorize @user
    if @user.update (user_secure_params)
      render json: @user
    else
      render json: {response: "Unable to update user"}
    end
  end

  def destroy
    user = User.find(params[:id])
    authorize user
    user.destroy
    render json: {response: "success"}
  end

	private

  def user_secure_params
    # if @user.admin?
      params.require(:user).permit(:role, :status)
    # else
    #   params.require(:user).permit(:email, :username)
    # end
  end

	def set_user
	  @user = User.find(params[:id])
	end
end