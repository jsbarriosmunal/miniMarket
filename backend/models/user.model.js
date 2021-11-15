const { Schema, model } = require('mongoose');

const userSchema = Schema({
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_role: {
        type: String,
		required: true,
		default: '61809bfd4885d65e296254dd'
    },
    user_status: {
        type: String,
        required: true,
		default: '6180b75027e62df019ba98bc'
    }
});

module.exports = model('user', userSchema);
