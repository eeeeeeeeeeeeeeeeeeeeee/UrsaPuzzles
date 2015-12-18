class Clue < ActiveRecord::Base
  validates :puzzle_id, :clue_number, :description, presence: true
  # validates :across, inclusion: { in:  %w(true false) }


end
