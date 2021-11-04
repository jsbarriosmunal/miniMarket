const { Schema, model } = require('mongoose');

const productSchema = Schema({
    product_id: {
        type: String,
        required: true,
		unique: true
    },
    product_description: {
        type: String,
        required: true
    },
    product_unit_value: {
        type: Number,
        required: true,
		min: 1
    },
    product_availability: {
        type: Boolean,
        default: true
    }
});

module.exports = model('product', productSchema);
