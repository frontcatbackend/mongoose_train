const Router = require('express')
const router = new Router
const Actor = require('../models/actor.model')
const Film = require('../models/film.model')
const Country = require('../models/country.model')

router.post('/addactor', async (req, res) =>{
    try{
        const actor = new Actor(req.body)
        await actor.save()
        res.status(201).json(actor)

        const country = await Country.findById({_id: actor.country})
        await country.save()
        res.status(200).json(country)
    }catch(err){
        res.status(400).json({success: false, message:err.message});
    }
})
router.post('/addfilm', async (req, res) =>{
    try{
       const film = new Film(req.body)
       await film.save()

       const actor = await Actor.findById({_id: film.actor})
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
router.get('/countries', async (req, res) =>{
    try{
      const countries = await Country.find()
      .populate({path:'actorCountry', select:'name'})
      res.status(200).json(countries)
    }catch(err){
        res.status(400).json({success: false, message:err.message});
    }
})

router.post('/addcountry', async (req, res) =>{ 
    // 60a5c283da14d21bc0c15994
    try{
        const country = new Country(req.body)
        await country.save()
        res.status(201).json(country)
    }catch(err){
        res.status(400).json({success: false, message:err.message});
    }
})

// router.post('/addactortocountry', async (req, res) =>{ 

//     try{
//        const actor = new Actor(req.body)
//        await actor.save()

//        const country = await Country.findById({_id: actor.country})
//        await country.save()
//        res.status(200).json(country)
//     }catch(err){
//         res.status(400).json({success: false, message:err.message});
//     }
// })

module.exports = router

// "60a5b0d42e2b0a329004251f"