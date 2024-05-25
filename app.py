# pip install flask
from flask import Flask, render_template, session

app = Flask(__name__)
app.config["SECRET_KEY"] = "5f352379324c22463451387a0aec5d2f"

@app.route('/')
def toZeroView():
    if 'lich' not in session:
        session['lich'] = 0
    else:
        session['lich'] = 0
        
    return render_template('pages/toZero.html', lich=session['lich'])

@app.route('/plus')
def plusPlusView():
    if 'lich' not in session:
        session['lich'] = 0
    
    session['lich'] += 1
    message = 'Ну привіт'
    return render_template('pages/plusPlus.html', lich=session['lich'], message=message)

@app.route('/minus')
def minusMinusView():
    if 'lich' not in session:
        session['lich'] = 0
    
    session['lich'] -= 1
    return render_template('pages/minusMinus.html', lich=session['lich'])


if __name__ == "__main__":
	app.run(debug=True, host='0.0.0.0', port=8080)