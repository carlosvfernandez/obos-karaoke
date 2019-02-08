const superagent = require('superagent');

const URL = 'http://localhost:3800';

describe('', () => {
  test('', async () => {
    const response = await superagent.get(`${URL}/artists`);
    expect(response.body);
  }, 100000);

  test('', async () => {
    const response = await superagent.get(`${URL}/artists/1`);
    expect(response.body);
  }, 100000);
/*
  test('', async () => {
    const response = await superagent.get(`${URL}/artists/2/songs`);
    expect(response.body);
  }, 100000);

  test('', async () => {
    const response = await superagent.get(`${URL}/artists/:artistId/songs/:songId`);
    expect(response.body);
  }, 100000);

  test('', async () => {
    const response = await superagent.get(`${URL}/song`);
    expect(response.body);
  }, 100000);

  test('', async () => {
    const response = await superagent.post(`${URL}/artists`);
    expect(response.body);
  }, 100000);

  test('', async () => {
    const response = await superagent.post(`${URL}/artists/search`);
    expect(response.body);
  }, 100000);

  test('', async () => {
    const response = await superagent.post(`${URL}/song`);
    expect(response.body);
  }, 100000);

  test('', async () => {
    const response = await superagent.post(`${URL}/songs/search`);
    expect(response.body);
  }, 100000);
  */
});