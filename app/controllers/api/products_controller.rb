class Api::ProductsController < ApplicationController
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
    # before_action :ensure_logged_in, only: [:create, :destroy]

    def index
        @products = Product.all.includes(:comments)
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
            render json: @product.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @product = Product.find(params[:id])
        if @product && @product.update_attributes(product_params)
            render :show
        elsif !@product
            render json: ['Product not found'], status: 400
        else
            render json: @product.errors.full_messages, status: 401
        end
    end

    def destroy
        @product = Product.find(params[:id])
        if @product && @product.destroy
            render json: {}, status: 200
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    private
  
    def product_params
        params.require(:product).permit(:title, :subtitle, :description, :img_url, :user_id)
    end
end
