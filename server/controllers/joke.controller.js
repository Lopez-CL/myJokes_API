const Joke = require("../models/joke.model");

const getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({jokes: allJokes})
        })
        .catch((err)=>{
            res.json({message: 'Something went wrong', error: err})
        })
};

const getJokeById = (req, res) => {
    Joke.findOne({_id: req.params._id})
    .then((oneJoke) => {
        res.json({joke: oneJoke})
    })
    .catch((err)=>{
        res.json({message: 'Something went wrong', error: err})
    })
};

const createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then((createdJoke) => {
        res.json({joke: createdJoke})
    })
    .catch((err)=>{
        res.json({message: 'Something went wrong', error: err})
    })
};

const updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id},
        req.body,
        {new: true, runValidators: true,})
    .then((updatedJoke) => {
        res.json({joke: updatedJoke})
    })
    .catch((err)=>{
        res.json({message: 'Something went wrong', error: err})
    })
};

const deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
    .then((deletedJoke) => {
        res.json({deletedJoke: deletedJoke})
    })
    .catch((err)=>{
        res.json({message: 'Something went wrong', error: err})
    })
};

module.exports = {
    getAllJokes,
    getJokeById,
    createNewJoke,
    updateJoke,
    deleteJoke,
};