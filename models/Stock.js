const
    mongoose = require('mongoose'),
    stockSchema = new mongoose.Schema({
        name: { type: String },
        ticker: { type: String },
        price: { type: Number },
        currentAssets: { type: Number },
        currentLiabilities: { type: Number },
        financialCondition: { type: String },
        earnings2014: { type: Number },
        earnings2015: { type: Number },
        earnings2016: { type: Number },
        earningsStability: { type: String },
        earningsGrowth: { type: String },
        dividendRecord: { type: String },        
        netTangibleAssets: { type: Number },
        outstandingShares: { type: Number },        
        valuePrice: { type: String },
        score: { type: Number },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    })
    
const Stock = mongoose.model('Stock', stockSchema)

module.exports = Stock