require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :html

  protect_from_forgery with: :exception
  respond_to :html, :json
  include ActionController::Serialization

  def index
  end
end
