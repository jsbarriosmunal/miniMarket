const { Schema, model } = require('mongoose');

const saleSchema = Schema({
    sale_id: {
        type: String,
        required: true,
		unique: true
    },
    sale_total_value: {
        type: Number,
        required: true,
		min: 1
    },
    product_id: {
		type: Schema.Types.ObjectId,
		ref: 'product',
        required: true,
		unique: true
    },
    product_quantity: {
        type: Number,
        required: true,
		min: 1
    },
    product_unit_value: {
		type: Schema.Types.ObjectId,
		ref: 'product',
        required: true,
		min: 1
    },
	sale_date: {
        type: Date,
        //required: true,
		default: Date.now
    },
    client_id: {
        type: String,
        required: true
    },
    client_name: {
        type: String,
        required: true
    },
    seller_name: {
        type: String,
        required: true
    },
    sale_status: {
        type: Schema.Types.ObjectId,
        ref: 'sale_status',
        required: true,
		default: '6180b75027e62df019ba98bc'
    }
});

module.exports = model('sale', saleSchema);
