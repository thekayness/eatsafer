class Comments < ActiveRecord::Migration[5.0]
  def change
  	create_table :comments do |t|
  		t.string :body
  		t.string :author
  		t.belongs_to :restaurant, index: true
  	end
  end
end
