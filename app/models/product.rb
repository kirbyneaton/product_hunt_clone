class Product < ApplicationRecord

    validates :title, :subtitle, :description, presence:true

    has_many :comments
    belongs_to :user

    def comment_count
        @comment_count = comments.length
    end

    def username
        @username = user.username
    end
end
