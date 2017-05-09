class UserController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.save # account for saving bad data?
    # render json
  end

  def show
    @user = User.find(params[:id])
    #render json
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :high_score, :current_score)
  end
end
