const router = require('express').Router();
let User = require('../models/user.model');

//GET all users
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//GET user by id
router.route('/:id').get((req, res) => {
    const id = req.params.id

    User.findById(id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
})

//ADD new user
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

//UPDATE user
router.route('/update/:id').put((req, res) => {
    const id = req.params.id;
    const username = req.body.username

    User.findByIdAndUpdate(id)
    .then(user => {
        user.username = username
        
        user.save()
        .then(user => res.json('User updated'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

//DELETE user
router.route('/:id').delete((req, res) => {
    const id = req.params.id

    User.findByIdAndDelete(id)
    .then(user => res.json('User deleted'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;