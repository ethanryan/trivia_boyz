Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :game, only: [:new, :create, :show]
  resources :users, only: [:index, :new, :create, :show]
  resources :sessions
  root "game#show"
end
