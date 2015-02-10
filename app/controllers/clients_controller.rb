class ClientsController < ApplicationController
	before_filter :authenticate_user!
	before_action :set_client, only: [:show, :destroy]  

	def index
		@clients = Client.all
		authorize Client

		render json: response_to_json
	end

	def user_clients
		# Client.find_by user_id: current_user.id
		@clients = Client.where(user_id: current_user.id).all
		
		render json: response_to_json
	end

 	def show
 		render json: @client
 	end

 	def new
	  @client = Client.new
		render json: @client
	end

	def create
		@client = Client.new client_secure_params
		@client.user_id = self.current_user.id
		if @client.save
			render json: @client
		else
			render json: @client.error
		end
	end

	def destroy
		@client.destroy
		render json: @client
	end

	private

	def set_client
    @client = Client.find(params[:id])
  rescue
    @client = nil
  end

  def client_secure_params
    params.require(:client).permit(:name, :middle_name, :surname, :passport, :identification_number)
  end

  def response_to_json
    # Potentially shipabble product increment
    response = []

		@clients.each do |client|
			resp = {
				name: client.name,
				surname: client.surname,
				middle_name: client.middle_name,
				passport: client.passport,
				identification_number: client.identification_number,
				owner: client.user.username
			}
			response << resp
		end
		response
  end

end