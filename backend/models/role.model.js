const { Schema, model } = require('mongoose');

const roleSchema = Schema({
    user_role: {
        type: String,
        required: true
    }
});

module.exports = model('role', roleSchema);
