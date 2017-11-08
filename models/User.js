const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    userSchema = new mongoose.Schema({ //email and password are only requirements to create user
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        companies: []
    })

//adds a method to a user document object to create a hashed password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8)) //hashing algorithm will run 8 times
}

// adds a method to a user document object to check if provided password is correct
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

// middleware: before saving, check if password was changed. If so, encrypt new password before saving:
userSchema.pre('save', function(next) {
    if(this.isModified('password')) {
        this.password = this.generateHash(this.password)
    }
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User