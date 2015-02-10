class BlanksController < ApplicationController

  before_action :set_client, only: [:show, :update, :destroy]   

  def index
    @blanks = Blank.all
    render json: @blanks
  end

  def show
    render json: @blank
  end

  def create
    @blank = Blank.new blank_secure_params
    @blank.user = current_user
    @blank.coming = params[:coming_id]
    if @blank.save
      render json: @blank
    else
      render json: @blank.error
    end
  end

  def update
  end

  def destroy
    @blank.destroy
    render json: @blank
  end

  private

  def set_blank
    @blank = Blank.find(params[:id])
  end

  def blank_secure_params
    params.require(:blank).permit(:type, :status)
  end
end
