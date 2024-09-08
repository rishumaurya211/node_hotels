const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

router.post('/', async (req, res) => {
    try {
        const data2 = req.body
        const newMenu = new MenuItem(data2);// all the data,must be required that are available in db;
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" })
    }
})
// Get method to get  the Menu item

router.get('/', async (req, res) => {
    try {
        const data2 = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data2);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})



module.exports = router