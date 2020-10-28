require 'test_helper'

class Api::CandidatesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_candidates_index_url
    assert_response :success
  end

end
