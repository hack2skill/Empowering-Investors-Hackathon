import { Schema, model } from 'mongoose';
import { IUser } from '../types/models/IUser';

const userSchema = new Schema<IUser>({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	profileImage: {
		type: String,
		required: false,
		default: '',
	},
	access_token: {
		type: String,
	},
	refresh_token: {
		type: String,
		expires: 3600,
	},

});

const userModel = model<IUser>('userModel', userSchema);

export default userModel;
