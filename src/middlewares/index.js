const postNoteValidation = require('./postNoteMiddleware');
const checkId = require('./checkId');
const userNoteValidation = require('./authMiddlewareValidate');
const upload = require('./uploadAvatar');

module.exports = {
    postNoteValidation,
    checkId,
    userNoteValidation,
    upload,
};
