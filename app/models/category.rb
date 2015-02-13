class Category < ActiveRecord::Base
	has_many :abilities
	has_many :insurances, :through => :abilities
end
