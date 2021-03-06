Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :things
    resources :ballots
    resources :ballots do
      resources :candidates
    end

    resources :users, only: :update
  end
  # resources :users, only: :update
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
