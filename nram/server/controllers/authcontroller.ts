import { RequestHandler, Response } from 'express';
import userModel from '../models/UserSchema';
import { generateToken } from '../middlewares/auth';
import { IError } from '../types/IError';
import { google } from 'googleapis';
import axios from 'axios';
export const handleCallback: RequestHandler = async (req, res, next) => {
	try {
		// Inititate oauth client
		const oauth2Client = new google.auth.OAuth2(
			process.env.GOOGLE_CLIENT_ID ,
			process.env.GOOGLE_CLIENT_SECRET,
			process.env.REDIRECT_URL,
		);
		const { code } = req.body;
		// console.log(code)
		if (!code) {
			throw new IError('Code not found', 404);
		}
		const { tokens } = await oauth2Client.getToken(code as string);
		const { access_token, refresh_token } = tokens;
		const userInfo = await axios.get(
			'https://people.googleapis.com/v1/people/me?personFields=emailAddresses,photos,names',
			{ headers: { Authorization: `Bearer ${access_token}` } },
		);
		const name = userInfo.data.names.find(
			(name: any) => name.metadata.primary === true,
		)?.displayName;
		const profileImage = userInfo.data.photos.find(
			(photo: any) => photo.metadata.primary === true,
		)?.url;
		const email = userInfo.data.emailAddresses.find(
			(email: any) => email.metadata.primary === true,
		)?.value;
		// console.log(name,profileImage,email)


	
		handleUsercreation(
			email,
			profileImage,
			name,
			access_token!,
			refresh_token!,
			res,
		);
	} catch (error: any) {
		next(error);
	}
};

async function handleUsercreation(
	email: string,
	profileImage: string,
	name: string,
	access_token: string,
	refresh_token: string,
	res: Response,
) {
	const user = new userModel({
		email,
		name,
		profileImage,
		access_token,
		refresh_token,
	});
	let updated: any;
	updated = await user.save().catch(async (error) => {
		if (error.code === 11000) {
			const updateUser = await userModel.findOneAndUpdate(
				{ email },
				{ $set: { access_token, refresh_token } },
			);
			res.status(200).json({
				userId: updateUser?._id.toString(),
				token: generateToken(
					updateUser!._id.toString(),
					updateUser!.email,
				),
			});
			return true;
		}
		throw new IError('Unknown mongo login error', 500);
	});
	if (!updated) {
		res.status(200).json({
			userId: user._id,
			token: generateToken(user._id.toString(), user.email),
		});
	}
}


