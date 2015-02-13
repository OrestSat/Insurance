class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end

  def create
    @category = Category.new category_safe_params
    if @category.save
      render json: @category
    else
      render json: {response: error}
    end
  end

  def update
  end

  def destroy
    category = Category.find params[:id]
    category.destroy
    render category
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end

  def category_safe_params
    params.require(:category).permit(:name)
  end

end