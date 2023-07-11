from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.AWS_helpers import ALLOWED_EXTENSIONS


class NewListingImgForm(FlaskForm):
    listing_id = IntegerField('owner id', validators=[DataRequired()])
    # image_url = StringField('image url', validators=[DataRequired()])
    image = FileField('image file', validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    preview = BooleanField('preview image')
