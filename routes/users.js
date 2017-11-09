const 
    express = require('express'),
    usersRouter = new express.Router(), 
    usersCtrl = require('../controllers/users.js'),
    stocksCtrl = require('../controllers/stocks.js'),
    verifyToken = require('../serverAuth.js').verifyToken

usersRouter.route('/')
    .get(usersCtrl.index)
    .post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken)
usersRouter.route('/:id')
    .get(usersCtrl.show)
    .patch(usersCtrl.update)
    .delete(usersCtrl.destroy)

usersRouter.route('/:id/stocks')
.get(stocksCtrl.index)
.post(stocksCtrl.create)

module.exports = usersRouter