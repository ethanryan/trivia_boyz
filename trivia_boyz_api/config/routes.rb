Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :game, only: [:new, :create, :show]
  resources :users, only: [:index, :new, :create, :show]
  resources :sessions
  root "game#show"
  get "games/highscore", to: "game#highscore", as: "highscore"
  get "games/questions", to: "game#get_questions", as: "get_questions"
end
