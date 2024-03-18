import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		username: '',
		password: '',
	});
	const [registered, setRegistered] = useState(true);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (registered) {
			axios
				.post('https://baskentapi.onrender.com/admin-giris', formData)
				.then((res) => {
					console.log(res.data);
					if (res.data.message !== 'Invalid credentials.') {
						login();
						const isLoggedIn = res.data.isLoggedIn;
						localStorage.setItem('isLoggedIn', isLoggedIn);
						navigate('/adminPanel');
					} else {
						alert('Şifre veya parolayı hatalı girdiniz.');
					}
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		} else if (!registered && formData.email) {
			axios.post('https://baskentapi.onrender.com/admin-kayit', formData).then((res) => {
				console.log(res.data);
			});
			alert('Kaydınız başarıyla oluşturuldu').catch((error) => {
				console.error('Error:', error);
			});
		} else {
			alert('Lütfen bir e-posta adresi giriniz.');
		}
	};

	return (
		<div className='bg-gray-200 h-screen flex items-center justify-center'>
			{registered ? (
				<div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
					<h2 className='text-2xl font-semibold mb-6'>Kullanıcı Girişi</h2>

					{/* Kullanıcı Girişi Formu */}
					<form onSubmit={handleSubmit}>
						{/* Kullanıcı Adı Alanı */}
						<div className='mb-4'>
							<label
								htmlFor='username'
								className='block text-gray-700 text-sm font-bold mb-2'>
								Kullanıcı Adı:
							</label>
							<input
								type='text'
								id='username'
								name='username'
								value={formData.username}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
								placeholder='Kullanıcı adınızı girin'
								required
							/>
						</div>

						{/* Şifre Alanı */}
						<div className='mb-6'>
							<label
								htmlFor='password'
								className='block text-gray-700 text-sm font-bold mb-2'>
								Şifre:
							</label>
							<input
								type='password'
								id='password'
								name='password'
								value={formData.password}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
								placeholder='Şifrenizi girin'
								required
							/>
						</div>

						{/* Giriş Butonu */}
						<button
							type='submit'
							className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
							Giriş Yap
						</button>
					</form>
					<p>
						Kayıt oluşturmak için{' '}
						<button
							onClick={() => setRegistered(false)}
							className='font-bold underline'>
							tıkla
						</button>
					</p>
				</div>
			) : (
				<div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
					<h2 className='text-2xl font-semibold mb-6'>Kullanıcı Kayıt</h2>

					{/* Kullanıcı Girişi Formu */}
					<form onSubmit={handleSubmit}>
						{/* Email Alanı */}
						<div className='mb-4'>
							<label
								htmlFor='email'
								className='block text-gray-700 text-sm font-bold mb-2'>
								E-mail:
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
								placeholder='E-mail girin'
							/>
						</div>

						{/* Kullanıcı Adı Alanı */}
						<div className='mb-4'>
							<label
								htmlFor='username'
								className='block text-gray-700 text-sm font-bold mb-2'>
								Kullanıcı Adı:
							</label>
							<input
								type='text'
								id='username'
								name='username'
								value={formData.username}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
								placeholder='Kullanıcı adınızı girin'
								required
							/>
						</div>

						{/* Şifre Alanı */}
						<div className='mb-6'>
							<label
								htmlFor='password'
								className='block text-gray-700 text-sm font-bold mb-2'>
								Şifre:
							</label>
							<input
								type='password'
								id='password'
								name='password'
								value={formData.password}
								onChange={handleChange}
								className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
								placeholder='Şifrenizi girin'
								required
							/>
						</div>

						{/* Giriş Butonu */}
						<button
							type='submit'
							className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
							Kayıt Ol
						</button>
					</form>
					<p>
						Giriş yapmak için{' '}
						<button
							onClick={() => setRegistered(true)}
							className='font-bold underline'>
							tıkla
						</button>
					</p>
				</div>
			)}
		</div>
	);
};

export default Login;
