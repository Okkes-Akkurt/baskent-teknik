import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ContactForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			phoneNumber: '',
			email: '',
			subject: '',
			message: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Bu alan zorunludur'),
			phoneNumber: Yup.string().required('Bu alan zorunludur'),
			email: Yup.string().email('Geçerli bir e-posta adresi giriniz').required('Bu alan zorunludur'),
			subject: Yup.string().required('Bu alan zorunludur'),
			message: Yup.string().required('Bu alan zorunludur'),
		}),
		onSubmit: async (values) => {
			try {
				const response = await axios.post('https://your-server-endpoint.com/send-email', values);

				if (response.status === 200) {
					console.log('E-posta başarıyla gönderildi!');
					formik.resetForm();
				} else {
					console.error('E-posta gönderme hatası:', response.statusText);
				}
			} catch (error) {
				console.error('İstek hatası:', error.message);
			}
		},
	});

	return (
		<div className='px-16 lg:py-16'>
			<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center'>Bizimle İletişime Geçin!</h2>
			<p className='mb-8 lg:mb-16 font-light text-center sm:text-xl'>
				Teknik bir sorununuz mu var? İş planımız hakkında ayrıntılara mı ihtiyacınız var? Bize haber verin.
			</p>
			<form
				className='space-y-8 mb-10'
				onSubmit={formik.handleSubmit}>
				<div>
					<label
						htmlFor='name'
						className='block mb-2 text-lg font-medium'>
						Adınız ve Soyadınız
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className={`shadow-lg bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 ${
							formik.touched.name && formik.errors.name ? 'border-red-500' : ''
						}`}
						placeholder='Ad Soyad'
						required
					/>
					{formik.touched.name && formik.errors.name && (
						<div className='text-red-500 text-sm mt-1'>{formik.errors.name}</div>
					)}
				</div>
				<div>
					<label
						htmlFor='phoneNumber'
						className='block mb-2 text-lg font-medium'>
						Telefon Numaranız
					</label>
					<input
						type='text'
						id='phoneNumber'
						name='phoneNumber'
						value={formik.values.phoneNumber}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className={`shadow-lg bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 ${
							formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : ''
						}`}
						placeholder='0512 345 67 89 '
						required
					/>
					{formik.touched.phoneNumber && formik.errors.phoneNumber && (
						<div className='text-red-500 text-sm mt-1'>{formik.errors.phoneNumber}</div>
					)}
				</div>
				<div>
					<label
						htmlFor='email'
						className='block mb-2 text-lg font-medium'>
						E-mail
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className={`shadow-lg bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 ${
							formik.touched.email && formik.errors.email ? 'border-red-500' : ''
						}`}
						placeholder='example@example.com'
						required
					/>
					{formik.touched.email && formik.errors.email && (
						<div className='text-red-500 text-sm mt-1'>{formik.errors.email}</div>
					)}
				</div>
				<div>
					<label
						htmlFor='subject'
						className='block mb-2 text-lg font-medium'>
						Konu
					</label>
					<input
						type='text'
						id='subject'
						name='subject'
						value={formik.values.subject}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className={`shadow-lg bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 ${
							formik.touched.subject && formik.errors.subject ? 'border-red-500' : ''
						}`}
						placeholder='Size nasıl yardımcı olabileceğimizi bize bildirin'
						required
					/>
					{formik.touched.subject && formik.errors.subject && (
						<div className='text-red-500 text-sm mt-1'>{formik.errors.subject}</div>
					)}
				</div>
				<div className='sm:col-span-2'>
					<label
						htmlFor='message'
						className='block mb-2 text-lg font-medium'>
						Mesajınız
					</label>
					<textarea
						id='message'
						name='message'
						rows='6'
						value={formik.values.message}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className={`block p-2.5 w-full text-lg shadow-lg text-gray-900 bg-gray-200 rounded-lg border border-gray-300 ${
							formik.touched.message && formik.errors.message ? 'border-red-500' : ''
						}`}
						placeholder='Açıklama'
						required></textarea>
					{formik.touched.message && formik.errors.message && (
						<div className='text-red-500 text-sm mt-1'>{formik.errors.message}</div>
					)}
				</div>
				<button
					type='submit'
					className='py-3 px-5 text-lg font-medium text-center bg-[#F7B02F] hover:bg-[#fbbf50] transition duration-300 rounded-lg w-full focus:ring-4 focus:outline-none '>
					Gönder
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
