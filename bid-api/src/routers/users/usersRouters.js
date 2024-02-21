const express = require('express');
const usersControllers = require('../../controllers/users/usersControllers');
const usersMiddlewares = require('../../middlewares/users/usersMiddleware');
const authenticationMiddleware = require ('../../middlewares/authentication/authenticationMiddlewares');

const router = express.Router();

router.get('/users', authenticationMiddleware.tokenVerify, usersControllers.getAll);
router.get('/users/:id', authenticationMiddleware.tokenVerify, usersControllers.getById);
router.get('/users/club/:id', authenticationMiddleware.tokenVerify, usersControllers.getByClubId);
router.post('/users', usersMiddlewares.validateFields, usersControllers.postUser);
router.post('/users/login', usersControllers.postLogin);
router.put('/users/:id', authenticationMiddleware.tokenVerify, usersMiddlewares.validateFields, usersControllers.putUser);
router.delete('/users/:id', authenticationMiddleware.tokenVerify, usersControllers.deleteUser);

module.exports = router;