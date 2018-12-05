class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    # @items = Item.all
    render :index
  end
  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end
end