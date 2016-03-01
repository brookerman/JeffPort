class PagesController < ApplicationController
	def index
		render template: "welcome/jeffBrookerSplash"
	end

	def show
		render template: "pages/#{params[:page]}"
	end
end
