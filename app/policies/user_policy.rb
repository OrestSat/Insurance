class UserPolicy < ApplicationPolicy
	def index?
		true
		# @user.admin?
	end

	def show?
		true
		
	end

	def update?
		@user.admin? || @user.user?
	end

	def destroy?
		@user.admin?
	end
end
