class Api::ProductsController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]

    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find(params[:id])
    end

    def create
        @product = Product.new(product_params)
        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 401
        end
    end

    private
  
    def product_params
        params.require(:product).permit(:title, :description)
    end
end
