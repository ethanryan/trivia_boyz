Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :game, only: [:index, :new, :create, :show]
  resources :users, only: [:index, :new, :create, :show]
  resources :scores, only: [:index, :new, :create]
  resources :sessions
  root "game#show"
  # get "users", to: "users#index", as: "users" #trying this
  get "scores/high_scores", to: "scores#get_top_ten_scores"
  get "games/questions", to: "game#get_questions", as: "get_questions"
end
