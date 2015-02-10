class CreateBlanks < ActiveRecord::Migration
  def change
    create_table :blanks do |t|
      t.string :type
      t.string :status
      t.string :code
      t.string :user_id
      t.integer :coming_id
      t.date :written_off
      t.timestamps
    end
  end
end
