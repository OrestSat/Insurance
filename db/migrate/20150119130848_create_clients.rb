class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :name
      t.string :middle_name
      t.string :surname
      t.string :passport
      t.string :identification_number
      t.integer :user_id

      t.timestamps
    end
    add_index :clients, :passport, unique: true
    add_index :clients, :identification_number, unique: true
  end
end
