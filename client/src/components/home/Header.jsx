import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import axios from 'axios';

const Header = () => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		const fetchPhotos = async () => {
			try {
				const response = await axios.get('http://localhost:3000/photos/all');
				await setPhotos(response.data);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		fetchPhotos();
	}, []);

	const tempPhotos = [...photos];
	return (
		<div className='slider-container'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
				speed={1000}
				autoplay={{
					delay: 800,
					disableOnInteraction: false,
				}}
				loop={true}
				className='mySwiper'>
				{tempPhotos.map((photo) => (
					<SwiperSlide key={photo._id}>
						<div className='relative md:h-[400px] lg:h-[600px] h-[200px] sm:h-[400px] xl:h-[800px]'>
							<img
								src={`https://baskentapi.onrender.com/${photo.path.slice(42)}`}
								alt={photo.title}
								className='w-full'
								loading='lazy'
							/>
							<div className='imageText absolute top-1/2 -translate-y-1/2 text-white md:pl-36 pl-8'>
								<h3 className='text-4xl md:text-6xl font-bold'>{photo.title}</h3>
								<p className='mt-4 md:mt-8'>{photo.subtitle}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
				<div className='transparent'>
					<div className='swiper-button-next'></div>
				</div>
				<div className='transparent'>
					<div className='swiper-button-prev'></div>
				</div>
			</Swiper>
		</div>
	);
};

export default Header;
