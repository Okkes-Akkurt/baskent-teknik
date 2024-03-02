import { useEffect, useState } from 'react';
import Slider from 'react-slick';

const PartOfReferences = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const references = [
		{ id: 1, name: 'Firma 1' },
		{ id: 2, name: 'Firma 2' },
		{ id: 3, name: 'Firma 3' },
	];

	const sliderSettings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		rows: 1,
		slidesPerRow: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 1024, // tablet
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600, // phone
				settings: {
					slidesToShow: 1,
					arrows:false
				},
			},
		],
	};

	return (
		<div className='bg-[#F49F05] mx-4 md:mx-8 lg:mx-36 shadow-2xl rounded-2xl my-7 xs:my-14'>
			<h1 className='text-center text-2xl md:text-4xl p-3'>Referanslarımız</h1>
			<div className='py-8 md:py-16 px-4 md:px-8 lg:px-32 text-center mx-auto'>
				<div className=''>
					<div className='reference-slider'>
						<Slider {...sliderSettings}>
							{references.map((reference) => (
								<div
									key={reference.id}
									className='reference-item max-w-64 md:max-w-full opacity-50  p-4'>
									<h3 className='text-base md:text-lg bg-slate-200'>{reference.name}</h3>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PartOfReferences;
