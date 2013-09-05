
// Include Mongoose
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Create schema 
//TODO: Add the right fields
var InvoiceSchema = new Schema({
	url: { type: String, index: { unique: true, dropDups: true } },
	title:  String,
	number: Number,
	date: Date,
	address: String,
	items: [{ service: String, description: String, quanity: Number, rate: Number }]
})

// Create model
module.exports = mongoose.model('Invoice', InvoiceSchema);