# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



Puzzle.create!(title: "Monday 001 (play me!)",
              author: "Mike Torch / Will Shortz",
              difficulty: "easy",
              empty_grid: [1,2,3,4,5,:black,6,7,8,9,:black,10,11,12,13,
                           14,:white,:white,:white,:white,:black,15,:white,:white,:white,:black,16,:white,:white,:white,
                           17,:white,:white,:white,:white,:black,18,:white,:white,:white,:black,19,:white,:white,:white,
                           20,:white,:white,:white,:white,21,:white,:white,:white,:white,22,:white,:white,:black,:black,
                           :black,:black,:black,23,:white,:white,:black,:black,24,:white,:white,:white,:black,:black,:black,
                           25,26,27,:black,28,:white,29,30,:black,31,:white,:white,32,33,34,
                           35,:white,:white,36,:black,37,:white,:white,38,:black,39,:white,:white,:white,:white,
                           40,:white,:white,:white,41,:white,:white,:white,:white,42,:white,:white,:white,:white,:white,
                           43,:white,:white,:white,:white,:black,44,:white,:white,:white,:black,45,:white,:white,:white,
                           46,:white,:white,:white,:white,47,:black,48,:white,:white,49,:black,50,:white,:white,
                           :black,:black,:black,51,:white,:white,52,:black,:black,53,:white,54,:black,:black,:black,
                           :black,:black,55,:white,:white,:white,:white,56,57,:white,:white,:white,58,59,60,
                           61,62,:white,:white,:black,63,:white,:white,:white,:black,64,:white,:white,:white,:white,
                           65,:white,:white,:white,:black,66,:white,:white,:white,:black,67,:white,:white,:white,:white,
                           68,:white,:white,:white,:black,69,:white,:white,:white,:black,70,:white,:white,:white,:white
                          ],
              answer_grid: ['O','N','S','E','T',nil,'D','R','I','P',nil,'A','P','S','E',
                            'P','I','A','N','O',nil,'A','I','D','A',nil,'L','E','E','R',
                            'E','S','T','O','P',nil,'D','O','E','S',nil,'M','A','C','E',
                            'L','I','E','C','H','E','A','T','S','T','E','A','L',nil,nil,
                            nil,nil,nil,'H','A','Y',nil,nil,'T','E','R','M',nil,nil,nil,
                            'S','A','L',nil,'T','I','K','I',nil,'S','N','A','C','K','S',
                            'A','G','E','D',nil,'N','A','P','S',nil,'S','T','R','E','W',
                            'R','E','M','I','N','G','T','O','N','S','T','E','E','L','E',
                            'I','N','U','S','E',nil,'E','D','I','T',nil,'R','A','S','P',
                            'S','T','R','A','W','S',nil,'S','P','E','W',nil,'M','O','T',
                            nil,nil,nil,'S','E','T','S',nil,nil,'W','A','S',nil,nil,nil,
                            nil,nil,'S','T','R','O','N','G','A','S','S','T','E','E','L',
                            'F','A','T','E',nil,'P','A','L','L',nil,'H','E','A','V','E',
                            'I','G','O','R',nil,'I','K','E','A',nil,'E','L','V','I','S',
                            'B','O','W','S',nil,'T','E','E','S',nil,'R','E','E','L','S'
                           ])

Puzzle.create!(title: "test puzzle",
               author: "Claire Rogers",
               difficulty: "easy",
               empty_grid: [[:black, :blank, 1], [:blank, 2, :black], [3, :black, :blank]],
               answer_grid: [[nil, 'A', 'B'], ['C', 'D', nil], ['E', nil, 'F']])

Puzzle.create!(title: "Wednesday Sample",
              author: "Haloumi",
              difficulty: "medium",
              empty_grid: [[:blank, 1, 2], [:black, 3, :black], [:blank, 4, 5]],
              answer_grid: [['A', 'B', 'C'], [nil, 'D', nil], ['E', 'X', 'F']])

Puzzle.create!(title: "Saturday Puzzle",
              author: "Summer Joy",
              difficulty: "hard",
              empty_grid: [[:blank, 1, 2], [:black, 3, :black], [:blank, 4, 5]],
              answer_grid: [['A', 'B', 'C'], [nil, 'D', nil], ['E', 'X', 'F']])

Puzzle.create!(title: "Friday Toughie",
              author: "Topper",
              difficulty: "hard",
              empty_grid: [[:blank, 1, 2], [:black, 3, :black], [:blank, 4, 5]],
              answer_grid: [['A', 'B', 'C'], [nil, 'D', nil], ['E', 'X', 'F']])

Puzzle.create!(title: "Another Friday Toughie",
              author: "Egbert Souse",
              difficulty: "hard",
              empty_grid: [[:blank, 1, 2], [:black, 3, :black], [:blank, 4, 5]],
              answer_grid: [['A', 'B', 'C'], [nil, 'D', nil], ['E', 'X', 'F']])

