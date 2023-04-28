const Note = require('./models/noteModel');
const connectionDB = require('./connection');
const User = require('./models/userModel');

module.exports = {
    Note,
    connectionDB,
    User,
};
