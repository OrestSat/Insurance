class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  
  enum role: [:client, :user, :admin]
  enum status: [:active, :disabled]

  after_initialize :set_default, :if => :new_record?

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :authentication_keys => [:login]

  validates :username, :uniqueness => { :case_sensitive => false}

  has_many :clients
  has_many :blanks
  has_many :subordinates, class_name: "User", foreign_key: "manager_id"
  belongs_to :manager, class_name: "User"

  def set_default
    self.role ||= :admin
    self.status ||= :active
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    else
      where(conditions).first
    end
  end

  def active_for_authentication?
    super && self.active?
  end

  def inactive_message
    "Sorry, this account has been deactivated."
  end

  def login=(login)
    @login = login
  end

  def login
    @login || self.username || self.email
  end
end
