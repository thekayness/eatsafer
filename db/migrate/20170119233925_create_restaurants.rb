class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :vendor_type
      t.string :address
      t.string :city
      t.string :state
      t.string :lic_status
      t.string :license_no
      t.float :location
      t.float :lattitude

      t.timestamps
    end
  end
end
