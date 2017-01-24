require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Eatsafer
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.generators do |g|
      g.test_framework :rspec,
        fixtures: false,
        view_specs: true,
        helper_specs: false,
        routing_specs: true,
        request_specs: false,
        controller_specs: true
    end

    #dear god plz work
    config.angular_templates.ignore_prefix  = %w(templates/)
  end
end
