const superagent = require('superagent');

const URL = 'http://localhost:3800';

describe('API Tester', () => {
  test('getAllArtists', async () => {
    const response = await superagent.get(`${URL}/artists`);
    expect(response.status).toEqual(200);
    expect(response.body);
  }, 100000);

  test('getArtist', async () => {
    const response = await superagent.get(`${URL}/artists/1`);
    expect(response.status).toEqual(200);
    expect(response.body);
  }, 100000);

  test('getArtistSongs', async () => {
    const response = await superagent.get(`${URL}/artists/2/songs`);
    expect(response.status).toEqual(200);
    expect(response.body);
  }, 100000);

  test('getArtistSong', async () => {
    const response = await superagent.get(`${URL}/artists/2/songs/2`);
    expect(response.status).toEqual(200);
    expect(response.body);
  }, 100000);

  test('getAllSongs', async () => {
    const response = await superagent.get(`${URL}/songs`);
    expect(response.status).toEqual(200);
    expect(response.body);
  }, 100000);

  test('createArtist', async () => {
    const response = await superagent.post(`${URL}/artists`)
      .set('Accept', 'application/json')
      .send({ name: 'Lkkkkkkkkk' });
    expect(response.status).toEqual(200);
    expect(response.body);
  }, 100000);

  test('getArtistsLike', async () => {
    const response = await superagent.post(`${URL}/artists/search`)
      .set('Accept', 'application/json')
      .send({ pattern: 'A' });
    expect(response.status).toEqual(200);
    expect(response.body);
  }, 100000);

  test('CreateSong', async () => {
    const response = await superagent.post(`${URL}/songs`)
      .set('Accept', 'application/json')
      .send({ name: 'mySong111', id_artist: 3 });
    expect(response.status).toEqual(200);
    expect(response.body);
  }, 100000);

  test('getSongsLike', async () => {
    const response = await superagent.post(`${URL}/songs/search`)
      .set('Accept', 'application/json')
      .send({ pattern: 'A' });
    expect(response.status).toEqual(200);
    expect(response.body);
  }, 100000);
});
