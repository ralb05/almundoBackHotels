var mongoose = require('mongoose');
var HotelSchema = new mongoose.Schema({
	id: String,
	name: String,
	stars: Number,
	price: Number,
	image: String,
	amenities: Array
}, { collection : 'hoteles'});
mongoose.model('Hotel', HotelSchema);

module.exports = mongoose.model('Hotel');