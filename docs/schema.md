# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## puzzles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author      | string    | not null
difficulty  | string    | not null, indexed, in ["easy", "medium", "hard"]
empty_grid  | array     | not null (2-d, each square is black, blank, or has number for clue)
full_grid   | array     | not null (2-d, each square is nil or a letter)

## clues
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
puzzle_id   | integer   | not null, foreign key, indexed
clue_number | integer   | not null, unique, indexed
across      | boolean   | not null (true = across, false = down)
description | string    | not null

## gameplay
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
puzzle_id   | integer   | not null, foreign key, indexed
user_id     | integer   | not null, foreign key, indexed
won         | boolean   | not null, default: false
time_elapsed| time      | (will be instantiated when user opens puzzle)
hints_used  | boolean   | not null, default: false
current_board_state | array   | not null, default: empty_grid via puzzle_id foreign key
