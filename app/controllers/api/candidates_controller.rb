class Api::CandidatesController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_candidate, only: [:index]
  # before_action :set_ballot
  
  def index
    render json: Candidate.all
  end

  private
  def set_candidate
    @candidate = Ballot.candidates(params[:id])
  end

  def set_ballot
    @ballot = Ballot.find(params[:id])
  end


end
