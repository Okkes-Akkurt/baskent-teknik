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
									href='https://www.baysolarteknik.com/'
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
									Baysolar Teknik, güneş enerjisiyle ilgili projelerde kalite, güvenilirlik ve
									çevresel sürdürülebilirlik ilkelerine bağlı kalarak müşterilerine hizmet
									vermektedir.
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
									<p>Şeker Mah. 1417 Cad. Zirve Loft No: 2A/27 Etimesgut / Ankara</p>
								</div>
								<div class='mb-4'>
									<h6 class='font-bold'>Telefon:</h6>
									<a href='tel:0312 557 80 81'>0312 557 80 81</a> -{' '}
									<a href='tel:0532 053 02 06'>0532 053 02 06</a>
								</div>
								<div>
									<h6 class='font-bold'>E-posta:</h6>
									<a href='mailto:info@baysolarteknik.com'>info@baysolarteknik.com</a>
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
										<a href='https://www.baysolarteknik.com/'>Ana Sayfa</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/hakkimizda'>Hakkımızda</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/sss'>S.S.S.</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/referanslarimiz'>Referanslarımız</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/bloglar'>Blog</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/iletisim'>İletişim</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/gizlilik-sozlesmesi'>
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
										<a href='https://www.baysolarteknik.com/hizmet/gunes-enerjisi/'>
											Güneş Enerjisi
										</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/hizmet/gunes-kollektoru/'>
											Güneş Kollektörü
										</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/hizmet/isi-pompasi/'>Isı Pompası</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/hizmet/enerji-sistemleri/'>
											Enerji Sistemleri
										</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/hizmet/moduler-su-depolari/'>
											Moduler Su Depoları
										</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/hizmet/akumulasyon-tanki/'>
											Akümülasyon Tankı
										</a>
									</li>
									<li>
										<a href='https://www.baysolarteknik.com/hizmet/serpantinli-emaye-boyler/'>
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
