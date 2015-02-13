class CreateAbilities < ActiveRecord::Migration
  def change
    create_table :abilities do |t|
      t.belongs_to :insurance, index: true
      t.belongs_to :category, index: true
      t.float :price
      t.string :description
      t.timestamps
    end
  end
end
