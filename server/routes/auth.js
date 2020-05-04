const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'a',
        password: 'a',
        role: 'member'
    }
];

const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const accessTokenSecret = 'snow-clearing-app-super-shared-secret';

router.post('/login', (req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const d = new Date();

        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '10s' });
        console.log("Ima user");

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});

module.exports = router;