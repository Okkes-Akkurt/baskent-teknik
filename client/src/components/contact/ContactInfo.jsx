import React from 'react';

const ContactInfo = () => {
	return (
		<div className='px-16 lg:py-16 mx-auto'>
			<div className='mb-12'>
				<div className='title_sections'>
					<div className='before_title text-4xl font-semibold mb-5'>İletişim Bilgileri</div>
					<p className='text-2xl'>Daha Fazla Bilgi Almak İçin Bizimle İletişime Geçebilirsiniz.</p>
				</div>
			</div>

			<div className=''>
				<div className=''>
					<div className=''>
						<span className=''></span>
					</div>
					<div className='content'>
						<h3 className='text-2xl font-semibold'>Adres </h3>
						<p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quam!</p>
					</div>
				</div>
			</div>
			<div className='mt-4'></div>

			<div className='contact_box_content style_one'>
				<div className='contact_box_inner icon_yes'>
					<div className='icon_bx'>
						<span className='icon-phone-call'></span>
					</div>
					<div className='contnet'>
						<h3 className='text-2xl font-semibold'>Telefon </h3>
						<p className='text-xl'>
							<a
								href='tel:0312 557 80 81'
								className='text-blue-500'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quam!
							</a>{' '}
							-{' '}
							<a
								href='tel:0532 053 02 06'
								className='text-blue-500'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quam!
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className='mt-4'></div>

			<div className='contact_box_content style_one'>
				<div className='contact_box_inner icon_yes'>
					<div className='icon_bx'>
						<span className='icon-phone-call'></span>
					</div>
					<div className='contnet'>
						<h3 className='text-2xl font-semibold'>E-Posta </h3>
						<p className='text-xl'>
							<a
								href='mailto:info@baysolarteknik.com'
								className='text-blue-500'>
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
						<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi! </p>
					</div>
				</div>
			</div>
			<div className='mt-16'></div>

			<div className='text-lg'>
				<ul>
					<li>
						<a
							href='https://www.facebook.com/#'
							rel='nofollow'
							target='_blank'
							title='Baysolar Teknik Facebook'>
							<span className='fa fa-facebook'></span>
							<small>Facebook</small>
						</a>
					</li>
					<li>
						<a
							href='https://www.twitter.com/#'
							rel='nofollow'
							target='_blank'
							title='Baysolar Teknik Twitter'>
							<span className='fa fa-twitter'></span>
							<small>Twitter</small>
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/baysansolar'
							rel='nofollow'
							target='_blank'
							title='Baysolar Teknik İnstagram'>
							<span className='fa fa-instagram'></span>
							<small>İnstagram</small>
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/#'
							rel='nofollow'
							target='_blank'
							title='Baysolar Teknik Linkedin'>
							<span className='fa fa-linkedin'></span>
							<small>Linkedin</small>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ContactInfo;
