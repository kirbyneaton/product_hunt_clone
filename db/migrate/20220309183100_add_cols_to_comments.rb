class AddColsToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :product_id, :integer, null:false
    add_index :comments, :product_id
  end
end
