const
    mongoose = require('mongoose'),
    stockSchema = new mongoose.Schema({
        name: { type: String, required: true},
        ticker: { type: String, required: true },
        price: { type: Number, required: true },
        targetPrice: { type: Number },
        date: { type: String },
        currentAssets: { type: Number },
        currentLiabilities: { type: Number },
        financialCondition: { type: String },
        earnings2014: { type: Number },
        earnings2015: { type: Number },
        earnings2016: { type: Number },
        earningsStability: { type: String },
        earningsGrowth: { type: String },
        isThereDividend: { type: Number },
        dividendRecord: { type: String },        
        netTangibleAssets: { type: Number },
        outstandingShares: { type: Number },        
        valuePrice: { type: String },
        score: { type: Number },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    })
    
const Stock = mongoose.model('Stock', stockSchema)

module.exports = Stock