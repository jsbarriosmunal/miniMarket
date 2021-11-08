const product_model = require('./product.model');
const role_model = require('./role.model');
const sale_status_model = require('./sale_status.model')
const sale_model = require('./sale.model');
const user_status_model = require('./user_status.model');
const user_model = require('./user.model');

module.exports = Object.freeze({
    product_model,
	role_model,
	sale_status_model,
	sale_model,
	user_status_model,
	user_model
});
