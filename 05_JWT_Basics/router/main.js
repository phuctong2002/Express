const express = require('express');
const router = express.Router();
const {testAxios, testPostAxios} = require('../controller/testAxiosController');

const {
    loginController,
    addUser,
    dashboard
} = require('../controller/index');
const auth = require('../middleware/auth');

router.route('/dashboard').post( auth, dashboard);
router.route('/login').post(loginController);
router.route('/').post(addUser);
router.route('/testAxios').get( testAxios).post( testPostAxios);

module.exports = router;