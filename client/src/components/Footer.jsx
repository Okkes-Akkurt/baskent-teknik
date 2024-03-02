import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
	return (
		<div class='bg-gray-800 text-white'>
			<div class='pt-20'></div>
			<div class='container mx-auto'>
				<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div class='col-span-1 md:col-span-2 lg:col-span-1'>
						<div class='p-8 bg-gray-900'>
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
								Başkent Teknik olarak, elektrik ve sıhhi tesisat alanında sunduğumuz kaliteli hizmetlerle, profesyonellik, dürüstlük ve güvenilirlik ilkelerini benimseyerek hizmet vermektedir.
								</p>
							</div>
						</div>
					</div>
					<div class='col-span-1 md:col-span-2 lg:col-span-1'>
						<div class='p-8 bg-gray-900'>
							<div class='text-center'>
								<h2 class='text-2xl font-bold'>İletişim Bilgileri</h2>
							</div>
							<div class='mt-8'>
								<div class='mb-4'>
									<h6 class='font-bold'>Adres:</h6>
									<p>Etimesgut / Ankara</p>
								</div>
								<div class='mb-4'>
									<h6 class='font-bold'>Telefon:</h6>
									<a href='tel:Lorem, ipsum dolor'>Lorem, ipsum dolor.</a> -{' '}
									<a href='tel:Lorem, ipsum dolor'>Lorem, ipsum dolor.</a>
								</div>
								<div>
									<h6 class='font-bold'>E-posta:</h6>
									<a href='mailto:Lorem, ipsum dolor'>Lorem, ipsum dolor.</a>
								</div>
							</div>
						</div>
					</div>
					<div class='col-span-1 md:col-span-1 lg:col-span-1'>
						<div class='p-8 bg-gray-900'>
							<div class='text-center'>
								<h2 class='text-2xl font-bold'>Hızlı Erişim</h2>
							</div>
							<div class='mt-8'>
								<ul>
									<li>
										<a href='/'>Ana Sayfa</a>
									</li>
									<li>
										<a href=''>Hakkımızda</a>
									</li>
									<li>
										<a href='/sss'>S.S.S.</a>
									</li>
									<li>
										<a href='/contact'>İletişim</a>
									</li>
									<li>
										<a href='/gizlilik-sozlesmesi'>
											Gizlilik Sözleşmesi
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class='col-span-1 md:col-span-1 lg:col-span-1'>
						<div class='p-8 bg-gray-900'>
							<div class='text-center'>
								<h2 class='text-2xl font-bold'>Hizmetlerimiz</h2>
							</div>
							<div class='mt-8'>
								<ul>
									<li>
										<a href=''>
											Güneş Enerjisi
										</a>
									</li>
									<li>
										<a href=''>
											Güneş Kollektörü
										</a>
									</li>
									<li>
										<a href=''>Isı Pompası</a>
									</li>
									<li>
										<a href=''>
											Enerji Sistemleri
										</a>
									</li>
									<li>
										<a href=''>
											Moduler Su Depoları
										</a>
									</li>
									<li>
										<a href=''>
											Akümülasyon Tankı
										</a>
									</li>
									<li>
										<a href=''>
											Serpantinli Emaye Boyler
										</a>
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
