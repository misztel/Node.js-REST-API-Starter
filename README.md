# Node.js-REST-API-Starter

# Node.js REST-API starter project

### Description

Server based on Express.js,
MongoDB connection with Mongoose,
Validation with express-validator,
Image upload configured with multer,
Authentication with Json Web Token and bcrypt

### Requirements

- Node.js
- NPM
- Postman

### Installation

1. Clone the git repository and run:

   npm install

2. Create MongoDB database and update .env file with given details.

### How to use it

Run the app using:

    node app

Server will run on given port in .env file ex.:

    http://localhost:8080

Create account on /signup route. Required data: email, password, name

For protected routes you need to set Bearer Header with JWT Token given on logging in.

You can start creating own routes, models and logic for your REST API
