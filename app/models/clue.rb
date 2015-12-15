class Clue < ActiveRecord::Base
  validates :puzzle_id, :clue_number, :across, :description, presence: true

  
end
