class GameController < ApplicationController
  def show
    @question = Question.first
    @answers = Answer.all
    render json: { q: @question, a: @answers }
  end
  def new
  end
  def create
    if (!User.find_by(username: game_params[:username]))
      user = User.find_or_create_by(game_params)
      user.update(high_score: game_params[:current_score])

    else
      user = User.find_by(username: game_params[:username])

      if(game_params[:current_score].to_i > user.high_score )
        user.update(high_score: game_params[:current_score])
      end
      user.update(game_params)
    end

    render json: user
  end
  def highscore()

    high_scores = User.order('high_score desc').limit(5)
    i = 0
    all_users_with_high_scores = high_scores.map do |user|
      "#{i = i + 1}. #{user.username}: #{user.high_score}"
    end
    render json: all_users_with_high_scores
  end
  def get_questions
    questions = Question.pluck("question")
    render json: questions
  end
  private
  def game_params
    params.require(:gameInfo).permit(:username, :current_score)
  end
end
