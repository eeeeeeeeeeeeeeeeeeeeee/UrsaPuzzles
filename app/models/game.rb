class Game < ActiveRecord::Base
  validates :puzzle_id, :user_id, presence: true

end
