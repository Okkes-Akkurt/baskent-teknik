import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
	const [formData, setFormData] = useState({
		file: null,
		title: '',
		subtitle: '',
		uploadType: 'photo',
	});

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		console.log('Seçilen Dosya:', selectedFile);
		setFormData({ ...formData, file: selectedFile });
	};

	const handleUploadTypeChange = (event) => {
		setFormData({ ...formData, uploadType: event.target.value });
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleUpload = () => {
		const { file, title, subtitle, uploadType } = formData;

		if (!file || (!title && uploadType === 'logo') || (!title && !subtitle && uploadType === 'photo')) {
			console.error('Please fill all fields');
			return;
		}

		const uploadEndpoint = uploadType === 'photo' ? '/photos' : '/logos';
		console.log('Upload Endpoint:', uploadEndpoint);

		const payload = { file, title, subtitle, uploadType };
		console.log('Payload:', payload);

		axios
			.post(`https://baskentapi.onrender.com${uploadEndpoint}`, payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((response) => {
				console.log('Server Response:', response.data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		setFormData({
			file: null,
			title: '',
			subtitle: '',
			uploadType: 'photo',
		});
	};

	return (
		<div className='container mx-auto my-5 flex flex-col md:flex-row p-5'>
			<div className='file-uploader'>
				<div className='mb-6'>
					<label className='block text-lg font-medium text-gray-700'>Dosya Yükle</label>
					<input
						type='file'
						className='mt-1 p-2 border rounded-md w-full'
						onChange={handleFileChange}
					/>
				</div>
				<div className='mb-6'>
					<label className='block text-lg font-medium text-gray-700'>Başlık</label>
					<input
						type='text'
						className='mt-1 p-2 border rounded-md w-full'
						name='title'
						value={formData.title}
						onChange={handleInputChange}
					/>
				</div>
				<div className='mb-6'>
					<label className='block text-lg font-medium text-gray-700'>Alt Başlık</label>
					<input
						type='text'
						className='mt-1 p-2 border rounded-md w-full'
						name='subtitle'
						value={formData.subtitle}
						onChange={handleInputChange}
					/>
				</div>
				<div className='mb-6'>
					<label className='block text-lg font-medium text-gray-700'>Dosya Türü Seçin</label>
					<div>
						<label className='mr-4'>
							<input
								type='radio'
								value='photo'
								name='uploadType'
								checked={formData.uploadType === 'photo'}
								onChange={handleUploadTypeChange}
							/>
							Fotoğraf
						</label>
						<label>
							<input
								type='radio'
								value='logo'
								name='uploadType'
								checked={formData.uploadType === 'logo'}
								onChange={handleUploadTypeChange}
							/>
							Logo
						</label>
					</div>
				</div>
				<button
					className='px-4 py-2 bg-blue-500 text-white rounded-md mr-2'
					onClick={handleUpload}>
					Dosyayı Yükle
				</button>
			</div>
		</div>
	);
};

export default AdminPanel;
