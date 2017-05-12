# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#add this: , question_ids: [1]

answers = Answer.create([

  #four letter words:
  {answer: 'boot', question_ids: [1]},
  {answer: 'luck', question_ids: [1]},
  {answer: 'shoe', question_ids: [1]},
  {answer: 'four', question_ids: [1]},
  {answer: 'fart', question_ids: [1]},

  {answer: 'blue', question_ids: [1]},
  {answer: 'deer', question_ids: [1]},
  {answer: 'male', question_ids: [1]},
  {answer: 'mail', question_ids: [1]},
  {answer: 'typo', question_ids: [1]},

  {answer: 'hart', question_ids: [1]},
  {answer: 'blow', question_ids: [1]},
  {answer: 'face', question_ids: [1]},
  {answer: 'book', question_ids: [1]},
  {answer: 'cool', question_ids: [1]},

  {answer: 'cage', question_ids: [1]},
  {answer: 'base', question_ids: [1]},
  {answer: 'case', question_ids: [1]},
  {answer: 'test', question_ids: [1]},
  {answer: 'best', question_ids: [1]},

  {answer: 'rest', question_ids: [1]},
  {answer: 'coin', question_ids: [1]},
  {answer: 'flip', question_ids: [1]},
  {answer: 'drop', question_ids: [1]},
  {answer: 'fire', question_ids: [1]},

  {answer: 'butt', question_ids: [1]},
  {answer: 'tomb', question_ids: [1]},
  {answer: 'ways', question_ids: [1]},
  {answer: 'wave', question_ids: [1]},
  {answer: 'type', question_ids: [1]},

  #five letter words:
  {answer: 'coins'},
  {answer: 'drive'},
  {answer: 'horse'},
  {answer: 'tests'},
  {answer: 'tents'},

  {answer: 'fires'},
  {answer: 'pests'},
  {answer: 'drops'},
  {answer: 'roots'},
  {answer: 'death'},

  {answer: 'first'},
  {answer: 'seven'},
  {answer: 'eight'},
  {answer: 'young'},
  {answer: 'tooth'},

  {answer: 'truth'},
  {answer: 'weeks'},
  {answer: 'years'},
  {answer: 'wrong'},
  {answer: 'rules'},

  {answer: 'blues'},
  {answer: 'nouns'},
  {answer: 'verbs'},
  {answer: 'jelly'},
  {answer: 'meats'},

  {answer: 'glass'},
  {answer: 'hello'},
  {answer: 'until'},
  {answer: 'queen'},
  {answer: 'kings'},

  {answer: 'fools'},
  {answer: 'rains'},
  {answer: 'still'},
  {answer: 'quick'},
  {answer: 'slime'},

  {answer: 'model'},
  {answer: 'chair'},
  {answer: 'floor'},
  {answer: 'pants'},
  {answer: 'shirt'},

  {answer: 'wheel'},
  {answer: 'nails'},
  {answer: 'teeth'},
  {answer: 'hairs'},
  {answer: 'table'},

  {answer: 'score'},
  {answer: 'shake'},
  {answer: 'prize'},
  {answer: 'cries'},
  {answer: 'click'},

  #20 more
  {answer: 'usman'},
  {answer: 'chris'},
  {answer: 'ethan'},
  {answer: 'toast'},
  {answer: 'mason'},

  {answer: 'quail'},
  {answer: 'sword'},
  {answer: 'pylon'},
  {answer: 'rifle'},
  {answer: 'fifty'},

  {answer: 'notes'},
  {answer: 'couch'},
  {answer: 'buggy'},
  {answer: 'utero'},
  {answer: 'torso'},

  {answer: 'coder'},
  {answer: 'typed'},
  {answer: 'lures'},
  {answer: 'weird'},
  {answer: 'cable'},


])
#
# question_answers = QuestionAnswer.create([
#   {question_id: 1, answer_id: 1},
#   {question_id: 1, answer_id: 2},
#   {question_id: 1, answer_id: 3},
#   {question_id: 1, answer_id: 4},
#   {question_id: 1, answer_id: 5},
#
#   {question_id: 1, answer_id: 6},
#   {question_id: 1, answer_id: 7},
#   {question_id: 1, answer_id: 8},
#   {question_id: 1, answer_id: 9},
#   {question_id: 1, answer_id: 10},
#
#   {question_id: 1, answer_id: 11},
#   {question_id: 1, answer_id: 12},
#   {question_id: 1, answer_id: 13},
#   {question_id: 1, answer_id: 14},
#   {question_id: 1, answer_id: 15},
#
#   {question_id: 1, answer_id: 16},
#   {question_id: 1, answer_id: 17},
#   {question_id: 1, answer_id: 18},
#   {question_id: 1, answer_id: 19},
#   {question_id: 1, answer_id: 20},
#
#   {question_id: 1, answer_id: 21},
#   {question_id: 1, answer_id: 22},
#   {question_id: 1, answer_id: 23},
#   {question_id: 1, answer_id: 24},
#   {question_id: 1, answer_id: 25},
# ])
