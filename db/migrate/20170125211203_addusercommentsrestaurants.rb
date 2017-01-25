class Addusercommentsrestaurants < ActiveRecord::Migration[5.0]
  def change
  	add_reference :restaurants, :user_comment, index: true
  end
end
