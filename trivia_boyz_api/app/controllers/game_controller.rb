class GameController < ApplicationController
  def show
    @question = Question.first
    render json: @question
  end
end
