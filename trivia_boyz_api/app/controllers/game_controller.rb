class GameController < ApplicationController
  def show
    @question = Question.first
    @answers = Answer.all
    render json: { q: @question, a: @answers }
  end
end
