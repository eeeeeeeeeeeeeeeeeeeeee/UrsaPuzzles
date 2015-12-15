class Api::PuzzlesController < ApplicationController

  def index
    puzzles = Puzzle.all
    render json: puzzles
  end

end
