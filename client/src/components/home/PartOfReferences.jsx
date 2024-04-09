import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import logo1 from '../../assets/logos/1.png';
import logo2 from '../../assets/logos/2.png';
import logo3 from '../../assets/logos/3.png';
import logo4 from '../../assets/logos/4.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PartOfReferences = () => {
	const [logos, setLogos] = useState([]);

	useEffect(() => {
		const fetchLogos = async () => {
			try {
				const response = await axios.get('https://baskentapi.onrender.com/logos/all');
				console.log(response.data);
				await setLogos(response.data);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchLogos();
	}, []);

	const references = [...logos];

	return (
		<div className='bg-[#0CC0DF] mx-4 md:mx-8 lg:mx-36 shadow-2xl rounded-2xl my-7 xs:my-14'>
			<h1 className='text-center text-2xl md:text-4xl pt-10'>Referanslarımız</h1>
			<div className='py-8 px-16 text-center mx-auto'>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={40}
					speed={1000}
					loop={true}
					autoplay={{
						delay: 800,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true, dynamicBullets: true }}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					}}>
					{references.map((logo) => (
						<SwiperSlide
							lazy={false}
							key={logo._id}
							className='mySwiper p-8'>
							<div className='p-5 bg-white shadow-lg bg-opacity-70 shadow-slate-700 rounded-lg flex-shrink-0 basis-auto flex-grow-0 min-h-[200px]'>
								<div
									className='relative w-full h-0'
									style={{ paddingTop: '60%' }}>
									<img
										src={`${logo.url}`}
										className='absolute inset-0 w-full h-full object-contain rounded-lg'
										loading='lazy'
										alt={logo.title}
									/>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<h3 className='text-xl sm:text-[1.1rem] lg:text-xl'>{logo.title}</h3>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default PartOfReferences;
