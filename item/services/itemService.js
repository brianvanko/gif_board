var Item = require('../models/item.js');

exports.createItem = function(req, res){
	var item = new Item();

	item.name = req.body.name;
	item.description = req.body.description;
	item.thumb = req.body.thumb;
	item.category = req.body.category;

	item.save(function (err) {
		if (err) res.send(err);

		res.json({msg: 'item created'});
	});
};

exports.getAll = function(req, res){
	console.log('get all items');
	Item.find(function (err, items) {
		if (err) res.send(err);

		res.json(items);
	});
};

exports.deleteItem = function(req, res){
    Item.remove({
        _id: req.params.item_id
	}, function(err, item) {
		if (err) res.send(err);
        res.json({ msg: 'Successfully deleted' });
	}); 
};

exports.editItem = function(req, res){
	Item.findById(req.params.item_id, function (err, item) {
		if (err) res.send(err);

		if (req.body.name) item.name = req.body.name;
		if (req.body.description) item.description = req.body.description;
		if (req.body.thumb) item.thumb = req.body.thumb;
		if (req.body.category) item.category = req.body.category;

		item.save(function (err) {
			if (err) res.send(err);

			res.json({msg: 'Item updated'});
		});
	});	
};

exports.findItem = function(req, res){
	Item.findById(req.params.item_id, function (err, item) {
		if (err) res.send(err);

		res.json(item);
	});
};

exports.getItemsByCategory = function(req, res){
	console.log('name', req.params.name)
	var cat = String(req.params.name).toUpperCase();
	Item.find({category: cat}, function (err, items) {
		if (err) res.send(err);
		console.log('items', items)
	 	res.json(items);
	});	
};
