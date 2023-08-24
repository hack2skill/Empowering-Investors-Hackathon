import { IRequest } from '../types/IRequest';
import { RequestHandler } from 'express';
import { IError } from '../types/IError';
import userModel from '../models/UserSchema';

export const getUserInfo: RequestHandler = async (req: IRequest, res, next) => {
	try {
		const id = req.user?.id;
		const user = await userModel.findById(id);
		if (!user) {
			throw new IError('User info not found', 404);
		}
		const { name, profileImage, email } = user;
		res.status(200).json({ name, profileImage, email });
	} catch (error) {
		next(error);
	}
};
