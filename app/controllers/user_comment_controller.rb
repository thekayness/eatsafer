class UserCommentController < ApplicationController
	def create
		puts "whatup"
		new_comment = UserComment.new(comment_params)
		if new_comment.save
		  render json: new_comment
		else
		  render json: { error: "This comment was not added!", status: 500 }, status: 500
		end
	end

	private
	
	def comment_params
		params.require(:user_comment).permit(:restaurant_id, :body, :author)
	end

end