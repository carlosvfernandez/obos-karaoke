'use strict';

var { Artist, Song } = require('../model/appModel.js');



exports.list_songs_like = function (req, res) {
  var pattern = req.body.pattern;

  if (!pattern) {
    res.status(400).send({ error: true, message: 'Please provide the pattern.' });
  }
  else {
    Song.getSongsLike(pattern, function (err) {
      if (err)
        res.send(err);
    });
  }
};

exports.list_artists_like = function (req, res) {
  var pattern = req.body.pattern;

  if (!pattern) {
    res.status(400).send({ error: true, message: 'Please provide the pattern.' });
  }
  else {
    Artist.getArtistsLike(pattern, function (err) {
      if (err)
        res.send(err);
    });
  }
};


exports.list_all_artists = async function (req, res) {
  try {
    const result = await Artist.getAllArtists();
    res.send(result);
  } catch (err) {
    res.status(500).json(err);
    console.log('res', err);
  };
};

exports.list_artist = async function (req, res) {
  try {
    const result = await Artist.getArtist(req.params.artistId);
    res.send(result);
  } catch (err) {
    res.status(500).json(err);
    console.log('res', err);
  };
};

exports.list_artist_songs = function (req, res) {
  var artistId = req.params.artistId;

  if (!artistId) {
    res.status(400).send({ error: true, message: 'Please provide the ID of the artist.' });
  }
  else {
    Song.getArtistSongs(artistId, function (err) {
      if (err)
        res.send(err);
    });
  }
};

exports.list_artist_song = function (req, res) {
  var artistId = req.params.artistId;
  var songId = req.params.artistId;

  if (!artistId || !songId) {
    res.status(400).send({ error: true, message: 'Please provide the ID of the artist/song.' });
  }
  else {
    Song.getArtistSong(artistId, songId, function (err) {
      if (err)
        res.send(err);
    });
  }
};


exports.create_artist = function (req, res) {
  var new_artist = new Artist(req.body);

  if (!new_artist.name) {
    res.status(400).send({ error: true, message: 'Please provide the name of the artist' });
  }
  else {
    Artist.createArtist(new_artist, function (err) {
      if (err)
        res.send(err);
    });
  }
};

exports.list_all_songs = async function (req, res) {
  try {
    const result = await Song.getAllSongs();
    res.send(result);
  } catch (err) {
    res.status(500).json(err);
    console.log('res', err);
  };
};

exports.create_song = function (req, res) {
  var new_song = new Song(req.body);
  console.log(new_song)
  if (!new_song.name || !new_song.id_artist) {
    res.status(400).send({ error: true, message: 'Please provide the name of the song' });
  }
  else {
    Song.createSong(new_song, function (err, artist) {
      if (err)
        res.send(err);
    });
  }
};