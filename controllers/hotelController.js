var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var Hotel = require('../models/hotel');

//CRUD

//CREATE
router.post('/create', function (req, res) {
	Hotel.create({
		id : req.body.id,
		name : req.body.name,
		stars : req.body.stars,
		price : req.body.price,
		image : req.body.image,
		amenities : req.body.amenities
	}, 
	function (err, hotel) {
		if (err) return res.status(500).send("Hubo un problema creando el hotel.");
		res.status(200).send(hotel);
	});
});

//READ
router.get('/read/:id', function (req, res) {
	Hotel.findById(req.params.id, function (err, hotel) {
		if (err) return res.status(500).send("Hubo un problema encontrando el hotel.");
		res.status(200).send(hotel);
	});
});

//UPDATE
router.put('/update/:id', function (req, res) {
	Hotel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, hotel) {
		if (err) return res.status(500).send("Hubo un problema actualizando el hotel.");
		res.status(200).send(hotel);
	});
});

//DELETE
router.delete('/delete/:id', function (req, res) {
	Hotel.findByIdAndRemove(req.params.id, function (err, hotel) {
		if (err) return res.status(500).send("Hubo un problema eliminando el hotel.");
		res.status(200).send("El hotel " + hotel.name + " fue eliminado.");
	});
});

//Listado de todos los hoteles
router.get('/', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	Hotel.find({}, function (err, hotels) {
		if (err) return res.status(500).send("Hubo un problema encontrando los hoteles.");
		res.status(200).send(hotels);
	});
});

//Filtrado de hotel por nombre completo
router.get('/hoteles/:name', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	Hotel.find({'name' : req.params.name}, function (err, hotel) {
		if (err) return res.status(500).send("Hubo un problema encontrando el hotel.");
		if (!hotel) return res.status(404).send("Ningun hotel encontrado.");
		res.status(200).send(hotel);
	});
});

//Filtrado de hotel por estrellas
router.get('/stars/:stars', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	console.log(req.params.stars);
	Hotel.find({'stars' : req.params.stars}, function (err, hotel) {
		if (err) return res.status(500).send("Hubo un problema encontrando el hotel.");
		if (!hotel) return res.status(404).send("Ningun hotel encontrado.");
		res.status(200).send(hotel);
	});
});

router.get('/hoteles/', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	Hotel.find({}, function (err, hotels) {
		if (err) return res.status(500).send("Hubo un problema encontrando los hoteles.");
		res.status(200).send(hotels);
	});
});

router.get('/stars/', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	Hotel.find({}, function (err, hotels) {
		if (err) return res.status(500).send("Hubo un problema encontrando los hoteles.");
		res.status(200).send(hotels);
	});
});

module.exports = router;