import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileList = ({ logo, photo, onDelete }) => {

	return (
		<div className='file-list flex flex-col items-center justify-center md:ml-auto md:w-1/2'>
			<div className='w-full'>
				<div className='font-medium pb-4 text-[#2983cd]'>Fotoğraflar</div>
				<div className='photos w-full'>
					{!photo ? (
						<div>No files found</div>
					) : (
						photo &&
						photo.map((file) => (
							<div
								key={file._id}
								className='file-item flex justify-between items-center gap-5 mb-5 border p-2 rounded-lg border-slate-500'>
								<img
									src={file.url}
									alt={file.title}
									className='file-thumbnail md:h-14 md:max-w-52 h-7 max-w-24'
								/>
								<div>
									<p>{file.title}</p>
									<p>{file.subtitle}</p>
								</div>
								<button
									onClick={() => onDelete(file._id)}
									className='delete-button py-3 px-4 bg-[#F6B02F] w-1/3 rounded-lg hover:bg-opacity-85'>
									Sil
								</button>
							</div>
						))
					)}
				</div>
			</div>

			<div className='w-full'>
				<div className='font-medium py-4 text-[#2983cd]'>Logolar</div>
				<div className='logos w-full'>
					{!logo ? (
						<div>No files found</div>
					) : (
						logo &&
						logo.map((file) => (
							<div
								key={file._id}
								className='file-item flex justify-between items-center gap-5 w-full mb-5 border p-2 rounded-lg border-slate-500'>
								<div className='w-1/3'>
									<img
										src={file.url}
										alt={file.title}
										className='file-thumbnail md:h-14 md:max-w-52 h-7 max-w-24'
									/>
								</div>
								<div className='w-1/3'>
									<p>{file.title}</p>
									<p>{file.subtitle}</p>
								</div>
								<button
									onClick={() => onDelete(file._id)}
									className='delete-button py-3 px-4 bg-[#F6B02F] w-1/3 rounded-lg hover:bg-opacity-85'>
									Sil
								</button>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};

const AdminPanel = () => {

	const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || '';

	const [formData, setFormData] = useState({
		file: null,
		title: '',
		subtitle: '',
		uploadType: 'photo',
	});
	const [logoFiles, setLogoFiles] = useState([]);
	const [photoFiles, setPhotoFiles] = useState([]);

	const fetchFiles = async () => {
		try {
			const response_photo = await axios.get(`https://baskentapi.onrender.com/photos/all`);
			setPhotoFiles(response_photo.data);
			console.log(photoFiles);
			const response_logo = await axios.get(`https://baskentapi.onrender.com/logos/all`);
			setLogoFiles(response_logo.data);
		} catch (error) {
			console.error('Error fetching files:', error);
		}
	};

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		setFormData({ ...formData, file: selectedFile });
	};

	const handleUploadTypeChange = (event) => {
		setFormData({ ...formData, uploadType: event.target.value });
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleUpload = async () => {
		try {
			const { file, title, subtitle, uploadType } = formData;

			if (!file || (!title && uploadType === 'logo') || (!title && !subtitle && uploadType === 'photo')) {
				console.error('Please fill all fields');
				return;
			}

			const uploadEndpoint = uploadType === 'photo' ? '/photos' : '/logos';
			const formDataCloudinary = new FormData();
			formDataCloudinary.append('file', file);
			formDataCloudinary.append('title', title);
			formDataCloudinary.append('subtitle', subtitle);

			const response = await axios.post(`https://baskentapi.onrender.com${uploadEndpoint}`, formDataCloudinary, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			console.log('Server Response:', response.data);

			setFormData({
				file: null,
				title: '',
				subtitle: '',
				uploadType: 'photo',
			});
			fetchFiles();
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleDelete = async (fileId) => {
		try {
			await axios.delete(`https://baskentapi.onrender.com/${formData.uploadType}s/${fileId}`);
			await fetchFiles();
		} catch (error) {
			console.log(fileId);
			console.error('Error deleting file:', error);
		}
	};

	useEffect(() => {
	  	fetchFiles();
	}, [])


	return (
		<>
			{isLoggedIn ? (
				<div className='container mx-auto my-5 flex flex-col md:flex-row p-5 justify-center gap-5  '>
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

					<FileList
						photo={photoFiles}
						logo={logoFiles}
						onDelete={handleDelete}
					/>
				</div>
			) : <div className='h-screen flex items-center justify-center '>
				Lütfen admin girişi yapın!
			</div>}
		</>
	);
};

export default AdminPanel;
