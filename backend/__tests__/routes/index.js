const request = require('supertest');
const app = require('../../server');
const sequelize = require('../../database');

const URL = '';

describe('API Tester', () => {
  afterAll(() => {
    sequelize.close();
  });
  test('getAllArtists', async () => {
    const response = await request(app).get(`${URL}/artists`);
    expect(response.status).toEqual(200);
    expect(response.body);
  });

  test('getArtist', async () => {
    const response = await request(app).get(`${URL}/artists/1`);
    expect(response.status).toEqual(200);
    expect(response.body);
  });

  test('getArtistSongs', async () => {
    const response = await request(app).get(`${URL}/artists/2/songs`);
    expect(response.status).toEqual(200);
    expect(response.body);
  });

  test('getArtistSong', async () => {
    const response = await request(app).get(`${URL}/artists/2/songs/2`);
    expect(response.status).toEqual(200);
    expect(response.body);
  });

  test('getAllSongs', async () => {
    const response = await request(app).get(`${URL}/songs`);
    expect(response.status).toEqual(200);
    expect(response.body);
  });

  test('createArtist', async () => {
    const response = await request(app).post(`${URL}/artists`)
      .set('Accept', 'application/json')
      .send({ name: 'Lkkkkkkkkk' });
    expect(response.status).toEqual(200);
    expect(response.body);
  });

  test('getArtistsLike', async () => {
    const response = await request(app).post(`${URL}/artists/search`)
      .set('Accept', 'application/json')
      .send({ pattern: 'A' });
    expect(response.status).toEqual(200);
    expect(response.body);
  });

  test('CreateSong', async () => {
    const response = await request(app).post(`${URL}/songs`)
      .set('Accept', 'application/json')
      .send({ name: 'mySong111', id_artist: 3 });
    expect(response.status).toEqual(200);
    expect(response.body);
  });

  test('getSongsLike', async () => {
    const response = await request(app).post(`${URL}/songs/search`)
      .set('Accept', 'application/json')
      .send({ pattern: 'A' });
    expect(response.status).toEqual(200);
    expect(response.body);
  });
});
