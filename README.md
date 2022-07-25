# This is the Source code for the ugzMAN portfolio website
The website can be found https://enigmatic-ravine-76128.herokuapp.com/

## If u clone this project and whish to run it locally, open your terminal and type 'npm install', then cd into the client folder and type 'npm install'

## Ensure you have installed create-react-app globally then while in the client folder type 'npm start', after some minutes you will be given a localhost url, copy it into your browser and press enter

## You might see some errors in the console to remove them, cd back into the Portfolio folder and type 'node app.js' or 'nodemoon app.js', wait until you a message 'Server started on port 5000' clear your console and refresh the page there should be no more errors and you can modify the code to your liking

## The files are filled with comments to help understanding of the code as you read along

## There is an .env file which is being present but is not uploaded. (.env files are always omitted)

### app.js
This is the server file i.e the code that runs on the server side.

### date.js
This is an external module which is meant to be exported and it carries a function which returns a value.
This module deals with the type of greeting that is being said according to the time on the server.
It is being imported and used in the app.js files.

### package.json
Contains general information as well as dependencies used on the server side.

### Procfile
This file has nothing to do with the app but it helps to tell Heroku where to run node app.js.
It is there because the app is being hosted on Heroku and has nothing to do with the functionality of the app.


## The client folder deals with the front end, it's in that form cause it React.js that's being used as the front

## Note, the .env file in the front end contains no secret keys or values. It's good practice never to put API keys on the front end

## The public folder in the client folder contains the normal html, CSS, JavaScript files as well as any other files like pictures needed in the app

## The src folder in the client folder contains the React.js files like JavaScript files. JSX files needed to bring about UI

## This is a one page website for now so the components folder of the page can be found inside the components folder labelled landing-page

# Goodluck Coding!
