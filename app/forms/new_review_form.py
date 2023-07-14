from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class NewReviewForm(FlaskForm):
    review = StringField('review', validators=[DataRequired()])
    date = StringField('date', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])
    date_num = IntegerField('date number', validators=[DataRequired()])
    listing_id = IntegerField('listing id', validators=[DataRequired()])
