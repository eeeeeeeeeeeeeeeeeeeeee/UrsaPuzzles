
desc "This task is called by the Heroku scheduler add-on"

task :reset_guest_puzzles => :environment do
  puts "Resetting guest puzzles"

  demo_games = Game.where(user_id: 1)
  demo_games.each { |game| game.delete }
end
