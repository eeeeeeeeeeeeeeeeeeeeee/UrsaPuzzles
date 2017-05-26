Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :games, only: [:update]

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :puzzles, only: [:index, :show]
    resources :games, only: [:create]
    resources :users, only: [:create, :update, :show, :index]
  end

  get "*path", to: "static_pages#root"
end
