import React, { useState } from 'react';
import axios from 'axios';

const LogoUploader = () => {
	const [logo, setLogo] = useState(null);

	const handleLogoChange = (event) => {
		setLogo(event.target.files[0]);
	};

	const handleAddLogo = () => {
		if (!logo) {
			console.error('Please fill all fields');
			return;
		}

		const formData = new FormData();
		formData.append('file', logo);


		axios
			.post('http://localhost:3000/upload/logo', formData)
			.then((response) => {
				console.log('Server Response:', response.data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		// Logo ve başlık state'lerini sıfırla
		setLogo(null);
	};

	return (
		<div className='logo w-1/2 md:pl-5 pl-0 mt-10 md:mt-0'>
			<div className='mb-6'>
				<label className='block text-lg font-medium text-gray-700'>Logo Yükle</label>
				<input
					type='file'
					className='mt-1 p-2 border rounded-md w-full'
					onChange={handleLogoChange}
				/>
			</div>

			<button
				className='px-4 py-2 bg-blue-500 text-white rounded-md mr-2'
				onClick={handleAddLogo}>
				Add Logo
			</button>
		</div>
	);
};

export default LogoUploader;
