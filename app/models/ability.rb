class Ability < ActiveRecord::Base

	belongs_to :insurance
	belongs_to :category

end
