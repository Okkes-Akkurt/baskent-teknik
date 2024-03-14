import React from 'react';
import phone from '../../assets/contact/phoneIcon.svg'
import address from '../../assets/contact/address-location-icon.svg';
import mail from '../../assets/contact/mail.svg';

const ContactInfo = () => {
	return (
		<div className='px-16 lg:py-16 mx-auto'>
			<div className='mb-12'>
				<div className='title_sections'>
					<div className='before_title text-4xl font-semibold mb-5'>İletişim Bilgileri</div>
					<p className='text-2xl font-light'>Daha Fazla Bilgi Almak İçin Bizimle İletişime Geçebilirsiniz.</p>
				</div>
			</div>

			<div className=''>
				<div className=''>
					<div className='content'>
						<h3 className='text-2xl font-semibold'>
							<img
								className='inline mr-2'
								width='50'
								height='50'
								src={address}
								alt='address-location'
							/>
							Adres
						</h3>
						<p className='text-xl'>İstasyon Mah. 2331. Sk. No:4 D:2 06790 Etimesgut/Ankara</p>
					</div>
					<div className='mt-4'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.088050831673!2d32.656837476782364!3d39.9394200845506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339daf98e68fd%3A0xc635d407148ec79c!2s%C4%B0stasyon%2C%202331.%20Sk.%20No%3A4%20D%3A2%2C%2006790%20Etimesgut%2FAnkara!5e0!3m2!1str!2str!4v1709660644548!5m2!1str!2str'
							width='100%'
							height='300'
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'></iframe>
					</div>
				</div>
			</div>

			<div className='contact_box_content style_one'>
				<div className='contact_box_inner icon_yes'>
					<div className='contnet my-12'>
						<h3 className='text-2xl font-semibold'>
							<img
								className='inline mr-2'
								width='50'
								height='50'
								src={phone}
								alt='apple-phone'
							/>
							Telefon
						</h3>
						<p className='text-xl flex flex-col items-start justify-between'>
							<a
								href='tel:05349198246'
								className='text-[#001F30] hover:text-[#F7B02F] hover:scale-105 transition-all duration-300 my-3'>
								Elektrik - 05349198246
							</a>
							<a
								href='tel:05077780943'
								className='text-[#001F30] hover:text-[#F7B02F] hover:scale-105 transition-all duration-300'>
								Sıhhi Tesisat - 05077780943
							</a>
						</p>
					</div>
				</div>
			</div>

			<div className='contact_box_content style_one'>
				<div className='contact_box_inner icon_yes'>
					<div className='contnet mb-12'>
						<h3 className='text-2xl font-semibold'>
							<img
								className='inline mr-3'
								width='50'
								height='50'
								src={mail}
								alt='address-location'
							/>
							E-Posta
						</h3>
						<p className='text-xl'>
							<a
								href='mailto:info@Başkentteknik.com'
								className='text-black'>
								info@baskentteknik.com.tr
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className='mt-4'></div>

			<div className='contact_box_content style_one'>
				<div className='contact_box_inner icon_yes'>
					<div className='icon_bx'>
						<span className='fa fa-clock-o'></span>
					</div>
					<div className='contnet'>
						<h3 className='text-2xl font-semibold'> Çalışma Saatleri </h3>
						<p>Haftaiçi ve Cumartesi 08.00 - 17.00 </p>
					</div>
				</div>
			</div>
			<div className='mt-16'></div>

			<div className='text-lg'>
				<ul className='flex items-center gap-5'>
					{/* Facebook */}
					<li className='text-center'>
						<a
							href='https://www.facebook.com/profile.php?id=61557192696130'
							rel='nofollow'
							target='_blank'
							title='Başkent Teknik Facebook'
							className='flex flex-col items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='50'
								height='50'
								viewBox='0 0 48 48'>
								<linearGradient
									id='Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1'
									x1='9.993'
									x2='40.615'
									y1='9.993'
									y2='40.615'
									gradientUnits='userSpaceOnUse'>
									<stop
										offset='0'
										stopColor='#2aa4f4'></stop>
									<stop
										offset='1'
										stopColor='#007ad9'></stop>
								</linearGradient>
								<path
									fill='url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)'
									d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'></path>
								<path
									fill='#fff'
									d='M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z'></path>
							</svg>
							<small>Facebook</small>
						</a>
					</li>

					{/* İnstagram */}
					<li>
						<a
							href='https://www.instagram.com/baskentteknikst/'
							rel='nofollow'
							target='_blank'
							title='Başkent Teknik İnstagram'
							className='flex flex-col items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='50'
								height='50'
								viewBox='0 0 48 48'>
								<radialGradient
									id='yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1'
									cx='19.38'
									cy='42.035'
									r='44.899'
									gradientUnits='userSpaceOnUse'>
									<stop
										offset='0'
										stopColor='#fd5'></stop>
									<stop
										offset='.328'
										stopColor='#ff543f'></stop>
									<stop
										offset='.348'
										stopColor='#fc5245'></stop>
									<stop
										offset='.504'
										stopColor='#e64771'></stop>
									<stop
										offset='.643'
										stopColor='#d53e91'></stop>
									<stop
										offset='.761'
										stopColor='#cc39a4'></stop>
									<stop
										offset='.841'
										stopColor='#c837ab'></stop>
								</radialGradient>
								<path
									fill='url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)'
									d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z'></path>
								<radialGradient
									id='yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2'
									cx='11.786'
									cy='5.54'
									r='29.813'
									gradientTransform='matrix(1 0 0 .6663 0 1.849)'
									gradientUnits='userSpaceOnUse'>
									<stop
										offset='0'
										stopColor='#4168c9'></stop>
									<stop
										offset='.999'
										stopColor='#4168c9'
										stopOpacity='0'></stop>
								</radialGradient>
								<path
									fill='url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)'
									d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z'></path>
								<path
									fill='#fff'
									d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z'></path>
								<circle
									cx='31.5'
									cy='16.5'
									r='1.5'
									fill='#fff'></circle>
								<path
									fill='#fff'
									d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z'></path>
							</svg>
							<small>İnstagram</small>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactInfo;
