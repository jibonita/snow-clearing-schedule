const owners = [
    { id: 1, title: 'ap. 1', ownerName: 'Вили и Иван' },
    { id: 2, title: 'ap. 2', ownerName: 'Денис' },
    { id: 3, title: 'ap. 3', ownerName: 'Силвия' },
    { id: 4, title: 'ap. 4', ownerName: 'Цанко' },
    { id: 5, title: 'ap. 5', ownerName: 'СТеф' },
    { id: 6, title: 'ap. 6', ownerName: 'Людмил' },
    { id: 7, title: 'ap. 7', ownerName: 'Юлия' },
    { id: 8, title: 'ap. 8', ownerName: 'Тодор' },
    { id: 9, title: 'ap. 9', ownerName: 'Пепи и Мишо' },
    { id: 10, title: 'ap. 10', ownerName: 'Марияна' },
    { id: 11, title: 'ap. 11', ownerName: 'Тони' },
    { id: 12, title: 'parter', ownerName: 'Лекарите' },
    { id: 13, title: 'parking lot #3', ownerName: 'Ел колата' },
    { id: 14, title: 'parking lot #5', ownerName: 'Джипа' }
];

const express = require('express');
const router = express.Router();
const { authJwt } = require("../middleware");

// const jwt = require('jsonwebtoken');

// const accessTokenSecret = 'snow-clearing-app-super-shared-secret';

router.get('/owners',
    [authJwt.verifyToken],
    (req, res) => {
        res.json({
            owners
        });

    });

module.exports = router;