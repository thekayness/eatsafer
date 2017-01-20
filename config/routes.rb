Rails.application.routes.draw do
  root 'application#boot'
	
  get '/search-name/:name', to: 'search#name'

  get '/search-address/:address', to: 'search#address'

  get '/restaurants/:id', to: 'restaurant#show'
end
