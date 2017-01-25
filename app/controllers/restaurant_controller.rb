class RestaurantController < ApplicationController
	before_action :find_restaurant

	def show
	    render json: @restaurant
	end

	def add_user_comment
		new_comment = @restaurant.user_comments.new(user_comment_params)
		if new_comment.save
		  render json: new_comment
		else
		  render json: { error: "This comment was not added!", status: 500 }, status: 500
		end
	end

  private

    def restaurant_params
      params.require(:restaurant).permit(:user_comment => [:body, :author]))
    end

    def find_restaurant
      @restaurant = Restaurant.find_by_id(params[:id])
    end
end
