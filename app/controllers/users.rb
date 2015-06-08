class User < ActiveRecord::Base
  has_secure_password
  has_many :students

  enum role: [:user, :admin]
  after_initialize :set_default_role, :if => :new_record?

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  belongs_to :role

  def set_default_role
    self.role ||= :user
  end

end