const
    mongoose = require('mongoose'),
    stockSchema = new mongoose.Schema({
        name: { type: String, required: true },
        ticker: { type: String, required: true },
        price: { type: Number, required: true },
        currentAssets: { type: Number },
        currentLiabilities: { type: Number },
        financialCondition: { type: Number },
        earningsStability: { type: String },
        dividendRecord: { type: String },
        earningsGrowth: { type: String },
        valuePrice: { type: String },
        score: { type: Number },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    })

    //add static method here

const Stock = mongoose.model('Stock', stockSchema)
//call static method here

module.exports = Stock