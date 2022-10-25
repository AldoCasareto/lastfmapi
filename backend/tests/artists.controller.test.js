import * as fs from 'fs';
import request from 'supertest';
import { app, server } from '../server.js';

const api = request(app);

describe('Get /artists', () => {
  it('returns a 200 status code', async () => {
    await api
      .get('/api/artists')
      .query({
        artistname: 'aldo',
        filename: 'aldo',
      })
      .expect(200);
  });
  it('returns a 400 status code if artistname is missing', async () => {
    await api
      .get('/api/artists')
      .query({
        artistname: '',
        filename: 'aldo',
      })
      .expect(400);
  });
  it('returns a 400 status code if filename is missing', async () => {
    await api
      .get('/api/artists')
      .query({
        artistname: 'aldo',
        filename: '',
      })
      .expect(400);
  });
  it('returns a 400 status code if filename and name are missing', async () => {
    await api
      .get('/api/artists')
      .query({
        artistname: '',
        filename: '',
      })
      .expect(400);
  });
});

afterAll(() => {
  server.close();
});
