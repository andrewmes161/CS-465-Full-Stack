const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

const authController = require('../controllers/authentication')
const tripsController = require('../controllers/trips');

// Added from the Discussions board...
const auth = jwt({
    secret: process.env.JWT_SECRET, // references the secret file
    userProperty: 'payload',
    algorithms: ["HS256"] // type of cypher algorithm being used
});

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip)

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;
