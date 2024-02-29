import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
const Header = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	return (

			<div className='slider-container'>
				<Slider {...settings}>
					<div className=''>
						<img
							src='https://www.baysolarteknik.com/yonetim/upload/Anasayfa/1f06eb23f3b3d3abfcddbcf94551a9.jpg'
							alt=''
							className='w-full'
						/>
						<div className='imageText absolute top-1/2 -translate-y-1/2 text-white md:pl-36'>
							<h3 className='text-8xl font-bold'>
								Güneşin Sıcaklığıyla,
								<br /> Enerji Verimliliği
							</h3>
							<p className='mt-8'>Baysolar Teknik İle Geleceği Yakalayın. </p>
						</div>
					</div>
					<div>
						<img
							src='https://www.baysolarteknik.com/yonetim/upload/Anasayfa/639eaff48c2a397e9d214355385571.jpg'
							alt=''
							className='w-full'
						/>
						<div className='imageText absolute top-1/2 -translate-y-1/2 text-white md:pl-36'>
							<h3 className='text-8xl font-bold'>
								Teknolojide Yenilik, <br /> Enerjide Güneş!
							</h3>
							<p className='mt-8 text-lg'>Geleceğe Işık Tutuyoruz, Güneşle Aydınlanıyoruz!</p>
						</div>
					</div>
				</Slider>
			</div>
	);
};

export default Header;
