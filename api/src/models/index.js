// inicializamos sequelize y hacemos las relaciones 
const {Sequelize} = require('sequelize');
const {
    dbName,
    dbUser,
    dbPassword,
    dbHost
} = require('../utils/config');
const CharacterFactory = require('./Characters');
const EpisodeFactory = require('./Episodes');

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`);

const Character = CharacterFactory(sequelize)
const Episode = EpisodeFactory(sequelize)

//aca puedo hacer mis relaciones 
Character.belongsToMany(Episode, {through: 'CharacterEpisode', as: 'episode'})
Episode.belongsToMany(Character, {through: 'CharacterEpisode', as: 'episode'})

module.exports = {
    conn: sequelize,
    Character,
    Episode
}

/*
models ----> se comunica con la base de datos
rutas ----> que son la puerta de entrada a nuestra api 
controller ---> lo que hace es ser el intermediario entre nuestras rutas y
nuestra base de datos
*/

