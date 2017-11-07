const Company = require('../models/Company.js')

module.exports = {
    //Possible: index, show, create, update, destroy
    //Only need: index & show? Or just index....user's can't create, update, or destroy companies/stocks
    //Do index first just to show all of them to start. Then, with implement search maybe do show.
    //For bookmarking, separate model/controller/routes????
    //list all companies
    index: (req, res) => {
        Company.find({}, (err, companies) => {
            res.json(companies)
        })
    }
}