import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import conn from './config/db.js';
import userRouter from './src/routes/user.routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);

export default app;
