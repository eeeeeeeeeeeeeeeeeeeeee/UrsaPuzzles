# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



Puzzle.create!(title: "Monday 001",
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
              answer_grid: ['O','N','S','E','T',:black,'D','R','I','P',:black,'A','P','S','E',
                            'P','I','A','N','O',:black,'A','I','D','A',:black,'L','E','E','R',
                            'E','S','T','O','P',:black,'D','O','E','S',:black,'M','A','C','E',
                            'L','I','E','C','H','E','A','T','S','T','E','A','L',:black,:black,
                            :black,:black,:black,'H','A','Y',:black,:black,'T','E','R','M',:black,:black,:black,
                            'S','A','L',:black,'T','I','K','I',:black,'S','N','A','C','K','S',
                            'A','G','E','D',:black,'N','A','P','S',:black,'S','T','R','E','W',
                            'R','E','M','I','N','G','T','O','N','S','T','E','E','L','E',
                            'I','N','U','S','E',:black,'E','D','I','T',:black,'R','A','S','P',
                            'S','T','R','A','W','S',:black,'S','P','E','W',:black,'M','O','T',
                            :black,:black,:black,'S','E','T','S',:black,:black,'W','A','S',:black,:black,:black,
                            :black,:black,'S','T','R','O','N','G','A','S','S','T','E','E','L',
                            'F','A','T','E',:black,'P','A','L','L',:black,'H','E','A','V','E',
                            'I','G','O','R',:black,'I','K','E','A',:black,'E','L','V','I','S',
                            'B','O','W','S',:black,'T','E','E','S',:black,'R','E','E','L','S'
                           ])

