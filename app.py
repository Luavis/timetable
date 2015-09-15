from flask import Flask, render_template, g, request
from flask.ext.babel import Babel

app = Flask(__name__)
app.debug = True

app.config.from_pyfile('locale.cfg')
babel = Babel(app)

@babel.localselector
def get_locale():
    return 'ko'

@babel.timezonselector
def get_timezon():
    return None

@app.route('/')
def index():
    return render_template('index.html')

app.run()

