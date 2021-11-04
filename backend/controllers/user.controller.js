const { response } = require('express');
const { user_model } = require('../models');

/** CRUD-create */
const addUser = async (req, res = response) => {
	
	const new_user = new user_model(req.body);
	
	try {
		const user = await new_user.save();
		res.status(200).json({
			isOk: true,
			mensaje: '!El usuario '  + req.body.user_name + ' se almacenó correctamente!',
			new_user: user
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			isOk: false,
			mensaje: 'Error al crear el usuario.'
		});
	};
}

/** CRUD-read */
const listUsers = async (req, res = response) => {
	
	const users = await user_model.find(); //.populate('field')
	
	res.status(200).json({
		isOk: true,
		mensaje: 'Lista de usuarios.',
		users
		});
}

/** CRUD-update */
const updateUser = async (req, res = response) => {
	
	const userId = req.params.id;
		
	try {
		const user = await user_model.findById(userId);
		if(!user) {
			res.status(400).json({
				isOk: false,
				mensaje: 'El ID del usuario no se encuentra en la base de datos.'
			});
		}
		const updated_user = await user_model.findByIdAndUpdate(userId, req.body, { new: true });
		res.status(400).json({
			isOk: true,
			mensaje: '!El usuario '  + req.body.user_name + ' se actualizó correctamente!',
			user: updated_user
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			isOk: false,
			mensaje: 'Error al actualizar el usuario.'
		});
	};
}

/** CRUD-delete */
const deleteUser = async (req, res = response) => {
	
	const userId = req.params.id;
		
	try {
		const user = await user_model.findById(userId);
		if(!user) {
			res.status(400).json({
				isOk: false,
				mensaje: 'El ID del usuario no se encuentra en la base de datos.'
			});
		}
		await user_model.findByIdAndDelete(userId);
		res.json({
			isOk: true,
			mensaje: '!El usuario se eliminó correctamente!',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			isOk: false,
			mensaje: 'Error al eliminar el usuario.'
		});
	};
}

module.exports = Object.freeze({
    addUser,
    listUsers,
    updateUser,
    deleteUser
});
