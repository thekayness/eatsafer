class SearchController < ApplicationController
	def name
		@restaurants = Restaurant.find_by_name(params[:name])
    	render json: @restaurants
	end

	def address
	    @restaurants = Restaurant.near(params[:address], 0.1)
	    render json: @restaurants		
	end
end
