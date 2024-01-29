const express = require('express');
const clubsControllers = require('../../controllers/clubs/clubsControllers');
const clubsMiddleware = require('../../middlewares/clubs/clubsMiddleware');
const router = express.Router();

router.get('/clubs', clubsControllers.getAll);
router.get('/clubs/:id', clubsControllers.getById);
router.get('/clubs/uf/:uf', clubsControllers.getByUf);
router.post('/clubs', clubsMiddleware.validateFields, clubsControllers.postClub);
router.put('/clubs/:id', clubsMiddleware.validateFields, clubsControllers.putClub);
router.delete('/clubs/:id', clubsControllers.deleteClub);

module.exports = router;