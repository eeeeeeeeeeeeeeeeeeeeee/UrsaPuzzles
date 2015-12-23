class ChangeTimeElapsedToInteger < ActiveRecord::Migration
  def change
    remove_column :games, :time_elapsed
    add_column :games, :time_elapsed, :integer, default: 0

  end
end
