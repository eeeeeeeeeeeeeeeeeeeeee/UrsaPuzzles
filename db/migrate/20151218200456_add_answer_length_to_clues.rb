class AddAnswerLengthToClues < ActiveRecord::Migration
  def change
    add_column :clues, :answer_length, :integer, null: false
  end
end
