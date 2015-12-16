class Game < ActiveRecord::Base
  validates :puzzle_id, :user_id, :won, :hints_used, presence: true

end
