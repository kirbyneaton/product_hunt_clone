class Api::CommentsController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]

    def index
        @comments = Product.find(params[:product_id]).comments.includes(:user)
        render :index
    end

    def show
        @comment = Comment.find(params[:id])
    end

    def create
        @comment = current_user.comments.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    private
  
    def comment_params
        params.require(:comment).permit(:body)
    end
end
