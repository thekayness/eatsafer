class Restaurant < ApplicationRecord
	has_many :inspections
	has_many :user_comments

	geocoded_by :full_street_address   # can also be an IP address
	after_validation :geocode          # auto-fetch coordinates
	
	def self.find_by_name(search_terms)
		where("name LIKE?", "%#{search_terms}%")
	end

	def full_street_address
		if address
			[address.squeeze(" "), city, state].compact.join(', ')
		end
	end

	def self.recent
		joins(:inspections).merge(Inspection.order(date_result: :desc)).limit(5)
	end

	def order_inspections
		inspections.order(date_result: :desc)
	end
end
