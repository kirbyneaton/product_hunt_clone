class Comment < ApplicationRecord

    validates :body, presence:true

    has_many :commments
    belongs_to :product
    belongs_to :user
    belongs_to :comment, optional:true
end
