Rails.application.routes.draw do
  root 'home#index'
	
  get '/name-search', to: 'search#name'

  get '/address-search', to: 'search#address'

  get '/restaurants/:id', to: 'restaurant#show'
end
