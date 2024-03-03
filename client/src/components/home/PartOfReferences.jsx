import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import  logo1  from "../../assets/examplelogos/1.png";
import logo2 from '../../assets/examplelogos/2.png';
import logo3 from '../../assets/examplelogos/3.png';
import logo4 from '../../assets/examplelogos/4.png';

const PartOfReferences = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const references = [
		{ id: 1, img:  logo1  },
		{ id: 2, img:  logo2  },
		{ id: 3, img: logo3  },
		{ id: 4, img: logo4  },
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
		centerPadding:'50px',
		responsive: [
			{
				breakpoint: 1280, // tablet
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768, // phone
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	};

	return (
		<div className='bg-[#0CC0DF] mx-4 md:mx-8 lg:mx-36 shadow-2xl rounded-2xl my-7 xs:my-14'>
			<h1 className='text-center text-2xl md:text-4xl pt-10'>Referanslarımız</h1>
			<div className='py-8 md:py-16 px-4 md:px-8 lg:px-32 text-center mx-auto'>
				<div className=''>
					<div className='reference-slider'>
						<Slider {...sliderSettings}>
							{references.map((reference) => (
								<div
									key={reference.id}
									className='reference-item max-w-64 md:max-w-full p-10'>
									<img
										src={reference.img}
										alt=''
										className='max-w-[200px]'
									/>
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
