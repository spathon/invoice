
var mongoose = require('mongoose'),
    Invoice = mongoose.model('Invoice'),


// Create REST API here...

// Show a invoice from URL
exports.show = function(req, res) {
	Invoice.findOne({url: req.params.url}, function(error, invoice) {
		res.send(invoice);
	})
}

/**
 * List all invoices
 */
exports.all = function(req, res) {
    Invoice.find(function(err, invoices) {
        res.send(invoices);
    });
};