class Api::CommentsController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]


    def show
        @comment = Comment.find(params[:id])
    end

    def create
        @comment = Comment.new(comment_params)
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
