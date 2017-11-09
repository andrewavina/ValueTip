const 
    express = require('express'),
    stocksRouter = new express.Router(),
    stocksCtrl = require('../controllers/stocks.js')

stocksRouter.route('/:id')
    .get(stocksCtrl.show)
    .patch(stocksCtrl.update)
    .delete(stocksCtrl.destroy)

module.exports = stocksRouter