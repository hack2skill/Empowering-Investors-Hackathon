import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const LoadingSpinner = () => {
	const location = useLocation();

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const queryParamValue = queryParams.get('code');
		console.log(queryParamValue);
		const postData = {
			code: queryParamValue,
		};


		axios
			.post('http://localhost:5000/auth/oauth/google', postData)
			.then((response) => {
				const { token, userId } = response.data;


				localStorage.setItem('token', token);
				localStorage.setItem('userId', userId);


				window.location.href = '/home';

			})
			.catch((error) => {
				if (error.response) {
					console.log('Server responded with an error status:', error.response.status);
					console.log('Response data:', error.response.data);
				}
			});
	}, [location]);

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-white">
			<div className="animate-spin rounded-full border-t-4 border-black border-solid h-12 w-12"></div>
		</div>
	);
};

export default LoadingSpinner;