Puzzle.create!(title: "Tuesday",
             author: "Oliver Hill / Will Shortz",
             difficulty: "easy",
             empty_grid: [1,2,3,4,5,6,:black,7,8,9,10,:black,11,12,13,
                          14,:white,:white,:white,:white,:white,:black,15,:white,:white,:white,:black,16,:white,:white,
                          17,:white,:white,:white,:white,:white,18,:white,:white,:white,:white,:black,19,:white,:white,
                          :black,:black,:black,:black,20,:white,:white,:black,21,:white,:white,22,:white,:white,:white,
                          23,24,25,:black,:black,26,:white,27,:black,28,:white,:white,:white,:white,:white,
                          29,:white,:white,30,31,:white,:white,:white,32,:black,:black,33,:white,:white,:white,
                          34,:white,:white,:white,:white,:white,:black,35,:white,36,37,:black,:black,:black,:black,
                          :black,38,:white,:white,:white,:white,39,:white,:white,:white,:white,40,41,42,:black,
                          :black,:black,:black,:black,43,:white,:white,:white,:black,44,:white,:white,:white,:white,45,
                          46,47,48,49,:black,:black,50,:white,51,:white,:white,:white,:white,:white,:white,
                          52,:white,:white,:white,53,54,:black,55,:white,:white,:black,:black,56,:white,:white,
                          57,:white,:white,:white,:white,:white,58,:black,59,:white,60,:black,:black,:black,:black,
                          61,:white,:white,:black,62,:white,:white,63,:white,:white,:white,64,65,66,67,
                          68,:white,:white,:black,69,:white,:white,:white,:black,70,:white,:white,:white,:white,:white,
                          71,:white,:white,:black,72,:white,:white,:white,:black,73,:white,:white,:white,:white,:white
                         ],
             answer_grid: ['A','T','O','M','I','C',:black,'A','C','T','V',:black,'C','D','S',
                           'R','I','V','E','R','A',:black,'B','O','R','E',:black,'H','E','N',
                           'C','A','I','N','A','N','D','A','B','E','L',:black,'E','R','A',
                           :black,:black,:black,:black,'N','O','R',:black,'B','E','D','L','A','M','P',
                           'O','B','I',:black,:black,'P','A','L',:black,'S','T','O','P','I','T',
                           'H','A','N','D','L','E','B','A','R',:black,:black,'S','O','S','O',
                           'S','C','R','E','E','N',:black,'M','E','G','S',:black,:black,:black,:black,
                           :black,'H','E','A','T','E','D','B','L','A','N','K','E','T',:black,
                           :black,:black,:black,:black,'A','R','O','D',:black,'R','E','I','N','I','N',
                           'I','C','E','D',:black,:black,'B','A','L','D','E','A','G','L','E',
                           'G','A','M','E','O','N',:black,'S','A','E',:black,:black,'R','E','D',
                           'E','N','A','B','L','E','D',:black,'I','N','A',:black,:black,:black,:black,
                           'T','O','I',:black,'S','W','I','T','C','H','B','L','A','D','E',
                           'I','L','L',:black,'O','L','G','A',:black,'O','C','E','L','O','T',
                           'T','A','S',:black,'N','Y','S','E',:black,'E','S','T','A','T','E'
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





Clue.create!(puzzle_id: 2, clue_number: 1, across: true, answer_length: 6, description: "Tiny");
Clue.create!(puzzle_id: 2, clue_number: 7, across: true, answer_length: 4, description: "End of a Shakespeare Play");
Clue.create!(puzzle_id: 2, clue_number: 11, across: true, answer_length: 3, description: "MP3 holders");
Clue.create!(puzzle_id: 2, clue_number: 14, across: true, answer_length: 6, description: "Artist Diego");
Clue.create!(puzzle_id: 2, clue_number: 15, across: true, answer_length: 4, description: "One who talks only about himself, say");
Clue.create!(puzzle_id: 2, clue_number: 16, across: true, answer_length: 3, description: "Egg layer");
Clue.create!(puzzle_id: 2, clue_number: 17, across: true, answer_length: 11, description: "Genesis duo");
Clue.create!(puzzle_id: 2, clue_number: 19, across: true, answer_length: 3, description: "Historical time");
Clue.create!(puzzle_id: 2, clue_number: 20, across: true, answer_length: 3, description: "Fish-fowl connector");
Clue.create!(puzzle_id: 2, clue_number: 21, across: true, answer_length: 7, description: "It's found on a nightstand"); # (or tolerate those who do), per the West Point honor code
Clue.create!(puzzle_id: 2, clue_number: 23, across: true, answer_length: 3, description: "___-Wan with the Force");
Clue.create!(puzzle_id: 2, clue_number: 26, across: true, answer_length: 3, description: "Chum");
Clue.create!(puzzle_id: 2, clue_number: 28, across: true, answer_length: 6, description: "'Enough!'");
Clue.create!(puzzle_id: 2, clue_number: 29, across: true, answer_length: 9, description: "Certain mustache shape");
Clue.create!(puzzle_id: 2, clue_number: 33, across: true, answer_length: 4, description: "Not great, but not awful either");
Clue.create!(puzzle_id: 2, clue_number: 34, across: true, answer_length: 6, description: "TV part");
Clue.create!(puzzle_id: 2, clue_number: 35, across: true, answer_length: 4, description: "Computer capacity, informally");
Clue.create!(puzzle_id: 2, clue_number: 38, across: true, answer_length: 13, description: "Means of staying toasty at night");
Clue.create!(puzzle_id: 2, clue_number: 43, across: true, answer_length: 4, description: "Yankee nickname starting in 2004");
Clue.create!(puzzle_id: 2, clue_number: 44, across: true, answer_length: 6, description: "Control, as expenses");
Clue.create!(puzzle_id: 2, clue_number: 46, across: true, answer_length: 4, description: "Treated, as a sprained ankle");
Clue.create!(puzzle_id: 2, clue_number: 50, across: true, answer_length: 9, description: "American symbol");
Clue.create!(puzzle_id: 2, clue_number: 52, across: true, answer_length: 6, description: "'Let's play!'");
Clue.create!(puzzle_id: 2, clue_number: 55, across: true, answer_length: 3, description: "Major coll. fraternity");
Clue.create!(puzzle_id: 2, clue_number: 56, across: true, answer_length: 3, description: "Sunburned");
Clue.create!(puzzle_id: 2, clue_number: 57, across: true, answer_length: 7, description: "Made possible");
Clue.create!(puzzle_id: 2, clue_number: 59, across: true, answer_length: 3, description: "'___ moment!' ('Don't rush me!')");
Clue.create!(puzzle_id: 2, clue_number: 61, across: true, answer_length: 3, description: "French pronoun");
Clue.create!(puzzle_id: 2, clue_number: 62, across: true, answer_length: 11, description: "Street weapon");
Clue.create!(puzzle_id: 2, clue_number: 68, across: true, answer_length: 3, description: "Under the weather");
Clue.create!(puzzle_id: 2, clue_number: 69, across: true, answer_length: 4, description: "Bond girl Kurylenko");
Clue.create!(puzzle_id: 2, clue_number: 70, across: true, answer_length: 5, description: "Spotted feline");
Clue.create!(puzzle_id: 2, clue_number: 71, across: true, answer_length: 3, description: "Profs.' helpers");
Clue.create!(puzzle_id: 2, clue_number: 72, across: true, answer_length: 4, description: "Wall Street inits.");
Clue.create!(puzzle_id: 2, clue_number: 73, across: true, answer_length: 5, description: "Darcy's Pemberley, e.g., in 'Pride and Prejudice'");

Clue.create!(puzzle_id: 2, clue_number: 1, across: false, answer_length: 3, description: "Parabola, e.g.");
Clue.create!(puzzle_id: 2, clue_number: 2, across: false, answer_length: 3, description: "___ Maria");
Clue.create!(puzzle_id: 2, clue_number: 3, across: false, answer_length: 3, description: "Prefix with duct");
Clue.create!(puzzle_id: 2, clue_number: 4, across: false, answer_length: 3, description: "Target audience of Details magazine");
Clue.create!(puzzle_id: 2, clue_number: 5, across: false, answer_length: 4, description: "Country with a Guardian Council");
Clue.create!(puzzle_id: 2, clue_number: 6, across: false, answer_length: 9, description: "One use of a Swiss Army knife");
Clue.create!(puzzle_id: 2, clue_number: 7, across: false, answer_length: 3, description: "Laywers' org.");
Clue.create!(puzzle_id: 2, clue_number: 8, across: false, answer_length: 4, description: "Ty with batting titles");
Clue.create!(puzzle_id: 2, clue_number: 9, across: false, answer_length: 5, description: "Sequoias, e.g.");
Clue.create!(puzzle_id: 2, clue_number: 10, across: false, answer_length: 5, description: "Open grassland");
Clue.create!(puzzle_id: 2, clue_number: 11, across: false, answer_length: 6, description: "Penny-pincher, slangily");
Clue.create!(puzzle_id: 2, clue_number: 12, across: false, answer_length: 6, description: "Skin layer");
Clue.create!(puzzle_id: 2, clue_number: 13, across: false, answer_length: 6, description: "Wake with a start");
Clue.create!(puzzle_id: 2, clue_number: 18, across: false, answer_length: 4, description: "Blah");
Clue.create!(puzzle_id: 2, clue_number: 22, across: false, answer_length: 3, description: "___ Lonely Boys (rock band)");
Clue.create!(puzzle_id: 2, clue_number: 23, across: false, answer_length: 3, description: "Cries of surprise");
Clue.create!(puzzle_id: 2, clue_number: 24, across: false, answer_length: 4, description: "'The Well-Tempered Clavier' composer");
Clue.create!(puzzle_id: 2, clue_number: 25, across: false, answer_length: 4, description: "Memo starter");
Clue.create!(puzzle_id: 2, clue_number: 27, across: false, answer_length: 7, description: "Greek L's");
Clue.create!(puzzle_id: 2, clue_number: 30, across: false, answer_length: 3, description: "Org. monitoring narcotics smuggling");
Clue.create!(puzzle_id: 2, clue_number: 31, across: false, answer_length: 4, description: "'___ thousand flowers bloom'");
Clue.create!(puzzle_id: 2, clue_number: 32, across: false, answer_length: 3, description: "Bible study: Abbr.");
Clue.create!(puzzle_id: 2, clue_number: 36, across: false, answer_length: 9, description: "Tool you can lean on");
Clue.create!(puzzle_id: 2, clue_number: 37, across: false, answer_length: 4, description: "Snick's partner");
Clue.create!(puzzle_id: 2, clue_number: 39, across: false, answer_length: 3, description: "When you entered this world: Abbr.");
Clue.create!(puzzle_id: 2, clue_number: 40, across: false, answer_length: 3, description: "Seoul-based automaker");
Clue.create!(puzzle_id: 2, clue_number: 41, across: false, answer_length: 4, description: "Hwy. planner");
Clue.create!(puzzle_id: 2, clue_number: 42, across: false, answer_length: 4, description: "10-point Q, e.g.");
Clue.create!(puzzle_id: 2, clue_number: 45, across: false, answer_length: 3, description: "Actor Beatty");
Clue.create!(puzzle_id: 2, clue_number: 46, across: false, answer_length: 6, description: "'That's clear'");
Clue.create!(puzzle_id: 2, clue_number: 47, across: false, answer_length: 6, description: "Kind of oil");
Clue.create!(puzzle_id: 2, clue_number: 48, across: false, answer_length: 6, description: "Contacts via the Net");
Clue.create!(puzzle_id: 2, clue_number: 49, across: false, answer_length: 3, description: "Girl with a coming-out party");
Clue.create!(puzzle_id: 2, clue_number: 51, across: false, answer_length: 4, description: "Secular");
Clue.create!(puzzle_id: 2, clue_number: 53, across: false, answer_length: 5, description: "Johnny who used to cry 'Come on down!'");
Clue.create!(puzzle_id: 2, clue_number: 54, across: false, answer_length: 5, description: "As of late");
Clue.create!(puzzle_id: 2, clue_number: 58, across: false, answer_length: 4, description: "Shovels");
Clue.create!(puzzle_id: 2, clue_number: 60, across: false, answer_length: 4, description: "Rudimentary education");
Clue.create!(puzzle_id: 2, clue_number: 63, across: false, answer_length: 3, description: "___ Bo");
Clue.create!(puzzle_id: 2, clue_number: 64, across: false, answer_length: 3, description: "Redo, in tennis");
Clue.create!(puzzle_id: 2, clue_number: 65, across: false, answer_length: 3, description: "___ mode");
Clue.create!(puzzle_id: 2, clue_number: 66, across: false, answer_length: 3, description: "Half of a colon");
Clue.create!(puzzle_id: 2, clue_number: 67, across: false, answer_length: 3, description: "Summer on the Seine");


User.create!(username: "Demo User", password: "password" )
 # Eugene T. Maleska
