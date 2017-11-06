const
    jwt = require('jsonwebtoken'),
    User = require('./models/User.js')

//function for creating tokens
function signToken(user) {
        //toObject() returns a basic js object with only the info from the database
        const userData = user.toObject()
        delete userData.password
        return jwt.sign(userData, process.env.JWT_SECRET)
}