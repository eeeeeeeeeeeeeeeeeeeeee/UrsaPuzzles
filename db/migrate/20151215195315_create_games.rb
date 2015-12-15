class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :puzzle_id, null: false
      t.integer :user_id, null: false
      t.boolean :won, default: false
      t.time :time_elapsed
      t.boolean :hints_used, default: false
      t.text :current_board_state

      t.timestamps null: false
    end

    add_index :games, :puzzle_id
    add_index :games, :user_id 
  end
end
