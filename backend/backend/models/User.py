from flask_login import UserMixin
from backend.models import Base
import datetime
from sqlalchemy import Column, Integer, String, DateTime, Boolean


class User(Base, UserMixin):
  __tablename__ = 'users'

  id = Column(Integer, primary_key=True) # primary keys are required by SQLAlchemy
  created_date = Column(DateTime, default=datetime.datetime.utcnow, nullable=False)
  user_name = Column(String(1000), unique=True)
  full_name = Column(String(1000), unique=True)
  email = Column(String(100), unique=True)
  password = Column(String(100))
  is_ldap = Column(Boolean(), default=False)

  def __repr__(self):
    return (f"<ID='{self.id}' "
            f"UserName='{self.user_name}' "
            f"FullName='{self.full_name} "
            f"Email='{self.email}' "
            f"IsLdap='{self.is_ldap}' "
            f"CreatedDate='{self.created_date}' />")
