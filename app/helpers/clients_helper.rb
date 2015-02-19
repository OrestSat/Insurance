module ClientsHelper
	def serch_child(manager, list)
		puts "SEARCH CHILD"
		list << manager.clients

		if manager.subordinates
			manager.subordinates.each do |subordinate|
				list << serch_child( subordinate, list )
			end
		end
		list
	end
end
