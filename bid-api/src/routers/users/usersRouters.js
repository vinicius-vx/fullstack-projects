const express = require('express');
const usersControllers = require('../../controllers/users/usersControllers');
const usersMiddlewares = require('../../middlewares/users/usersMiddleware');
const router = express.Router();

router.get('/users', usersControllers.getAll);
router.get('/users/:id', usersControllers.getById);
router.get('/users/club/:id', usersControllers.getByClubId);
router.post('/users', usersMiddlewares.validateFields, usersControllers.postUser);
router.post('/users/login', usersControllers.postLogin);
router.put('/users/:id', usersMiddlewares.validateFields, usersControllers.putUser);
router.delete('/users/:id', usersControllers.deleteUser);

module.exports = router;