import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
	return (
		<div class='bg-gray-800 text-white'>
			<div class='pt-20'></div>
			<div class='container mx-auto flex px-10'>
				<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div class='col-span-1 md:col-span-2 lg:col-span-1'>
						<div class='p-8 bg-gray-900 rounded-lg'>
							<div class='text-center'>
								<a
									href=''
									target='_blank'
									rel='nofollow'>
									<img
										src={logo}
										class='mx-auto h-16 rounded-full'
										alt='Baysolar logo'
									/>
								</a>
							</div>
							<div class='mt-8'>
								<p>
									<span className='text-[#EB832A]'>Başkent Teknik</span> olarak, elektrik ve sıhhi
									tesisat alanında sunduğumuz kaliteli hizmetlerle, profesyonellik, dürüstlük ve
									güvenilirlik ilkelerini benimseyerek hizmet vermektedir.
								</p>
							</div>
						</div>
					</div>
					<div class='col-span-1 md:col-span-2 lg:col-span-1'>
						<div class='p-8 bg-gray-900 rounded-lg'>
							<div class='text-center'>
								<h2 class='text-2xl font-bold text-[#EB832A]'>İletişim Bilgileri</h2>
							</div>
							<div class='mt-8'>
								<div class='mb-4'>
									<h6 class='font-bold'>Adres:</h6>
									<a
										href=''
										className='hover:text-[#EB832A] transition-all duration-200'>
										Etimesgut / Ankara
									</a>
								</div>
								<div class='mb-4'>
									<h6 class='font-bold'>Telefon:</h6>
									<a
										href='tel:Lorem, ipsum dolor'
										className='hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										Lorem, ipsum dolor.
									</a>{' '}
									-{' '}
									<a
										href='tel:Lorem, ipsum dolor'
										className='hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										Lorem, ipsum dolor.
									</a>
								</div>
								<div>
									<h6 class='font-bold'>E-posta:</h6>
									<a
										href='mailto:Lorem, ipsum dolor'
										className='hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										Lorem, ipsum dolor.
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class='col-span-1 md:col-span-1 lg:col-span-1'>
						<div class='p-8 bg-gray-900 rounded-lg'>
							<div class='text-center'>
								<h2 class='text-2xl font-bold text-[#EB832A] '>Hızlı Erişim</h2>
							</div>
							<div class='mt-8'>
								<ul>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href='/'>Ana Sayfa</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href=''>Hakkımızda</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href='/sss'>S.S.S.</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href='/contact'>İletişim</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href='/gizlilik-sozlesmesi'>Gizlilik Sözleşmesi</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class='col-span-1 md:col-span-1 lg:col-span-1'>
						<div class='p-8 bg-gray-900 rounded-lg'>
							<div class='text-center'>
								<h2 class='text-2xl font-bold text-[#EB832A] '>Hizmetlerimiz</h2>
							</div>
							<div class='mt-8'>
								<ul>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href=''>Güneş Enerjisi</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href=''>Güneş Kollektörü</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href=''>Isı Pompası</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href=''>Enerji Sistemleri</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href=''>Moduler Su Depoları</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href=''>Akümülasyon Tankı</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href=''>Serpantinli Emaye Boyler</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='pb-20'></div>
		</div>
	);
};

export default Footer;
