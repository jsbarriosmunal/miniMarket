const { Schema, model } = require('mongoose');

const SaleStatusSchema = Schema({
    sale_status: {
        type: String,
        required: true,
    }
},
{
	collection: 'sale_statuses'	
});

module.exports = model('sale_status', SaleStatusSchema);
