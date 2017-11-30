class ScoresController < ApplicationController

  def index
    scores = Score.all
    render json: scores
  end

  def get_top_ten_scores
    top_ten = Score.all.sort_by {|score| score.score}.reverse
    top_ten = top_ten.first(10)
    render json: top_ten
  end

  def new
  end

  def create
    score = Score.new(score_params)
    score.save
    render json: score
  end

  private

  def score_params
    params.require(:score).permit(:score, :username)
  end

end
