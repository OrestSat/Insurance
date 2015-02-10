class AbilitiesController < ApplicationController

  def index
    @abilities = Ability.where(insurance_id: params[:insurance_id], category_id: params[:category_id])
    
    render json: @abilities
  end

  def show
    
  end

  def update
  end

  def create
  end

  def destroy
  end

end
