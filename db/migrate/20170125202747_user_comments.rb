class UserComments < ActiveRecord::Migration[5.0]
  def change
  	create_table :user_comments do |t|
  		t.string :body
  		t.string :author
  		t.belongs_to :restaurant, index: true
  	end
  end
end
