class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create # post /users
    @user = User.build_with(user_params).find_or_create_by(params[:name])
    if @user.high_score < params[:current_score]
      @user.high_score = params[:current_score]
      @user.save
    end
  end

  def show
    @user = User.find(params[:id])
    #render json
  end

  private

  def user_params
    params.require(:user).permit(:name, :password)
  end
end
