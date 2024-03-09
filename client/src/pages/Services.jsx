import React from 'react';

const Services = () => {
	const serviceData = [
		{
			category: 'Sıhhi Tesisat',
			services: [
				'Boyler',
				'Boyler Bakımı',
				'Plakalı Eşanjör',
				'Plakalı Eşanjör Temizliği',
				'Daire Giriş İstasyonu',
				'Genleşme Tankı',
				'Hidrafor',
				'Modüler Su Deposu',
				'Modüler Su Deposu Temizliği',
				'Resirkülasyon Pompası',
				'Pompa Bakım Onarım',
				'Güneş Enerji Sistemi',
			],
		},
		{
			category: 'Elektrik',
			services: [
				'Elektrik Arıza',
				'Led Montajı',
				'Tava Montajı',
				'Priz, Avize, Lamba, Sigorta Montajı',
				'Hoparlor',
				'Flasör',
				'Beton Borusu',
				'Kuvvetli Akım Kablo Çekimi',
				'Temel Topraklama',
			],
		},
	];

	return (
		<div className='my-14 py-7 md:block'>
			<h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#EC8329] mb-4 lg:mb-7'>Hizmetlerimiz</h1>
			<div className=''>
				{serviceData.map((category, index) => (
					<div
						key={index}
						className='mb-10'>
						<h3 className='text-xl md:text-2xl font-bold text-[#011F30] mb-4 lg:mb-7'>
							{category.category}
						</h3>
						<ul className='space-y-1 text-[#011F30] text-md md:text-xl flex gap-y-5 gap-x-5 flex-wrap'>
							{category.services.map((service, i) => (
								<li
									key={i}
									className='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
									<svg
										className='w-3.5 h-3.5 me-2 text-green-600 flex-shrink-0'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 20 20'>
										<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
									</svg>
									{service}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
