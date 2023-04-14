const { Schema, model } = require('mongoose');

const { handleSaveError } = require('../../helpers');

// const commentSchema = new Schema({
//     comment: String,
// });

const noteSchema = new Schema(
    {
        title: {
            type: String,
            require: [true, 'title is require'],
        },
        author: {
            type: String,
            require: [true, 'title is require'],
        },
        text: {
            type: String,
            require: [true, 'title is require'],
            min: 20,
            max: 500,
        },
        likes: {
            type: Number,
            default: 0,
        },
        // comments: [commentSchema],
        stared: {
            type: Boolean,
            default: false,
        },
    },
    { versionKey: false }
);

noteSchema.post('save', handleSaveError);

const Note = model('notes', noteSchema);

module.exports = Note;
