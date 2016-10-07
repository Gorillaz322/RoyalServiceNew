from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')


@app.route('/')
def main():
    return render_template('main.html')


if __name__ == '__main__':
    app.run()
