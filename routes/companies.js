const
    express = require('express'),
    companiesRouter = new express.Router(),
    companiesCtrl = require('../controllers/companies.js')

companiesRouter.route('/')
    .get(companiesCtrl.index)

module.exports = companiesRouter