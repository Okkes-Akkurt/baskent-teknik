import React, { useState } from 'react';


const AdminPanel = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') || null;


	const [image, setImage] = useState(null);
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');

	const handleImageChange = (event) => {
		setImage(event.target.files[0]);
	};

	const handleAddImage = () => {
		if (!image || !title || !subtitle) {
			console.error('Please fill all fields');
			return;
		}

      /*   if (isLoggedIn) {
			// Burada sunucuya gönderme işlemleri gerçekleştirilebilir.
			// Örneğin, bir API'ye POST isteği gönderilebilir.
			// Yeni eklenen resmi slides state'ine ekleyin
		} */


		// İlgili alanları sıfırla
		setImage(null);
		setTitle('');
		setSubtitle('');
	};

	const handleDeleteImage = (id) => {


	};

	return (
		<div className='container mx-auto my-20'>
			<div className='mx-auto mb-7 flex justify-center w-full'>
				<div className='photo w-1/2'>
					<div className='mb-6'>
						<label className='block text-lg font-medium text-gray-700'>Fotoğraf yükle</label>
						<input
							type='file'
							className='mt-1 p-2 border rounded-md w-full'
							onChange={handleImageChange}
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
					<button
						className='px-4 py-2 bg-blue-500 text-white rounded-md mr-2'
						onClick={handleAddImage}>
						Add Image
					</button>
				</div>
				<div className='logo w-1/2  pl-5'>
					<div className='mb-6'>
						<label className='block text-lg font-medium text-gray-700'>Logo Yükle</label>
						<input
							type='file'
							className='mt-1 p-2 border rounded-md w-full'
							onChange={handleImageChange}
						/>
					</div>
					<button
						className='px-4 py-2 bg-blue-500 text-white rounded-md mr-2'
						onClick={handleAddImage}>
						Add Image
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminPanel;
