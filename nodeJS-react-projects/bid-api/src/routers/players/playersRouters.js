const express = require('express');
const playersControllers = require('../../controllers/players/playersControllers');
const playersMiddlewares = require('../../middlewares/players/playersMiddleware');
const authenticationMiddleware = require ('../../middlewares/authentication/authenticationMiddlewares');
const router = express.Router();

router.get('/players', authenticationMiddleware.tokenVerify, playersControllers.getAll);
router.get('/players/:id', authenticationMiddleware.tokenVerify, playersControllers.getById);
router.get('/players/contract/:id', authenticationMiddleware.tokenVerify, playersControllers.getByContractId);
router.get('/players/club/:id', authenticationMiddleware.tokenVerify, playersControllers.getPlayersByClub);
router.post('/players', authenticationMiddleware.tokenVerify, playersMiddlewares.validateFields, playersControllers.postPlayer);
router.put('/players/:id', authenticationMiddleware.tokenVerify, playersMiddlewares.validateFields, playersControllers.putPlayer);
router.delete('/players/:id', authenticationMiddleware.tokenVerify, playersControllers.deletePlayer);

module.exports = router;