Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:index, :new, :create, :edit, :update, :show]
    resource :session, only:[:create, :destroy] 
    resources :products, except: [:new, :edit] do
      resources :comments
    end
  end



end