Puzzle.create!(title: "Not too tough",
              author: "Rod Dibbles",
              difficulty: "medium",
              empty_grid: [[:blank, 1, 2], [:black, 3, :black], [:blank, 4, 5]],
              answer_grid: [['A', 'B', 'C'], [nil, 'D', nil], ['E', 'X', 'F']])



Clue.create!(puzzle_id: 1, clue_number: 1, across: true, answer_length: 5, description: "Beginning");
Clue.create!(puzzle_id: 1, clue_number: 6, across: true, answer_length: 4, description: "What icicles do");
Clue.create!(puzzle_id: 1, clue_number: 10, across: true, answer_length: 4, description: "Church recess");
Clue.create!(puzzle_id: 1, clue_number: 14, across: true, answer_length: 5, description: "Baby grand, e.g.");
Clue.create!(puzzle_id: 1, clue_number: 15, across: true, answer_length: 4, description: "Musical set in ancient Egypt");
Clue.create!(puzzle_id: 1, clue_number: 16, across: true, answer_length: 4, description: "Lecherous look");
Clue.create!(puzzle_id: 1, clue_number: 17, across: true, answer_length: 5, description: "Prevent legally");
Clue.create!(puzzle_id: 1, clue_number: 18, across: true, answer_length: 4, description: "Bucks' mates");
Clue.create!(puzzle_id: 1, clue_number: 19, across: true, answer_length: 4, description: "Riot spray");
Clue.create!(puzzle_id: 1, clue_number: 20, across: true, answer_length: 13, description: "What a cadet won't do"); # (or tolerate those who do), per the West Point honor code
Clue.create!(puzzle_id: 1, clue_number: 23, across: true, answer_length: 3, description: "Bale contents");
Clue.create!(puzzle_id: 1, clue_number: 24, across: true, answer_length: 4, description: "Four years for a U.S. president");
Clue.create!(puzzle_id: 1, clue_number: 25, across: true, answer_length: 3, description: "'My Gal' of song");
Clue.create!(puzzle_id: 1, clue_number: 28, across: true, answer_length: 4, description: "Kind of torch on 'Survivor'");
Clue.create!(puzzle_id: 1, clue_number: 31, across: true, answer_length: 6, description: "Noshes");
Clue.create!(puzzle_id: 1, clue_number: 35, across: true, answer_length: 4, description: "Old");
Clue.create!(puzzle_id: 1, clue_number: 37, across: true, answer_length: 4, description: "Siestas");
Clue.create!(puzzle_id: 1, clue_number: 39, across: true, answer_length: 5, description: "Spread around");
Clue.create!(puzzle_id: 1, clue_number: 40, across: true, answer_length: 15, description: "TV title role for Pierce Brosnan");
Clue.create!(puzzle_id: 1, clue_number: 43, across: true, answer_length: 5, description: "Occupied, as a restroom");
Clue.create!(puzzle_id: 1, clue_number: 44, across: true, answer_length: 4, description: "Blue-pencil");
Clue.create!(puzzle_id: 1, clue_number: 45, across: true, answer_length: 4, description: "Coarse file");
Clue.create!(puzzle_id: 1, clue_number: 46, across: true, answer_length: 6, description: "They're stuck in milk shakes");
Clue.create!(puzzle_id: 1, clue_number: 48, across: true, answer_length: 4, description: "Eject in all directions");
Clue.create!(puzzle_id: 1, clue_number: 50, across: true, answer_length: 3, description: "Bon ___ (witticism)");
Clue.create!(puzzle_id: 1, clue_number: 51, across: true, answer_length: 4, description: "Studio stages");
Clue.create!(puzzle_id: 1, clue_number: 53, across: true, answer_length: 3, description: "Lived");
Clue.create!(puzzle_id: 1, clue_number: 55, across: true, answer_length: 13, description: "Supertough");
Clue.create!(puzzle_id: 1, clue_number: 61, across: true, answer_length: 4, description: "Destiny");
Clue.create!(puzzle_id: 1, clue_number: 63, across: true, answer_length: 4, description: "Become tiresome");
Clue.create!(puzzle_id: 1, clue_number: 64, across: true, answer_length: 5, description: "Throw, as a shot put");
Clue.create!(puzzle_id: 1, clue_number: 65, across: true, answer_length: 4, description: "Dr. Frankenstein's assistant");
Clue.create!(puzzle_id: 1, clue_number: 66, across: true, answer_length: 4, description: "Swedish furniture giant");
Clue.create!(puzzle_id: 1, clue_number: 67, across: true, answer_length: 5, description: "50's-60's singing sensation");
Clue.create!(puzzle_id: 1, clue_number: 68, across: true, answer_length: 4, description: "Violinists' needs");
Clue.create!(puzzle_id: 1, clue_number: 69, across: true, answer_length: 4, description: "Golf pegs");
Clue.create!(puzzle_id: 1, clue_number: 70, across: true, answer_length: 5, description: "Fishing rod attachments");

