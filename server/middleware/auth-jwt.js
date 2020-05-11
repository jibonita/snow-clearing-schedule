const jwt = require("jsonwebtoken");
const config = require('../config/auth.config');
// const db = require("../models");
// const User = db.user;

verifyToken = (req, res, next) => {
    // let token = req.headers["x-access-token"];
    let token = req.headers["authorization"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    token = token.split(' ')[1];
    console.log(token);

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = { verifyToken };