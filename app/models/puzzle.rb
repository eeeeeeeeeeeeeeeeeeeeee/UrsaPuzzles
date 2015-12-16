class Puzzle < ActiveRecord::Base
  serialize :empty_grid, JSON
  serialize :answer_grid, JSON

  validates :title, :author, :difficulty, :empty_grid, :answer_grid, presence: true
  validates :difficulty, inclusion: { in: %w(easy medium hard) }


end
