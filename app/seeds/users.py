from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    bill = User(
        first_name='Bill', email='demo@aa.io', password='password')
    marnie = User(
        first_name='Marnie', email='marnie@aa.io', password='password')
    sam = User(
        first_name='Sam', email='sam@aa.io', password='password')
    nick = User(
        first_name='Nick', email='nick@aa.io', password='password')
    curt = User(
        first_name='Curt', email='hammerly-ceramics@aa.io', password='password')
    harry = User(
        first_name='Harry', email='harry@aa.io', password='password')
    tom = User(
        first_name='Tom', email='galleons@aa.io', password='password')
    steph = User(
        first_name='Steph', email='steph@aa.io', password='password')


    db.session.add(bill)
    db.session.add(marnie)
    db.session.add(sam) #This is the demo shopper
    db.session.add(nick)
    db.session.add(curt)
    db.session.add(harry) #This is the demo seller
    db.session.add(tom)
    db.session.add(steph)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
