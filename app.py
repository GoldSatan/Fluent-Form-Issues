# pip install flask
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def indexView():
    return render_template('pages/index.html')

@app.route('/contact')
def contactView():
    return render_template('pages/contact.html')

@app.route('/about')
def aboutView():
    return render_template('pages/about.html')


if __name__ == "__main__":
	app.run(debug=True, host='0.0.0.0', port=8080)