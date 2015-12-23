Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create, :show, :update]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :puzzles, only: [:index, :show]
    resources :games, only: [:create]
    resources :users, only: [:show, :index]
  end

  get 'signup' => 'users#new'
  get 'login' => 'session#new'
  post'login' => 'session#create'

end
