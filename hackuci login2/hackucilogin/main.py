# Python Library Import

#Flask App
from flask import Flask, request
# JSON Parsing
import json
# MondoDB 
import pymongo
# Mongo Object  
from bson import json_util
# ENV Import
import os

# Creating Flask App object
app = Flask(__name__,
           static_url_path='',
           static_folder='static')

# Each method in the Flask app is tied to a url, which is wriiten using '@app.route()'
@app.route('/')
def root():
    # Default an HTML page
    return app.send_static_file('index.html')

# Regular GET method (doesn't receive information, sends back information)
@app.route('/view')
def viewItems():
    client = pymongo.MongoClient("mongodb+srv://caleb:Password123@cluster0.ecdam.mongodb.net/Netflix?retryWrites=true&w=majority")
    db = client["Netflix"]
    col = db['Logs']
    log = list(col.find())
    return json_util.dumps(log)

# POST method (receives information, sends back information)
@app.route('/add', methods=['POST'])
def addItems():
    client = pymongo.MongoClient("mongodb+srv://caleb:Password123@cluster0.ecdam.mongodb.net/Netflix?retryWrites=true&w=majority")
    db = client["Netflix"]
    col = db['Logs']
    entry = {
        'name1': request.form['name1'], 
        'name2': request.form['name2'], 
        'email': request.form['email'],
        'password' : request.form['password'],
        'confirmation' : request.form['confirmation']
        }
    col.insert_one(entry)
    return app.send_static_file('view.html')


@app.route('/login', methods=['GET','POST'])
def login():
    client = pymongo.MongoClient("mongodb+srv://caleb:Password123@cluster0.ecdam.mongodb.net/Netflix?retryWrites=true&w=majority")
    db = client["Netflix"]
    col = db['Logs']
    query = {'email': request.form['loginemail']}
    entry = col.find(query)
    print(entry)
    entrypassword = entry[0]['password']
    print(entrypassword)
    print('loginpassword')
    if (request.form['loginpassword']==entrypassword):
        return app.send_static_file('profile.html')
    else:
        return app.send_static_file('bad.jpg')

@app.route('/addprojects', methods=['POST'])
def addProjects():
    client = pymongo.MongoClient("mongodb+srv://caleb:Password123@cluster0.ecdam.mongodb.net/Netflix?retryWrites=true&w=majority")
    db = client["Projects"]
    col = db['Proj']
    entry = {
        'projectname': request.form['projectname'], 
        'roles': request.form['roles'], 
        'tags': request.form['tags'],
        'projectoverview' : request.form['projectoverview'],
        'collaborators' : request.form['collaborators']
        }
    col.insert_one(entry)
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run()   
