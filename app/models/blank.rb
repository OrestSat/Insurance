class Blank < ActiveRecord::Base

	after_initialize :set_default_params, :if => :new_record?
	belongs_to :user
	belongs_to :coming
	
	def set_default_params
    self.status ||= "new"
  end
end
