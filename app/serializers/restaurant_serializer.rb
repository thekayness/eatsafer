class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :vendor_type, :address, :city, :lic_status, :license_no, :location, :latitude, :longitude
  has_many :inspections
  has_many :user_comments
end
