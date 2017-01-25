class Addcolumntorestaurants < ActiveRecord::Migration[5.0]
  def change
  	add_reference :restaurants, :inspection, index: true
  end
end
