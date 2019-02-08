'user strict';
var sequelize = require('./db.js');
const Sequelize = require('sequelize')

const Artist = sequelize.define('artists', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.TEXT
})

const Song = sequelize.define('songs', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.TEXT,
    id_artist: Sequelize.INTEGER
})


Artist.getAllArtists = async function getAllArtists() {
    const result = await Artist.findAll({
        attributes: ['id', 'name']
    });
    return result;
};

Song.getArtistSongs = async function getArtistSongs(artistId) {
    const result = await Song.findAll({
        where: {
            id_artist: artistId
        }
    });
    return result;
};

Song.getArtistSong = async function getArtistSong(artistId, songId) {
    const result = await Song.findAll({
        where: {
            id_artist: artistId,
            id: songId
        }
    });
    return result;
};

Song.getSongsLike = async function getSongsLike(pattern) {
    const result = await Song.findAll({
        where: {
            name: {
                $like: '%' + pattern + '%'
            }
        }
    });
    return result;
};

Artist.getArtistsLike = async function getArtistsLike(pattern) {
    const result = await Artist.findAll({
        where: {
            name: {
                $like: '%' + pattern + '%'
            }
        }
    });
    return result;
};

Artist.getArtist = async function getArtist(artistId) {
    const result = await Artist.findAll({
        where: {
            id: artistId
        }
    });
    return result;
};

Artist.createArtist = async function createArtist(newArtist) {
    const result = await Artist.findOrCreate({
        where: {
            name: newArtist.name
        }
    });
    return result;
};

Song.getAllSongs = async function getAllSongs() {
    const result = await Song.findAll({
        attributes: ['id', 'name', 'id_artist']
    });
    return result;
};

Song.createSong = async function createSong(newSong) {
    const result = await Song.findOrCreate({
        where: {
            name: newSong.name,
            id_artist: newSong.id_artist
        }
    })
    return result;
};

module.exports = { Artist, Song }