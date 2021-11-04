const { response } = require('express');
const { product_model } = require('../models');

/** CRUD-create */
const addProduct = async (req, res = response) => {
	
	const new_product = new product_model(req.body);
	
	try {
		const product = await new_product.save();
		res.status(200).json({
			isOk: true,
			mensaje: '!El producto '  + req.body.product_description + ' se almacenó correctamente!',
			new_product: product
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			isOk: false,
			mensaje: 'Error al crear el producto.'
		});
	};
}

/** CRUD-read */
const listProducts = async (req, res = response) => {
	
	const products = await product_model.find(); //.populate('field')
	
	res.status(200).json({
		isOk: true,
		mensaje: 'Lista de productos.',
		products
		});
}

/** CRUD-update */
const updateProduct = async (req, res = response) => {
	
	const productId = req.params.id;
		
	try {
		const product = await product_model.findById(productId);
		if(!product) {
			res.status(400).json({
				isOk: false,
				mensaje: 'El ID del producto no se encuentra en la base de datos.'
			});
		}
		const updated_product = await product_model.findByIdAndUpdate(productId, req.body, { new: true });
		res.status(400).json({
			isOk: true,
			mensaje: '!El producto '  + req.body.product_description + ' se actualizó correctamente!',
			product: updated_product
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			isOk: false,
			mensaje: 'Error al actualizar el producto.'
		});
	};
}

/** CRUD-delete */
const deleteProduct = async (req, res = response) => {
	
	const productId = req.params.id;
		
	try {
		const product = await product_model.findById(productId);
		if(!product) {
			res.status(400).json({
				isOk: false,
				mensaje: 'El ID del producto no se encuentra en la base de datos.'
			});
		}
		await product_model.findByIdAndDelete(productId);
		res.json({
			isOk: true,
			mensaje: '!El producto se eliminó correctamente!',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			isOk: false,
			mensaje: 'Error al eliminar el producto.'
		});
	};
}

module.exports = Object.freeze({
    addProduct,
    listProducts,
    updateProduct,
    deleteProduct
});
