const 
    User = require('../models/User.js'),
    signToken = require('../serverAuth.js').signToken

module.exports = {
    //list all users - this should not be publicly available - only visible to site admin if anyone. Company index would be OK publicly.
    index: (req, res) => {
        User.find({}, (err, users) => {
            res.json(users)
        })
    },

    //get one user
    show: (req, res) => {
        console.log("Current User:") //for testing to make sure correct user is logged in/Current User
        console.log(req.user) //same as above - see request being sent
        User.findById(req.params.id, (err, user) => {
            res.json(user)
        })
    },

    //create a new user
    create: (req, res) => {
        User.create(req.body, (err, user) => {
            if(err) return res.json({success: false, code: err.code})
            //once user is created, generate a token to "log in":
            const token = signToken(user)
            res.json({success: true, message: "User created. Token attached.", token})
        })
    },

    //update an existing user
    update: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            Object.assign(user, req.body)
            user.save((err, updatedUser) => {
                res.json({success: true, message: "User updated.", user})
            })
        })
    },
    //delete an existing user

} //should be last closing bracket
