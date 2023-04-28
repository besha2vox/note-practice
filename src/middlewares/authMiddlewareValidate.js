const Joi = require('joi');
const { httpError } = require('../helpers');

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    avatar: Joi.string(),
});

const userNoteValidation = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    console.log(error);
    if (error) {
        return next(httpError(400, error.message));
    }

    next();
};

module.exports = userNoteValidation;
