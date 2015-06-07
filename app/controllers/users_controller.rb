class UsersController < Devise::RegistrationsController
  prepend_view_path "app/views/devise"

end
