'user strict';

const Sequelize = require('sequelize');
const sequelize = require('./db.js');

const Artist = sequelize.define('artists', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: Sequelize.TEXT,
});

const Song = sequelize.define('songs', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: Sequelize.TEXT,
  id_artist: Sequelize.INTEGER,
});


Artist.getAllArtists = function getAllArtists() {
  return Artist.findAll({
    attributes: ['id', 'name'],
  });
};

Song.getArtistSongs = function getArtistSongs(artistId) {
  return Song.findAll({
    where: {
      id_artist: artistId,
    },
  });
};

Song.getArtistSong = function getArtistSong(artistId, songId) {
  return Song.findAll({
    where: {
      id_artist: artistId,
      id: songId,
    },
  });
};

Song.getSongsLike = function getSongsLike(pattern) {
  return Song.findAll({
    where: {
      name: {
        $like: `%${pattern}%`,
      },
    },
  });
};

Artist.getArtistsLike = function getArtistsLike(pattern) {
  return Artist.findAll({
    where: {
      name: {
        $like: `%${pattern}%`,
      },
    },
  });
};

Artist.getArtist = function getArtist(artistId) {
  return Artist.findAll({
    where: {
      id: artistId,
    },
  });
};

Artist.createArtist = function createArtist(newArtist) {
  return Artist.findOrCreate({
    where: {
      name: newArtist.name,
    },
  });
};

Song.getAllSongs = function getAllSongs() {
  return Song.findAll({
    attributes: ['id', 'name', 'id_artist'],
  });
};

Song.createSong = function createSong(newSong) {
  return Song.findOrCreate({
    where: {
      name: newSong.name,
      id_artist: newSong.id_artist,
    },
  });
};

module.exports = { Artist, Song };
