class Api::PuzzlesController < ApplicationController

  def index
    puzzles = Puzzle.all
    render json: puzzles
  end

  def show
    puzzle = Puzzle.find_by(id: params[:id])
    # render json: puzzle
    clues = Clue.where("puzzle_id = ?", params[:id])
    render json: {puzzle: puzzle, clues: clues}
  end

  private
  def puzzle_params
    params.require(:puzzle).permit(:id)
  end

end
