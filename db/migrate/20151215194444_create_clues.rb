class CreateClues < ActiveRecord::Migration
  def change
    create_table :clues do |t|
      t.integer :puzzle_id, null: false
      t.integer :clue_number, null: false
      t.boolean :across, null: false
      t.string :description, null: false

      t.timestamps null: false
    end

    add_index :clues, :puzzle_id
    add_index :clues, :clue_number
  end
end
