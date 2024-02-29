import { useEffect, useState } from 'react';
import Slider from 'react-slick';


const PartOfReferences = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const references = [
		{ id: 1, name: 'Firma 1'},
		{ id: 2, name: 'Firma 2'},
		{ id: 3, name: 'Firma 3'},

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
		autoplaySpeed:1500,
	};


	return (
		<div className='bg-[#F49F05] mx-36 shadow-2xl rounded-2xl my-14'>
			<h1 className='text-center text-4xl p-3'>Referanslarımız</h1>
			<div className='py-24 px-32 text-center mx-auto'>
				<div className=''>
					<div className='reference-slider'>
						<Slider {...sliderSettings}>
							{references.map((reference) => (
								<div
									key={reference.id}
									className='reference-item max-w-64 max-h-32 opacity-50 bg-slate-200'>
									<h3 className=''>{reference.name}</h3>
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
