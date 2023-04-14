const { isValidObjectId } = require('mongoose');
const { httpError } = require('../helpers');

const checkId = (req, res, next) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return next(httpError(404));
    }
    next();
};

module.exports = checkId;
