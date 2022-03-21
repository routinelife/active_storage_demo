class MemoriesController < ApplicationController
  def create
    m = Memory.create(photo: params[:photo])
    render json: { url: url_for(m.photo) }
  end
end
