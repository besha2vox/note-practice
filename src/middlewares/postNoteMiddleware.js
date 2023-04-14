const Joi = require('joi');
const { httpError } = require('../helpers');

const postSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    text: Joi.string().required().min(20).max(500),
});

const postNoteValidation = (req, res, next) => {
    const { error } = postSchema.validate(req.body);
    console.log(error);
    if (error) {
        return next(httpError(400, error.message));
    }

    next();
};

module.exports = postNoteValidation;
