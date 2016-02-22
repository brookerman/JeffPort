class PagesController < ApplicationController
	def show
		render template: "pages/#{params[:portfolio]}"
		render template: "pages/#{params[:about]}"
		render template: "pages/#{params[:contact]}"
	end
end
