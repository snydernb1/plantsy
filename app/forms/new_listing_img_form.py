from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired


class NewListingImgForm(FlaskForm):
    listing_id = IntegerField('owner id', validators=[DataRequired()])
    image_url = StringField('owner id', validators=[DataRequired()])
    preview = BooleanField('owner id')
