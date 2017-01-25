Rails.application.routes.draw do
  root 'application#index'
	
  get '/search-name/:name', to: 'search#name'

  get '/search-address/:address', to: 'search#address'

  get '/restaurants/:id', to: 'restaurant#show'

  post '/restaurants/:id', to: 'restaurant#add_user_comment'
end
