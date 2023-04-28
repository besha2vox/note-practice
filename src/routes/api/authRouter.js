const express = require('express');
const { asyncWrapper } = require('../../helpers');
const { register, setAvatar } = require('../../controllers/auth');
const { userNoteValidation, upload } = require('../../middlewares');

const authRouter = express.Router();

authRouter.post('/register', userNoteValidation, asyncWrapper(register));
authRouter.patch('/avatars', upload.single('avatar'), asyncWrapper(setAvatar));

module.exports = authRouter;
