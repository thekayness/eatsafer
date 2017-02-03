
class RestaurantController < ApplicationController

	def show
		@restaurant = Restaurant.find(params[:id])
	    render json: @restaurant
	end

	def recent
		@recent_restaurants = Restaurant.recent
		@recent_restaurants.each do |restaurant|
			restaurant.order_inspections
		end
		render json: @recent_restaurants
	end



end