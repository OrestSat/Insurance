class Insurance < ActiveRecord::Base

	has_many :comings
	has_many :abilities
	has_many :categories, :through => :abilities
	
end
