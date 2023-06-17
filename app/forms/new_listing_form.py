from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, BooleanField
from wtforms.validators import DataRequired


class NewListingForm(FlaskForm):
    owner_id = IntegerField('owner id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    discount = FloatField('discount')
    free_shipping = BooleanField('free shipping')
    shop_id = IntegerField('shop id', validators=[DataRequired()])
