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
    @category = Category.find_by name: params[:category_name]
    @ability = Ability.new({:category_id => @category.id, :insurance_id => params[:insurance_id]})
    if @ability.save
      render json: @ability
    else
      render json: {response: @ability.error}
    end
  end

  def destroy
  end

  private

  def ability_params
    params.require(:ability).permit(:price, :description)
  end

end
