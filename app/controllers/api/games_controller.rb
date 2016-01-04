class Api::GamesController < ApplicationController

  def create
    puzzle_id = game_params[:puzzle_id]
    puzzle = Puzzle.find_by(id: puzzle_id)

    user_id = current_user.id
    time_elapsed = 0;
    current_board_state = puzzle.empty_grid

    game = Game.create!(puzzle_id: puzzle_id,
                    user_id: user_id,
                    time_elapsed: Time.now(),
                    current_board_state: current_board_state)

    clues = Clue.where("puzzle_id = ?", game_params[:puzzle_id])
    render json: {game: game, puzzle: puzzle, clues: clues}
  end

  private
  def game_params
    params.require(:game).permit(:puzzle_id)
  end
end
