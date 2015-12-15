# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Puzzle.create!(title: "test puzzle",
               author: "Claire Rogers",
               difficulty: "easy",
               empty_grid: [[:black, :blank, 1], [:blank, 2, :black], [3, :black, :blank]],
               answer_grid: [[nil, 'A', 'B'], ['C', 'D', nil], ['E', nil, 'F']])
