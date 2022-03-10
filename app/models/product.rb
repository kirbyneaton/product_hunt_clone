class Product < ApplicationRecord

    validates :title, :subtitle, :description, presence:true

    has_many :comments
    belongs_to :user

end
