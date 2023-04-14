const express = require('express');
const { asyncWrapper } = require('../../helpers/');
const {
    getAll,
    createNote,
    getOneNote,
    deleteOneNote,
} = require('../../controllers/notes');
const { postNoteValidation } = require('../../middlewares');
const { checkId } = require('../../middlewares');

const notesRouter = express.Router();

notesRouter.get('/', asyncWrapper(getAll));
notesRouter.get('/:id', checkId, getOneNote);
notesRouter.post('/', postNoteValidation, asyncWrapper(createNote));
notesRouter.delete('/:id', checkId, asyncWrapper(deleteOneNote));
notesRouter.put('/:id');
notesRouter.patch('/:id/like');
notesRouter.patch('/:id/comment');
notesRouter.patch('/:id/stared');

module.exports = notesRouter;
