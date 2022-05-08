class Api::CommentsController < ApplicationController

    # before_action :ensure_logged_in, only: [:create, :destroy]

    def index
        @comments = Product.find(params[:product_id]).comments.includes(:user)
        render :index
    end

    def show
        @comment = Comment.find(params[:id])
    end

    def create
        if current_user
            @comment = Comment.new(comment_params)
            @comment.user_id = current_user.id
            @comment.product_id = params[:product_id]
            # current_user.comments.new(comment_params)
            if @comment.save
                render :show
            else
                # debugger
                render json: @comment.errors.full_messages, status: 401
            end
        else
            debugger
            render json: {errors: "Log in to comment"}, status: 401
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        # debugger
        if @comment && @comment.destroy
            render json: {}, status: 200
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    private
  
    def comment_params
        params.require(:comment).permit(:body)
    end
end
