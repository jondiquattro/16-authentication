![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Project Name

### Author: Student/Group Name

### Links and Resources
* [repo](http://xyz.com)
* [travis](https://www.travis-ci.com/jondiquattro/16-authentication)
* [front-end](https://dashboard.heroku.com/apps/lab-16-diquattro)

#### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - Not sure how to do this yet.

#### Running the app
* `npm start or nodemon`
* Endpoint: `index.js`
  * Starts the server for the app.
* Endpoint: `echo in a username and password EXAMPLE echo '{"username":"joh", "password":"johnny"}' | http post :3000/signup`  
* Endpoint: `echo in a registered username and password EXAMPLE http post :3000/signin -a john:johnny`
  * Returns: `http should return a token for each command, and nodmon should accept user`
  
#### Tests
* Run test using the comman npm text


#### UML
https://photos.app.goo.gl/XdU18QfDtkLTv5838
