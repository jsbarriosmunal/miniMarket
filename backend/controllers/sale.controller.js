const { response } = require('express');
const { sale_model } = require('../models');

/** CRUD-create */
const addSale = async (req, res = response) => {
	
	const new_sale = new sale_model(req.body);
	
	try {
		const sale = await new_sale.save();
		res.status(200).json({
			isOk: true,
			mensaje: '!La venta '  + req.body.sale_id + ' se almacenó correctamente!',
			new_sale: sale
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			isOk: false,
			mensaje: 'Error al crear la venta.'
		});
	};
}

/** CRUD-read */
const listSales = async (req, res = response) => {
	
	const sales = await sale_model.find(); //.populate('field')
	
	res.status(200).json({
		isOk: true,
		mensaje: 'Lista de ventas.',
		sales
		});
}

/** CRUD-update */
const updateSale = async (req, res = response) => {
	
	const saleId = req.params.id;
		
	try {
		const sale = await sale_model.findById(saleId);
		if(!sale) {
			res.status(400).json({
				isOk: false,
				mensaje: 'El ID de la venta no se encuentra en la base de datos.'
			});
		}
		const updated_sale = await sale_model.findByIdAndUpdate(saleId, req.body, { new: true });
		res.status(400).json({
			isOk: true,
			mensaje: '!La venta '  + req.body.sale_id + ' se actualizó correctamente!',
			sale: updated_sale
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			isOk: false,
			mensaje: 'Error al actualizar la venta.'
		});
	};
}

/** CRUD-delete */
const deleteSale = async (req, res = response) => {
	
	const saleId = req.params.id;
		
	try {
		const sale = await sale_model.findById(saleId);
		if(!sale) {
			res.status(400).json({
				isOk: false,
				mensaje: 'El ID de la venta no se encuentra en la base de datos.'
			});
		}
		await sale_model.findByIdAndDelete(saleId);
		res.json({
			isOk: true,
			mensaje: '!La venta se eliminó correctamente!',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			isOk: false,
			mensaje: 'Error al eliminar la venta.'
		});
	};
}

module.exports = Object.freeze({
    addSale,
    listSales,
    updateSale,
    deleteSale
});
