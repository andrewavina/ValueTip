const
    mongoose = require('mongoose'),
    companySchema = new mongoose.Schema({
        name: { type: String },
        ticker: { type: String },
        price: { type: Number }
    })

//for testing only, pre-baked stocks in client/views/companies

const Company = mongoose.model('Company', companySchema)
module.exports = Company