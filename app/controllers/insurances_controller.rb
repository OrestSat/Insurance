class InsurancesController < ApplicationController

  before_action :set_insurance, only: [:show, :update, :destroy] 

  def index
    @insurances = Insurance.all
    render json: @insurances
  end

  def show
    render json: @insurance
  end

  def create
    @insurance = Insurance.new insurance_secure_params
    if @insurance.save
      render json: @insurance
    else
      render json: @insurance.error
    end
  end

  def update
  end

  def destroy
    @insurance.destroy
    render json: @insurance
  end

  private

  def set_insurance
    @insurance = Insurance.find(params[:id])
  end

  def insurance_secure_params
    params.require(:insurance).permit(:name, :link)
  end
end
