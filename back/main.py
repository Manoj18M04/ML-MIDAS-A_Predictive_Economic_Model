from flask import Flask
from Routes.login import login

app = Flask(__name__)
app.register_blueprint(login, url_prefix="/")

if __name__ == "__main__":
    app.run(debug=True)
