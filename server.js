const
    dotenv = require('dotenv').load(),
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/stock_app',
    PORT = process.env.PORT || 3001, //either the port the webhost (e.g. Heroku) assigns if deployed or if local run on port number
    usersRoutes = require('./routes/users.js'),
    stocksRoutes = require('./routes/stocks.js')

mongoose.connect(MONGODB_URI, (err) => {
    console.log(err || `Connected to MongoDB.`)
})

//only applies to heroku
app.use(express.static(`${__dirname}/client/build`))

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
    res.json({message: "API root."})
})

app.use('/api/users', usersRoutes)
app.use('/api/stocks', stocksRoutes)

//only applies to heroku
app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}.`)
})