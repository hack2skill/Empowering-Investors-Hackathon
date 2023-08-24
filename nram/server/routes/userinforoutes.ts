import express from 'express';
import { getUserInfo } from '../controllers/userinfocontroller';
import { isAuth } from '../middlewares/auth';

const userinfoRouter = express.Router();

userinfoRouter.get('/userinfo',isAuth,getUserInfo);

export default userinfoRouter;
