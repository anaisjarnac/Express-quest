const authRouter = require('express').Router();
const User = require('../models/user');

authRouter.post('/checkCredentials', (req, res) => {
    const {email, hashedPassword} = req.body;
    User.findByEmail(email)
    .then((result) => {
        User.verifyPassword(hashedPassword, result.hashedPassword)
        .then((passwordCorrect) => {
            if (!passwordCorrect) { 
                res.status(401).json({message: 'Invalid credentials'});
             } else {
                res.status(200).json({message: 'Valid credentials'});
             }
        })
    } )});

module.exports = authRouter;