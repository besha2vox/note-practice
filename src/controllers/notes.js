const { httpError } = require('../helpers');
const {
    getAllNotes,
    create,
    getById,
    remove,
} = require('../services/notes/notesServices');

const getAll = async (req, res, next) => {
    const notes = await getAllNotes();
    res.status(200).json(notes);
};

const createNote = async (req, res, next) => {
    const note = await create(req.body);
    res.status(201).json(note);
};

const getOneNote = async (req, res, next) => {
    const { id } = req.params;
    const note = await getById(id);

    if (!note) {
        return next(httpError(404));
    }
    res.status(200).json(note);
};

const deleteOneNote = async (req, res, next) => {
    const { id } = req.params;
    const result = await remove(id);

    if (!result) {
        return next(httpError(404));
    }
    res.status(200).json({ message: 'note was successfuly removed' });
};

module.exports = {
    getAll,
    createNote,
    getOneNote,
    deleteOneNote,
};
