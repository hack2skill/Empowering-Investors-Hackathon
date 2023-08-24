import express from 'express';
import { handleCallback } from '../controllers/authcontroller';


const authRouter = express.Router();

authRouter.post('/oauth/google', handleCallback);

export default authRouter;
