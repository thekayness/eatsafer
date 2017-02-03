class Inspection < ApplicationRecord
	belongs_to :restaurant

	def self.most_recent
		order(date_result: :desc).limit(5)
	end
end
