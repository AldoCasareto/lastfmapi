import express from 'express';
import * as artistCrtl from '../controllers/artists.controller.js';

export const artistRouter = express.Router();

artistRouter.get('/', artistCrtl.getArtists);
