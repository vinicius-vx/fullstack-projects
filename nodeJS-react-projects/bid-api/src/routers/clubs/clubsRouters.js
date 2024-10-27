const express = require('express');
const clubsControllers = require('../../controllers/clubs/clubsControllers');
const clubsMiddleware = require('../../middlewares/clubs/clubsMiddleware');
const authenticationMiddleware = require ('../../middlewares/authentication/authenticationMiddlewares');
const router = express.Router();

router.get('/clubs', authenticationMiddleware.tokenVerify,clubsControllers.getAll);
router.get('/clubs/:id', authenticationMiddleware.tokenVerify, clubsControllers.getById);
router.get('/clubs/uf/:uf', authenticationMiddleware.tokenVerify, clubsControllers.getByUf);
router.post('/clubs', authenticationMiddleware.tokenVerify, clubsMiddleware.validateFields, clubsControllers.postClub);
router.put('/clubs/:id', authenticationMiddleware.tokenVerify, clubsMiddleware.validateFields, clubsControllers.putClub);
router.delete('/clubs/:id', authenticationMiddleware.tokenVerify, clubsControllers.deleteClub);

module.exports = router;