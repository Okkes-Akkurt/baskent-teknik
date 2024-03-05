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
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'></iframe>
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta?
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
				<ul className='flex items-center justify-between'>
					<li className='text-center'>
						<a
							href='https://www.facebook.com/#'
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
										stop-color='#2aa4f4'></stop>
									<stop
										offset='1'
										stop-color='#007ad9'></stop>
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
					<li>
						<a
							href='https://www.twitter.com/#'
							rel='nofollow'
							target='_blank'
							title='Başkent Teknik Twitter'
							className='flex flex-col items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='50'
								height='50'
								viewBox='0 0 48 48'>
								<linearGradient
									id='U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1'
									x1='4.338'
									x2='38.984'
									y1='-10.056'
									y2='49.954'
									gradientUnits='userSpaceOnUse'>
									<stop
										offset='0'
										stop-color='#4b4b4b'></stop>
									<stop
										offset='.247'
										stop-color='#3e3e3e'></stop>
									<stop
										offset='.686'
										stop-color='#2b2b2b'></stop>
									<stop
										offset='1'
										stop-color='#252525'></stop>
								</linearGradient>
								<path
									fill='url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)'
									d='M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z'></path>
								<path
									fill='#fff'
									d='M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z'></path>
								<polygon
									fill='#fff'
									points='15.866,34 23.069,25.656 22.127,24.407 13.823,34'></polygon>
								<polygon
									fill='#fff'
									points='24.45,21.721 25.355,23.01 33.136,14 31.136,14'></polygon>
							</svg>
							<small>Twitter</small>
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/baysansolar'
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
										stop-color='#fd5'></stop>
									<stop
										offset='.328'
										stop-color='#ff543f'></stop>
									<stop
										offset='.348'
										stop-color='#fc5245'></stop>
									<stop
										offset='.504'
										stop-color='#e64771'></stop>
									<stop
										offset='.643'
										stop-color='#d53e91'></stop>
									<stop
										offset='.761'
										stop-color='#cc39a4'></stop>
									<stop
										offset='.841'
										stop-color='#c837ab'></stop>
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
										stop-color='#4168c9'></stop>
									<stop
										offset='.999'
										stop-color='#4168c9'
										stop-opacity='0'></stop>
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
					<li>
						<a
							href='https://www.linkedin.com/#'
							rel='nofollow'
							target='_blank'
							title='Başkent Teknik Linkedin'
							className='flex flex-col items-center'>
							<span className='fa fa-linkedin'></span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='50'
								height='50'
								viewBox='0 0 48 48'>
								<path
									fill='#0078d4'
									d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z'></path>
								<path
									d='M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z'
									opacity='.05'></path>
								<path
									d='M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z'
									opacity='.07'></path>
								<path
									fill='#fff'
									d='M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z'></path>
							</svg>
							<small>Linkedin</small>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactInfo;
