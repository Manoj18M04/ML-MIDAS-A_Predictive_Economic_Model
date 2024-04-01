from flask import Blueprint, request, jsonify, session
from database import db

login = Blueprint("login", __name__)

@login.route("/", methods=['POST'])
def check_user():
    Email = request.json.get('email')
    password = request.json.get('password')
    collection = db["users"]
    fetch = collection.find_one({"email": Email}) if (collection.find_one({"email": Email})) else {}
    if (len(fetch) > 0 and Email == fetch['email'] and password==fetch['password']):
        session["email"]=Email
        return jsonify({"message": "success"})
    return jsonify({"message":"Enter valid email and password"})