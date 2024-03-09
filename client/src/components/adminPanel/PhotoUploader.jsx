import React, { useState } from 'react';
import axios from 'axios';

const PhotoUploader = () => {
	const [file, setFile] = useState(null);
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [uploadType, setUploadType] = useState('photo'); // Varsayılan olarak 'photo' seçili

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleUploadTypeChange = (event) => {
		setUploadType(event.target.value);
	};

	const handleUpload = () => {
		if (uploadType === 'photo') {
			if (!file || !title || !subtitle) {
				console.error('Please fill all fields');
				return;
			}
		} else if (!file) {
			console.error('Please fill all fields');
			return;
		}


		const formData = new FormData();
		formData.append('file', file);
		formData.append('title', title);
		formData.append('subtitle', subtitle);

		const uploadEndpoint = uploadType === 'photo' ? '/upload/photo' : '/upload/logo';

		axios
			.post(`http://localhost:3000${uploadEndpoint}`, formData)
			.then((response) => {
				console.log('Server Response:', response.data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		// Dosya ve başlık state'lerini sıfırla
		setFile(null);
		setTitle('');
		setSubtitle('');
	};

	return (
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
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className='mb-6'>
				<label className='block text-lg font-medium text-gray-700'>Alt Başlık</label>
				<input
					type='text'
					className='mt-1 p-2 border rounded-md w-full'
					value={subtitle}
					onChange={(e) => setSubtitle(e.target.value)}
				/>
			</div>
			<div className='mb-6'>
				<label className='block text-lg font-medium text-gray-700'>Dosya Türü Seçin</label>
				<div>
					<label className='mr-4'>
						<input
							type='radio'
							value='photo'
							checked={uploadType === 'photo'}
							onChange={handleUploadTypeChange}
						/>
						Fotoğraf
					</label>
					<label>
						<input
							type='radio'
							value='logo'
							checked={uploadType === 'logo'}
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
	);
};

export default PhotoUploader;
