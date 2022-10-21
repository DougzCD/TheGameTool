from main import db
from sqlalchemy.dialects.postgresql import array
from sqlalchemy.dialects import postgresql
from sqlalchemy import select, func


class Character(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    title = db.Column(db.String(15), nullable=False)
    vision = db.Column(db.String(5), nullable=False)
    weapon = db.Column(db.String(5), nullable=False)
    nation = db.Column(db.String(10), nullable=True)
    affiliation = db.Column(db.String(10), nullable=True)
    rarity = db.Column(db.Integer, nullable=False)
    constellation = db.Column(db.String(15), nullable=False)
    birthday = db.Column(db.String(15), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    skillTalents = db.Column(db.ARRAY(Dict) , nullable=False)
    passiveTalents = db.Column(db.ARRAY(Dict), nullable=False)
    constellations = db.Column(db.ARRAY(Dict), nullable=False)
    vision_key = db.Column(db.String(5), nullable=False)
    weapon_type = db.Column(db.String(5), nullable=False)
