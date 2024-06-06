const connection = require('../../config/connection');
const router = require('express').Router();
const {
createUser,
getUsers,
getSingleUser,
} = require('../../controllers/user.Controller.js');

router.get('/').get(getUsers).post(createUser);

router.get('/:userId').get(getSingleUser);

router.post('/signup',function (first, last, email, password) {
    User.createUser(first, last, email, password)}
);

module.exports = router;