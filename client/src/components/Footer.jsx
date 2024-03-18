import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
	return (
		<div className='bg-gray-800 text-white'>
			<div className='pt-20'></div>
			<div className='container mx-auto flex px-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='col-span-1 md:col-span-2 lg:col-span-1'>
						<div className='p-6 bg-gray-900 rounded-lg'>
							<div className='text-center'>
								<a
									href=''
									target='_blank'
									rel='nofollow'>
									<img
										src={logo}
										className='mx-auto h-20 rounded-full'
										alt='Baysolar logo'
									/>
								</a>
							</div>
							<div className='mt-4'>
								<p>
									<span className='text-[#EB832A]'>Başkent Teknik</span> olarak, elektrik ve sıhhi
									tesisat alanında sunduğumuz kaliteli hizmetlerle, profesyonellik, dürüstlük ve
									güvenilirlik ilkelerini benimseyerek hizmet vermektedir.
								</p>
							</div>
						</div>
					</div>
					<div className='col-span-1 md:col-span-2 lg:col-span-1'>
						<div className='p-8 bg-gray-900 rounded-lg'>
							<div className='text-center'>
								<h2 className='text-2xl font-bold text-[#EB832A]'>İletişim Bilgileri</h2>
							</div>
							<div className='mt-8'>
								<div className='mb-4'>
									<h6 className='font-bold'>Adres:</h6>
									<a
										href='https://www.google.com/maps/place/%C4%B0stasyon,+2331.+Sk.+No:4+D:2,+06790+Etimesgut%2FAnkara/@39.939416,32.659412,16z/data=!4m5!3m4!1s0x14d339daf98e68fd:0xc635d407148ec79c!8m2!3d39.939416!4d32.6594124?hl=tr&entry=ttu'
										className='hover:text-[#EB832A] transition-all duration-200'>
										İstasyon Mah. 2331. Sk. No:4 D:2 06790 Etimesgut/Ankara
									</a>
								</div>
								<div className='mb-4'>
									<h6 className='font-bold'>Telefon:</h6>
									<p className=' flex flex-col items-start justify-between'>
										<a
											href='tel:05349198246'
											className='text-white hover:text-[#F7B02F] hover:scale-105 transition-all duration-300'>
											Elektrik - 05349198246
										</a>
										<a
											href='tel:05077780943'
											className='text-white hover:text-[#F7B02F] hover:scale-105 transition-all duration-300'>
											Sıhhi Tesisat - 05077780943
										</a>
									</p>
								</div>
								<div>
									<h6 className='font-bold'>E-posta:</h6>
									<a
										href='mailto:info@baskentteknik.com.tr'
										className='hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										info@baskentteknik.com
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-1 md:col-span-1 lg:col-span-1'>
						<div className='p-8 bg-gray-900 rounded-lg'>
							<div className='text-center'>
								<h2 className='text-2xl font-bold text-[#EB832A] '>Hızlı Erişim</h2>
							</div>
							<div className='mt-8'>
								<ul>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href='/'>Ana Sayfa</a>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href=''>Hakkımızda</a>
									</li>

									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<a href='/contact'>İletişim</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col-span-1 md:col-span-1 lg:col-span-1'>
						<div className='p-8 bg-gray-900 rounded-lg'>
							<div className='text-center'>
								<h2 className='text-2xl font-bold text-[#EB832A] '>Hizmetlerimiz</h2>
							</div>
							<div className='mt-8'>
								<ul>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<p>Güneş Enerjisi</p>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<p>Resirkülasyon Pompası</p>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<p>Temel Topraklama</p>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<p>Genleşme Tankı</p>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<p>Moduler Su Depoları</p>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<p>Kuvvetli Akım Kablo Çekimi</p>
									</li>
									<li className='mt-2 hover:text-[#EB832A] hover:scale-110 transition-all duration-200'>
										<p>Boyler</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='pb-20'></div>
		</div>
	);
};

export default Footer;
