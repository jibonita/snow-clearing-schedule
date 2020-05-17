const owners = [
    { id: 1, title: 'ap. 1', ownerName: 'Вили и Иван' },
    { id: 2, title: 'ap. 2', ownerName: 'Денис' },
    { id: 3, title: 'ap. 3', ownerName: 'Силвия' },
    { id: 4, title: 'ap. 4', ownerName: 'Цанко' },
    { id: 5, title: 'ap. 5', ownerName: 'СТеф' },
    // { id: 6, title: 'ap. 6', ownerName: 'Людмил' },
    // { id: 7, title: 'ap. 7', ownerName: 'Юлия' },
    // { id: 8, title: 'ap. 8', ownerName: 'Тодор' },
    // { id: 9, title: 'ap. 9', ownerName: 'Пепи и Мишо' },
    // { id: 10, title: 'ap. 10', ownerName: 'Марияна' },
    // { id: 11, title: 'ap. 11', ownerName: 'Тони' },
    // { id: 12, title: 'parter', ownerName: 'Лекарите' },
    // { id: 13, title: 'parking lot #3', ownerName: 'Ел колата' },
    // { id: 14, title: 'parking lot #5', ownerName: 'Джипа' }
];

const flats = [
    { id: 1, name: 'ap. 1', owner: 1, active: true },
    { id: 2, name: 'ap. 2', owner: 2, active: true },
    { id: 3, name: 'ap. 3', owner: 3, active: false },
    { id: 4, name: 'ap. 4', owner: 4, active: true },
    { id: 5, name: 'ap. 5', owner: 5, active: true },
    // { id: 6, name: 'ap. 6', owner: 6, active: true },
    // { id: 7, name: 'ap. 7', owner: 7, active: true },
    // { id: 8, name: 'ap. 8', owner: 8, active: true },
    // { id: 9, name: 'ap. 9', owner: 9, active: true },
    // { id: 10, name: 'ap. 10', owner: 10, active: true },
    // { id: 11, name: 'ap. 11', owner: 11, active: true },
    // { id: 12, name: 'parter', owner: 12, active: true }
];

const express = require('express');
const router = express.Router();
const { authJwt } = require("../middleware");

router.get('/owners',
    [authJwt.verifyToken],
    (req, res) => {
        res.json({
            owners
        });

    });

router.get('/flats',
    [authJwt.verifyToken],
    (req, res) => {
        res.json({
            flats
        });

    });

module.exports = router;