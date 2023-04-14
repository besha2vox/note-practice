const Note = require('../../db/models/noteModel');

const getAllNotes = async () => await Note.find({});

const create = async (data) => {
    const note = new Note(data);
    await note.save();
    return note;
};

const getById = async (id) => await Note.findById(id);

const remove = async (id) => await Note.findByIdAndDelete(id);

module.exports = {
    getAllNotes,
    create,
    getById,
    remove,
};
