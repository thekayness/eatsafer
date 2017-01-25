class Addindexes < ActiveRecord::Migration[5.0]

  	  def change
    create_table :restaurant_inspections, id: false do |t|
      t.integer :restaurant_id
      t.integer :inspection_id
    end
    end

end
