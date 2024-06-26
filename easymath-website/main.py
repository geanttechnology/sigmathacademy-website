from flask import Flask, render_template, jsonify, request, redirect, url_for
from datetime import datetime


app = Flask(__name__)

#Date context processor
@app.context_processor
def inject_date():
    return {'now': datetime.utcnow()}

#View Function for landing page
@app.route("/")
@app.route("/index.html")
def home():
    return render_template("index.html")

@app.route("/about.html")
def about():
    return render_template("about.html", title="About Us")

@app.route("/contact.html")
def contact():
    return render_template("contact.html", title="Contact Us")

@app.route("/courses.html")
def courses():
    return render_template("course-details.html", title="Courses and Curriculum")

@app.route("/events.html")
def events():
    return render_template("events.html", title="Teaching and Tutoring Events")

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404-page.html", title="Sorry! Page not found")
