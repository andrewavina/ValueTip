const
    mongoose = require('mongoose'),
    stockSchema = new mongoose.Schema({
        name: { type: String },
        ticker: { type: String },
        price: { type: Number },
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
    
const Stock = mongoose.model('Stock', stockSchema)

module.exports = Stock