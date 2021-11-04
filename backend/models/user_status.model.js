const { Schema, model } = require('mongoose');

const UserStatusSchema = Schema({
    user_status: {
        type: String,
        required: true,
    }
},
{
	collection: 'user_statuses'	
});

module.exports = model('user_status', UserStatusSchema);
