const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middlewares/auth');

router.post('/register',userCtrl.register);

router.post('/login',userCtrl.login);

router.get('/auth', auth, userCtrl.getUser);

module.exports = router;