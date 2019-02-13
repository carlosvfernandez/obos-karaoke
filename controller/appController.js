

const { Artist, Song } = require('../model/appModel.js');


exports.list_songs_like = async ({ body: { pattern } }, res) => {
  if (!pattern) {
    return res.status(400).send({ error: true, message: 'Please provide the pattern.' });
  }
  const result = await Song.getSongsLike(pattern);
  return res.send(result);
};

exports.list_artists_like = async ({ body: { pattern } }, res) => {
  if (!pattern) {
    return res.status(400).send({ error: true, message: 'Please provide the pattern.' });
  }
  const result = await Artist.getArtistsLike(pattern);
  return res.send(result);
};


exports.list_all_artists = async (req, res) => {
  try {
    const result = await Artist.getAllArtists();
    return res.send(result);
  } catch (err) {
    return res.status(400).send({ error: true, message: `Please provide the ID of the artist. Error' + ${err} ` });
  }
};

exports.list_artist = async (req, res) => {
  if (!req.params.artistId) {
    return res.status(400).send({ error: true, message: 'Please provide the ID of the artist.' });
  }
  const result = await Artist.getArtist(req.params.artistId);
  return res.send(result);
};

exports.list_artist_songs = async ({ params: { artistId } }, res) => {
  if (!artistId) {
    return res.status(400).send({ error: true, message: 'Please provide the ID of the artist.' });
  }
  const songs = await Song.getArtistSongs(artistId);
  return res.json(songs);
};

exports.list_artist_song = async ({ params: { artistId, songId } }, res) => {
  if (!artistId || !songId) {
    return res.status(400).send({ error: true, message: 'Please provide the ID of the artist/song.' });
  }
  const song = await Song.getArtistSong(artistId, songId);
  return res.json(song);
};

exports.create_artist = (req, res) => {
  const newArtist = new Artist(req.body);
  if (!newArtist.name) {
    return res.status(400).send({ error: true, message: 'Please provide the name of the artist' });
  }
  const artist = Artist.createArtist(newArtist);
  return res.json(artist);
};

exports.list_all_songs = async (req, res) => {
  const result = await Song.getAllSongs();
  return result ? res.send(result) : res.status(400).send('Invalid request to get list of songs.');
};

exports.create_song = (req, res) => {
  const newSong = new Song(req.body);

  if (!newSong.name || !newSong.id_artist) {
    return res.status(400).send({ error: true, message: 'Please provide the name of the song and the ID of the artist' });
  }
  const song = Song.createSong(newSong);
  return res.json(song);
};
