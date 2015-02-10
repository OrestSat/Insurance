class Coming < ActiveRecord::Base

	belongs_to :insurance
	has_many :blanks
	
end
