import React, { useState } from 'react';

const References = () => {
	const initialList = [
		'Koru Konsept / Eko Site Yönetimi Bağlıca/Etimesgut',
		'[Vizyon Prestige / Yöntem Yönetim ] Eryaman/Etimesgut',
		'Türkiye Petrolleri Genel Müdürlüğü',
		'Artı Fen Okulları',
		'Golden Life Sitesi',
		'Akadia Modern Konutları',
		'Asrın Çocuk Anaokulu',
		'Zeki Ünal İnşaat / Ünal Life Sitesi',
		'Etlik Şehir Hastanesi / TSP Global Tesis Ve Yönetim Danışmanlık A.Ş',
		'Fırat Apartmanı',
		'Botanik Zirve Konutları',
		'Altındağ Toki',
		'Luna Global Turizm',
	];
	const [referenceList, setReferenceList] = useState(initialList);

	return (
		<div className='container sm:mx-auto py-10 p-5'>
			<h1 className='font-bold text-2xl md:text-4xl mb-5'>Referanslarımız...</h1>
			<div className='flex flex-wrap gap-5'>
				{referenceList.map((item, i) => (
					<div
						key={i}
						style={{ paddingTop: '1.2rem', paddingBottom: '1.2rem', textAlign: 'center' }}
						className='flex-grow-0 basis-auto flex-shrink-0 md:w-custom-references w-custom-references-2  shadow-md rounded-md shadow-[#0CC0DF] bg-[#F7B02F] bg-opacity-70'>
						
						<div className='w-full min-h-[100px] break-words px-6 py-3 flex items-center justify-center text-md md:text-lg lg:text-xl'>
							{item}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default References;
