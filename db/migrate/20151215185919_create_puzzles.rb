class CreatePuzzles < ActiveRecord::Migration
  def change
    create_table :puzzles do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :difficulty, null: false
      t.text :empty_grid, null: false
      t.text :answer_grid, null: false

      t.timestamps null: false
    end

    add_index :puzzles, :difficulty
  end
end
