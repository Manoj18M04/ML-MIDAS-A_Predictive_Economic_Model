from flask import Blueprint, request, jsonify, session
from database import db

signup = Blueprint("signup", __name__)

@signup.route("/signup", methods=['POST'])
def create_user():
    Email = request.json.get('email')
    password = request.json.get('password')
    collection = db["users"]
    fetch = collection.find_one({"email":Email}) if(collection.find_one({"email":Email})) else {}
    if(len(fetch)>0 and Email==fetch['email']):
        return jsonify({"message":"Email already exits"})
    collection.insert_one({"email":Email,"password":password})
    session["email"]=Email
    return jsonify({"message":"success"})