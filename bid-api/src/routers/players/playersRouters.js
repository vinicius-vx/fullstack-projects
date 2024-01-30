const express = require('express');
const playersControllers = require('../../controllers/players/playersControllers');
const playersMiddlewares = require('../../middlewares/players/playersMiddleware');
const router = express.Router();

router.get('/players', playersControllers.getAll);
router.get('/players/:id', playersControllers.getById);
router.get('/players/contract/:id', playersControllers.getByContractId);
router.get('/players/club/:id', playersControllers.getPlayersByClub);
router.post('/players', playersMiddlewares.validateFields, playersControllers.postPlayer);
router.put('/players/:id', playersMiddlewares.validateFields, playersControllers.putPlayer);
router.delete('/players/:id', playersControllers.deletePlayer);

module.exports = router;