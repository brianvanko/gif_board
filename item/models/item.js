var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
	name: String,
	thumb: String,
	category: String,
	description: String
});

module.exports = mongoose.model('Item', ItemSchema);