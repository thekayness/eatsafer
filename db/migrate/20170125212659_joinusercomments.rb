class Joinusercomments < ActiveRecord::Migration[5.0]
  def change
  	create_table :restaurant_user_comments, id: false do |t|
      t.integer :restaurant_id
      t.integer :user_comment_id
  	end
  end
end
