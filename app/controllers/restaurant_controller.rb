class RestaurantController < ApplicationController
	def show
		@restaurant = Restaurant.find(params[:id])
	    render json: @restaurant
	end
end
