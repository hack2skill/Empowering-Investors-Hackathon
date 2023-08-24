import { Request } from 'express';

export interface IUserinfo {
	id: string;
	email: string;
}

export interface IRequest extends Request {
	user?: { id: string; email: string };
}
