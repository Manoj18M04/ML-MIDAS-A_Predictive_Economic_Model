from flask import Blueprint, request
from database import db

login = Blueprint("login", __name__)

@login.route("/", methods=['POST'])
def create_user():
    email = request.json.get('email')
    password = request.json.get('password')
    collection = db["users"]
    collection.insert_one({"email":email,"password":password})
    return "success"