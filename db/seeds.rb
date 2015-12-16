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

Puzzle.create!(title: "puzzle 2",
              author: "kirkpatrick",
              difficulty: "medium",
              empty_grid: [[:blank, 1, 2], [:black, 3, :black], [:blank, 4, 5]],
              answer_grid: [['A', 'B', 'C'], [nil, 'D', nil], ['E', 'X', 'F']])

Puzzle.create!(title: "Monday 001",
              author: "Mike Torch / Will Shortz",
              difficulty: "easy",
              empty_grid: [[1,2,3,4,5,:black,6,7,8,9,:black,10,11,12,13],
                           [14,:white,:white,:white,:white,:black,15,:white,:white,:white,:black,16,:white,:white,:white],
                           [17,:white,:white,:white,:white,:black,18,:white,:white,:white,:black,19,:white,:white,:white],
                           [20,:white,:white,:white,:white,21,:white,:white,:white,:white,22,:white,:white,:black,:black],
                           [:black,:black,:black,23,:white,:white,:black,:black,24,:white,:white,:white,:black,:black,:black],
                           [25,26,27,:black,28,:white,29,30,:black,31,:white,:white,32,33,34],
                           [35,:white,:white,36,:black,37,:white,:white,38,:black,39,:white,:white,:white,:white],
                           [40,:white,:white,:white,41,:white,:white,:white,:white,42,:white,:white,:white,:white,:white],
                           [43,:white,:white,:white,:white,:black,44,:white,:white,:white,:black,45,:white,:white,:white],
                           [46,:white,:white,:white,:white,47,:black,48,:white,:white,49,:black,:50,:white,:white],
                           [:black,:black,:black,51,:white,:white,52,:black,:black,53,:white,54,:black,:black,:black],
                           [:black,:black,55,:white,:white,:white,:white,56,57,:white,:white,:white,58,59,60],
                           [61,62,:white,:white,:black,63,:white,:white,:white,:black,64,:white,:white,:white,:white],
                           [65,:white,:white,:white,:black,66,:white,:white,:white,:black,67,:white,:white,:white,:white],
                           [68,:white,:white,:white,:black,69,:white,:white,:white,:black,70,:white,:white,:white,:white]
                          ],
              answer_grid: [['O','N','S','E','T',nil,'D','R','I','P',nil,'A','P','S','E'],
                            ['P','I','A','N','O',nil,'A','I','D','A',nil,'L','E','E','R'],
                            ['E','S','T','O','P',nil,'D','O','E','S',nil,'M','A','C','E'],
                            ['L','I','E','C','H','E','A','T','S','T','E','A','L',nil,nil],
                            [nil,nil,nil,'H','A','Y',nil,nil,'T','E','R','M',nil,nil,nil],
                            ['S','A','L',nil,'T','I','K','I',nil,'S','N','A','C','K','S'],
                            ['A','G','E','D',nil,'N','A','P','S',nil,'S','T','R','E','W'],
                            ['R','E','M','I','N','G','T','O','N','S','T','E','E','L','E'],
                            ['I','N','U','S','E',nil,'E','D','I','T',nil,'R','A','S','P'],
                            ['S','T','R','A','W','S',nil,'S','P','E','W',nil,'M','O','T'],
                            [nil,nil,nil,'S','E','T','S',nil,nil,'W','A','S',nil,nil,nil],
                            [nil,nil,'S','T','R','O','N','G','A','S','S','T','E','E','L'],
                            ['F','A','T','E',nil,'P','A','L','L',nil,'H','E','A','V','E'],
                            ['I','G','O','R',nil,'I','K','E','A',nil,'E','L','V','I','S'],
                            ['B','O','W','S',nil,'T','E','E','S',nil,'R','E','E','L','S'],
                           ])
