from flask import Flask, render_template, g, request
from flask.ext.babel import Babel

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
    return render_template('index.html')

app.run()

