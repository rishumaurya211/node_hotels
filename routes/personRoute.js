const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

// client data where we can send the data..
// Post route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body// Assuming the request body contains the person data

        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


// Get method to get  the person 

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})




// Parameterises response 
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status.apply(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })

    }
})


router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;// Extract the od from the URL parameter
        const updatePersonId = req.body;// UPdate data for the person

        const response = await Person.findByIdAndUpdate(personId, updatePersonId, {
            new: true, // Return thr updated document
            runValidators: true // Run Mongoose Validator
        })
        if (!response) {
            return res.status(404).json({ error: 'Person not found' })
        }
        console.log("Data updated")
        res.status(200).json(response)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" })
    }
})



router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;

        // Assuming you have a Person Model

        const response = await Person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: 'Person not found' })
        }
        console.log("Data deleted")
        res.status(200).json({ message: 'Person deleted succefully' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router