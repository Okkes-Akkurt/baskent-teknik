import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay,Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';



const Header = () => {
const slidesItem = [
	{
		image: 'https://www.baysolarteknik.com/yonetim/upload/Anasayfa/1f06eb23f3b3d3abfcddbcf94551a9.jpg',
		title: 'Güneşin Sıcaklığıyla, Enerji Verimliliği',
		subtitle: 'Baysolar Teknik İle Geleceği Yakalayın.',
	},
	{
		image: 'https://www.baysolarteknik.com/yonetim/upload/Anasayfa/639eaff48c2a397e9d214355385571.jpg',
		title: 'Teknolojide Yenilik, Enerjide Güneş!',
		subtitle: 'Geleceğe Işık Tutuyoruz, Güneşle Aydınlanıyoruz!',
	}
];

	const [slides, setSlides] = useState(slidesItem);

	useEffect(() => {
		const hasChanged = slidesItem.length !== slides.length;
		if (hasChanged) {
			setSlides([...slidesItem]);
		}
	}, [slidesItem, slides]);




	return (
		<div className='slider-container'>
			<Swiper
				modules={[Navigation, Pagination,Autoplay]}
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
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className=''>
							<img
								src={slide.image}
								alt=''
								className='w-full'
							/>
							<div className='imageText absolute top-1/2 -translate-y-1/2 text-white md:pl-36 pl-8'>
								<h3 className='text-4xl md:text-6xl font-bold'>{slide.title}</h3>
								<p className='mt-4 md:mt-8'>{slide.subtitle}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
				<div className='transparent'>
					<div class='swiper-button-next'></div>
				</div>
				<div className='transparent'>
					<div class='swiper-button-prev'></div>
				</div>
			</Swiper>
		</div>
	);
};

export default Header;
