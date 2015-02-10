class CreateComings < ActiveRecord::Migration
  def change
    create_table :comings do |t|
      t.date :date
      t.integer :insurance_id
      t.integer :count

      t.timestamps
    end
  end
end
