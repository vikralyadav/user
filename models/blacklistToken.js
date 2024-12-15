const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


const blacklistedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1h' // Token will be removed from blacklist after 1 hour
    }
});

const BlacklistedToken = mongoose.model('BlacklistedToken', blacklistedTokenSchema);