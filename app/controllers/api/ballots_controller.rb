class Api::BallotsController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_ballot, only: [:index]
  def index
    render json: current_user.ballots
  end

  private
  def set_ballot
    @ballot = Ballot.find(params[:id])
  end
end