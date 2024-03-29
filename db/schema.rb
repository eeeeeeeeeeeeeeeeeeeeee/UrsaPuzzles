# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151223184612) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clues", force: :cascade do |t|
    t.integer  "puzzle_id",     null: false
    t.integer  "clue_number",   null: false
    t.boolean  "across",        null: false
    t.string   "description",   null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "answer_length", null: false
  end

  add_index "clues", ["clue_number"], name: "index_clues_on_clue_number", using: :btree
  add_index "clues", ["puzzle_id"], name: "index_clues_on_puzzle_id", using: :btree

  create_table "games", force: :cascade do |t|
    t.integer  "puzzle_id",                           null: false
    t.integer  "user_id",                             null: false
    t.boolean  "won",                 default: false
    t.boolean  "hints_used",          default: false
    t.text     "current_board_state"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "time_elapsed",        default: 0
  end

  add_index "games", ["puzzle_id"], name: "index_games_on_puzzle_id", using: :btree
  add_index "games", ["user_id"], name: "index_games_on_user_id", using: :btree

  create_table "puzzles", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "author",      null: false
    t.string   "difficulty",  null: false
    t.text     "empty_grid",  null: false
    t.text     "answer_grid", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "puzzles", ["difficulty"], name: "index_puzzles_on_difficulty", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
