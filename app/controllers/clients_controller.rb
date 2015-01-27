class ClientsController < ApplicationController
	before_filter :authenticate_user!, except: [:show, :index]
	before_action :set_client, only: [:show, :destroy]  

	def index
		@clients = Client.all
		render json: resp_to_json
	end

 	def show
 		render json: @client
 	end

 	def new
	  @client = Client.new
		render json: @client
	end

	def create
		@client = Client.new client_params
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

	def set_client
    @client = Client.find(params[:id])
  rescue
    @client = nil
  end

  def client_params
    params.require(:client).permit(:name, :middle_name, :surname, :passport, :identification_number)
  end

  def resp_to_json
    # Potentially shipabble product increment
    resp = {
    	client: @client,
      all_clients: @clients,
      users_clients: self.current_user.clients
    }

    resp
  end

end