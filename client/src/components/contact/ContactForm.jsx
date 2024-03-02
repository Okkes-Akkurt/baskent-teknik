import React from 'react';

const ContactForm = () => {
	return (
			<div  className='px-16 lg:py-16'>
				<h2  className='mb-4 text-4xl tracking-tight font-extrabold text-center'>Bizimle İletişime Geçin!</h2>
				<p  className='mb-8 lg:mb-16 font-light text-center sm:text-xl'>
					Teknik bir sorununuz mu var? İş planımız hakkında ayrıntılara mı ihtiyacınız var? Bize haber verin.
				</p>
				<form
					action='#'
					 className='space-y-8 mb-10'>
					<div>
						<label
							for='name'
							 className='block mb-2 text-lg font-medium'>
							Adınız ve Soyadınız
						</label>
						<input
							type='text'
							id='name'
							 className='shadow-lg bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg  block w-full p-2.5'
							placeholder='Ad Soyad'
							required
						/>
					</div>
					<div>
						<label
							for='phoneNumber'
							 className='block mb-2 text-lg font-medium'>
							Telefon Numaranız
						</label>
						<input
							type='text'
							id='phoneNumber'
							 className='shadow-lg bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg  block w-full p-2.5'
							placeholder='0512 345 67 89 '
							required
						/>
					</div>
					<div>
						<label
							for='email'
							 className='block mb-2 text-lg font-medium'>
							E-mail
						</label>
						<input
							type='email'
							id='email'
							 className='shadow-lg bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg  block w-full p-2.5'
							placeholder='example@example.com'
							required
						/>
					</div>
					<div>
						<label
							for='subject'
							 className='block mb-2 text-lg font-medium'>
							Konu
						</label>
						<input
							type='text'
							id='subject'
							 className='shadow-lg bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg  block w-full p-2.5 '
							placeholder='Size nasıl yardımcı olabileceğimizi bize bildirin'
							required
						/>
					</div>
					<div  className='sm:col-span-2'>
						<label
							for='message'
							 className='block mb-2 text-lg font-medium'>
							Mesajınız
						</label>
						<textarea
							id='message'
							rows='6'
							 className='block p-2.5 w-full text-lg shadow-lg text-gray-900 bg-gray-200 rounded-lg border border-gray-300'
							placeholder='Açıklama'></textarea>
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
