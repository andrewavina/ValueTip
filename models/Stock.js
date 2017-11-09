const
    mongoose = require('mongoose'),
    stockSchema = new mongoose.Schema({
        name: { type: String, required: true },
        ticker: { type: String, required: true },
        price: { type: Number, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    })

const Stock = mongoose.model('Stock', stockSchema)
module.exports = Stock