Clue.create!(puzzle_id: 1, clue_number: 1, across: false, answer_length: 4, description: "European car");
Clue.create!(puzzle_id: 1, clue_number: 2, across: false, answer_length: 4, description: "Not yet final, at law");
Clue.create!(puzzle_id: 1, clue_number: 3, across: false, answer_length: 4, description: "Completely fill, as a hungry person");
Clue.create!(puzzle_id: 1, clue_number: 4, across: false, answer_length: 5, description: "Tunnyson's ___ Arden");
Clue.create!(puzzle_id: 1, clue_number: 5, across: false, answer_length: 6, description: "Attire accompying a cane");
Clue.create!(puzzle_id: 1, clue_number: 6, across: false, answer_length: 4, description: "Early baby word");
Clue.create!(puzzle_id: 1, clue_number: 7, across: false, answer_length: 4, description: "Prison unrest");
Clue.create!(puzzle_id: 1, clue_number: 8, across: false, answer_length: 5, description: "That is, in Latin");
Clue.create!(puzzle_id: 1, clue_number: 9, across: false, answer_length: 6, description: "Affixes in a scrapbook, say");
Clue.create!(puzzle_id: 1, clue_number: 10, across: false, answer_length: 9, description: "School for which one feels nostalgic");
Clue.create!(puzzle_id: 1, clue_number: 11, across: false, answer_length: 4, description: "Ring");
Clue.create!(puzzle_id: 1, clue_number: 12, across: false, answer_length: 3, description: "'Just a ___!' ('Hold on!')");
Clue.create!(puzzle_id: 1, clue_number: 13, across: false, answer_length: 3, description: "Before, in verse");
Clue.create!(puzzle_id: 1, clue_number: 21, across: false, answer_length: 5, description: "Watching intently");
Clue.create!(puzzle_id: 1, clue_number: 22, across: false, answer_length: 5, description: "Artist Max");
Clue.create!(puzzle_id: 1, clue_number: 25, across: false, answer_length: 5, description: "Calcutta dresses");
Clue.create!(puzzle_id: 1, clue_number: 26, across: false, answer_length: 5, description: "Ten-percenter");
Clue.create!(puzzle_id: 1, clue_number: 27, across: false, answer_length: 5, description: "Tree-dwelling primate");
Clue.create!(puzzle_id: 1, clue_number: 29, across: false, answer_length: 4, description: "Shakespearean shrew");
Clue.create!(puzzle_id: 1, clue_number: 30, across: false, answer_length: 5, description: "Devices getting music downloads");
Clue.create!(puzzle_id: 1, clue_number: 32, across: false, answer_length: 5, description: "It's skimmed off the top");
Clue.create!(puzzle_id: 1, clue_number: 33, across: false, answer_length: 5, description: "Kutcher character on 'That 70's Show'");
Clue.create!(puzzle_id: 1, clue_number: 34, across: false, answer_length: 5, description: "Took the World Series in four games");
Clue.create!(puzzle_id: 1, clue_number: 36, across: false, answer_length: 9, description: "Hurricanes, fires, etc.");
Clue.create!(puzzle_id: 1, clue_number: 38, across: false, answer_length: 4, description: "Scissors cut");
Clue.create!(puzzle_id: 1, clue_number: 41, across: false, answer_length: 5, description: "More modern");
Clue.create!(puzzle_id: 1, clue_number: 42, across: false, answer_length: 5, description: "Frets");
Clue.create!(puzzle_id: 1, clue_number: 47, across: false, answer_length: 6, description: "'Quit that!'");
Clue.create!(puzzle_id: 1, clue_number: 49, across: false, answer_length: 6, description: "Laundromat fixture");
Clue.create!(puzzle_id: 1, clue_number: 52, across: false, answer_length: 5, description: "What a charmer may charm");
Clue.create!(puzzle_id: 1, clue_number: 54, across: false, answer_length: 5, description: "Inscribed pillar");
Clue.create!(puzzle_id: 1, clue_number: 55, across: false, answer_length: 4, description: "Put away for later");
Clue.create!(puzzle_id: 1, clue_number: 56, across: false, answer_length: 4, description: "Merriment");
Clue.create!(puzzle_id: 1, clue_number: 57, across: false, answer_length: 4, description: "'Tis a shame'");
Clue.create!(puzzle_id: 1, clue_number: 58, across: false, answer_length: 4, description: "Icicle's place");
Clue.create!(puzzle_id: 1, clue_number: 59, across: false, answer_length: 4, description: "Blackhearted");
Clue.create!(puzzle_id: 1, clue_number: 60, across: false, answer_length: 4, description: "Not so much");
Clue.create!(puzzle_id: 1, clue_number: 61, across: false, answer_length: 3, description: "Little lie");
Clue.create!(puzzle_id: 1, clue_number: 62, across: false, answer_length: 3, description: "'Long ___...'");


User.create!(username: "Demo User", password: "password" )
 # Eugene T. Maleska
