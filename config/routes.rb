Rails.application.routes.draw do
  root 'home#index'
	
  get '/search-name/:name', to: 'search#name'

  get '/search-address/:address', to: 'search#address'

  get '/restaurants/:id', to: 'restaurant#show'
end
