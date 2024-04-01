from flask import Flask
from Routes.login import login
from Routes.signup import signup
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8mnbvcxz\n\xec]/'
CORS(app, resources={r"/*": {"origins": "*"}})
app.register_blueprint(login, url_prefix="/")
app.register_blueprint(signup,url_prefix="/")

if __name__ == "__main__":
    app.run(debug=True)
