class AddImgUrlToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :img_url, :string
    add_column :products, :subtitle, :string, null:false
  end
end
