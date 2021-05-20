const Router = require('express')
const router = new Router
const Actor = require('../models/actor.model')
const Film = require('../models/film.model')

router.post('/addactor', async (req, res) =>{
    try{
        const actor = new Actor(req.body)
        await actor.save()
        res.status(201).json(actor)
    }catch(err){
        res.status(400).json({success: false, message:err.message});
    }
})
router.post('/addfilm', async (req, res) =>{
    try{
       const film = new Film(req.body)
       await film.save()

       const actor = await Actor.findById({_id: film.actor})
    //    actor.films.push(film)
       await actor.save()
       res.status(200).json(film)
    }catch(err){
        res.status(400).json({success: false, message:err.message});
    }
})
router.get('/actors', async (req, res) =>{
    try{
       const actors = await Actor.find()
        .populate({path:'filmsPublished', select:'name year'})
        res.status(200).json(actors)
    }catch(err){
        res.status(400).json({success: false, message:err.message});
    }
})

module.exports = router

// "60a5b0d42e2b0a329004251f"