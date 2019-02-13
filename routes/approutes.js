const express = require('express');

const router = express.Router();
const todoList = require('../controller/appController');

router.route('/artists')
  .get(todoList.list_all_artists)
  .post(todoList.create_artist);

router.route('/artists/:artistId')
  .get(todoList.list_artist);

router.route('/artists/:artistId/songs')
  .get(todoList.list_artist_songs);

router.route('/artists/:artistId/songs/:songId')
  .get(todoList.list_artist_song);

router.route('/artists/search')
  .post(todoList.list_artists_like);

router.route('/songs')
  .get(todoList.list_all_songs)
  .post(todoList.create_song);

router.route('/songs/search')
  .post(todoList.list_songs_like);

module.exports = router;
