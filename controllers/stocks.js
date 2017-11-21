const Stock = require('../models/Stock.js')

module.exports = {
    
    //list all stocks for currentUser
    index: (req, res) => {
        Stock.find({user: req.params.id}).populate('user').exec((err, stocks) => {
            if (err) return res.json({success: false, message: "Search failed...", err})
            res.json(stocks)
        })
    },

    //show selected stock
    show: (req, res) => {
        Stock.findById(req.params.id).populate('user').exec((err, stock) => {
            if (err) return res.json({success: false, message: "Search failed...", err})
            res.json(stock)
        })
    },

    //create a stock
    create: (req, res) => {
        var newStock = new Stock(req.body)
        newStock.user = req.params.id
        console.log("test")
        newStock.save((err, stock) => {
            if (err) return res.json({success: false, message: "Failed to create stock"})
            res.json({success: true, message: "Stock Added", stock})
        })
    },

    //edit selected stock
    update: (req, res) => {
        Stock.findById(req.params.id, (err, stock) => {
            Object.assign(stock, req.body)
            stock.save((err, updatedStock) => {
                if(err) return res.json({success: false, message: "Failed to update stock..."})
                res.json({success: true, message: "Stock updated..."}, updatedStock)
            })
        })
    },

    //delete selected stock
    destroy: (req, res) => {
        Stock.findByIdAndRemove(req.params.id, (err, deletedStock) => {
            if (err) return res.json({success: false, message: "Failed to delete stock..."})
            res.json({success: true, message: "Stock deleted"})
        })
    }

} //last brackfet