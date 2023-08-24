import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { IRequest, IUserinfo } from '../types/IRequest';
import { IError } from '../types/IError';
let err: IError | undefined;
const tokenDecode = (req: IRequest) => {
	
	const token = req.header('Authorization')?.replace('Bearer ', '');
	if (!token) {
		return new IError('Token is Absent', 401);
	}
	try {
		const decoded = jwt.verify(
			token,
			process.env.JWT_SECRET || 'somesecret',
		) as IUserinfo;
		req.user = decoded;
	} catch (e) {
		throw new IError('Unauthorized', 401);
	}
};

export const isAuth: RequestHandler = (req: IRequest, res, next) => {
	try {
		err = tokenDecode(req);
		if (err instanceof IError) {
			throw err;
		}
		next();
	} catch (error) {
		next(error);
	}
};


/**
 *
 * @param id MongoDB Object ID of the user
 * @param email email of the user
 * @returns
 */
export const generateToken = (
	id: string,
	email: string,
) => {
	const token = jwt.sign(
		{ id, email },
		process.env.JWT_SECRET || 'somesecret',
		{
			expiresIn: '7d',
		},
	);
	return token;
};
