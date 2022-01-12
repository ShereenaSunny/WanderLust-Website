## Mini Project

## Travel Suggestion Website
___
### Technologies Used
###### Front End - HTML,CSS,Javascript
###### Server Side - Node.js(express,ejs)
###### DataBase - Mongoose(mongoDB)
### Features
* Clean and Simple Graphical User Interface
* Suggests different travel places to the user
* Used **EJS** for better UI
* Used **latest** Technology(Node.js,express,etc)
* Completely Secure with High Level Protection [**Hashing and Salting**] for user authentication
___
### Minimum System Requirements
* 3GB RAM
* Intel i5 Processor
* 500 GB Hard Disk
* Windows 8 and above






___
### Requirements
#### MongoDB

1. Download [MongoDB](https://www.mongodb.com/try/download/community) (Choose Community Server and download MSI)
2. Choose a version which suits your PC requirements.
  * Run the Mongodb installer and choose the following:
    1. Setup type:complete
    2. Service Configuration:(Check:Install mongoD as a service).Click on Run service as a network service user.
    3. Make a note of the Data Directory mentioned ( You are gonna need it later)
    3 Search "MongoAtlas" on server and there create a free cluster or login to your atlas if you already have one.
4. Click on 'Connect'  to connect your project to database. 


##### Connecting with this project's database 
1. On Mongo atlas, click on "connect with google"
2. Add a google account 
3. Id - travelsuggestion@gmail.com
password-travelsuggestion
4. Click on 'Connect'

####How to run the code
1) Download the zip file and extract  it on your computer 
1) Open command prompt or shell and go to your project's directory and run the following command -  

		npm init 

2) All the dependencies of the project will be installed 
3) On the command prompt, type

		nodemon app.js
4) Your project will be listening on a port (mostly 3000)
5) Go to the browser and type 

	localhost:3000

Your Project will be running on Port 3000 :)