/*
 vamos a traernos los archivos 
 route de characters y route de episodes
*/
const {Router} = require('express')

const CharacterRoutes = require('./characters')
const EpisodesRoutes = require('./episodes')


const router = Router()

router.use('/character', CharacterRoutes)
router.use('/episode', EpisodesRoutes)

module.exports = router;