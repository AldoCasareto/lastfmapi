import express, { json } from 'express';
import dotenv from 'dotenv';
import { artistRouter } from './routes/artists.routes.js';

export const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.dotenv || 8500;

app.use('/api/artists', artistRouter);

export const server = app.listen(PORT, () => console.log(`connected to ${PORT}`));
