const
    express = require('express'),
    companiesRouter = new express.Router(),
    companiesCtrl = require('../controllers/users.js')

companiesRouter.route('/companies')
    .get(companiesCtrl.index)

module.exports = companiesRouter