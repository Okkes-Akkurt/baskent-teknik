
const PartOfAbout = () => {
	return (
		<div className='mt-14 py-7 md:flex md:items-center'>
			<div className='content w-full md:w-1/2 md:pl-8 lg:pl-36 p-5'>
				<h3 className='underline text-xl md:text-2xl lg:text-3xl font-bold text-[#EC8329] mb-4 lg:mb-7'>
					Hakkımızda
				</h3>
				<h1 className='font-bold text-2xl md:text-4xl lg:text-5xl mb-4 lg:mb-6'>
					Sıhhi Tesisatta ve Elektrikte Deneyimin Gücü Bir Arada!
				</h1>
				<p className='mb-4 lg:mb-6 text-base lg:text-lg'>
					Başkent Teknik olarak, elektrik ve sıhhi tesisat alanında sunduğumuz kaliteli hizmetlerle
					müşterilerimizin güvenini kazanmaya devam ediyoruz. Siz de işinizde uzman bir ekiple çalışmak ve
					kaliteli çözümlerden faydalanmak istiyorsanız, bize ulaşmaktan çekinmeyin.
				</p>
				<p className='mb-4 lg:mb-6 text-base lg:text-lg'>
					Firmamız, sektördeki gelişmeleri yakından takip ederek sürekli kendini yenilemekte ve
					müşterilerimize en iyi hizmeti sunabilmek için çaba sarf etmektedir. Profesyonellik, dürüstlük ve
					güvenilirlik ilkelerini benimseyerek, müşterilerimizin beklentilerini karşılamak ve hatta aşmak için
					çalışıyoruz.
				</p>
				<button className='border bg-[#EB832A] rounded-br-lg rounded-tl-lg py-2 px-5 mt-2 lg:mt-4 text-base lg:text-xl text-white hover:bg-slate-200 hover:text-[#EC8329] shadow-lg border-slate-300'>
					<a href='/about'>
						Daha fazla <span className='mx-2'> &rarr;</span>
					</a>
				</button>
			</div>
			<div className='images w-full md:w-1/2 md:flex md:items-center gap-8 lg:gap-12 relative flex sm:p-5 xs:mb-32 md:mb-0 mb-16'>
				<div className='image-one h-[250px] lg:h-[500px] w-full lg:w-1/3'>
					<img
						src='https://www.baysolarteknik.com/yonetim/upload/Galeri/d252374cef.jpg'
						alt=''
						className='rounded-lg w-full shadow-2xl'
					/>
				</div>
				<div className='image-two h-[250px] lg:h-[500px] w-full lg:w-1/3 '>
					<img
						src='https://www.baysolarteknik.com/assets/images/about-2.jpg'
						alt=''
						className='rounded-lg w-full shadow-2xl'
					/>
				</div>
				<div class='quotes bg-[#EB832A] absolute lg:bottom-40  ml-2 px-4 lg:px-12 py-3 lg:py-6 rounded-xl max-w-sm shadow-2xl md:bottom-0 bottom-5 sm:-bottom-40 left-1/4 md:left-3'>
					<h6 className='text-white text-base lg:text-2xl'>Elektrikte ve Tesisatta Profesyonel Çözümler</h6>
					<p className='text-slate-200 text-sm lg:text-base'>Başkent Teknİk</p>
				</div>
			</div>
		</div>
	);
};

export default PartOfAbout;
