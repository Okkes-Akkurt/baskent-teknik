import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import  logo1  from "../../assets/logos/1.png";
import logo2 from '../../assets/logos/2.png';
import logo3 from '../../assets/logos/3.png';
import logo4 from '../../assets/logos/4.png';

const PartOfReferences = () => {

	const references = [
		{ img: logo1, name: 'abc' },
		{ img: logo2, name: 'abc' },
		{ img: logo3, name: 'abc' },
		{ img: logo4, name: 'abc' },
		{ img: logo1, name: 'abc' },
		{ img: logo2, name: 'abc' },
		{ img: logo3, name: 'abc' },
		{ img: logo4, name: 'abc' },
	];


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
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}>
					{references.map((content, i) => (
						<SwiperSlide
							lazy={false}
							key={i}
							className='mySwiper p-8'>
							<div className='p-5 bg-white shadow-lg bg-opacity-70 shadow-slate-700 rounded-lg'>
								<img
									src={content.img}
									className='rounded-lg w-full'
									loading='lazy'
								/>
								<div>
									<h3 className='text-xl sm:text-sm lg:text-xl my-3'>{content.name}</h3>
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
