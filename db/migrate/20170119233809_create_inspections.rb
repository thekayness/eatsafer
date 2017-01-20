class CreateInspections < ActiveRecord::Migration[5.0]
  def change
    create_table :inspections do |t|
      t.integer :restaurant_id
      t.string :license_no
      t.string :lic_issue_date
      t.string :lic_exp_date
      t.string :result
      t.string :result_date
      t.string :viol_code
      t.string :viol_level
      t.string :viol_desc
      t.string :viol_date
      t.text :comments

      t.timestamps
    end
  end
end
