class CreateInsurances < ActiveRecord::Migration
  def change
    create_table :insurances do |t|
      t.string :name
      t.string :link
      t.text :categories

      t.timestamps
    end
  end
end
