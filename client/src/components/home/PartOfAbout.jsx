import logo from '../../assets/home/image.jpeg';

const PartOfAbout = () => {
	return (
		<div className='mt-14 py-7 md:flex md:items-center'>
			<div className='content w-1/2 md:pl-36'>
				<h3 className='underline text-2xl font-bold text-[#EC8329] mb-7'>Hakkımızda</h3>
				<h1 className='font-bold text-4xl mb-6'>Geleceğe Işık Tutuyoruz, Güneşle Aydınlanıyoruz!</h1>
				<p className='mb-6 text-base'>
					Baysolar Teknik, yenilenebilir enerji sektöründe lider bir firma olarak öne çıkmaktayız. Şirketimiz,
					güneş enerjisi alanında geniş bir uzmanlık ve deneyimle faaliyet göstermektedir. Müşterilere
					yenilikçi çözümler sunan Baysolar Teknik olarak, güneş enerjisiyle ilgili her türlü ihtiyaca yönelik
					özelleştirilmiş çözümler sunmaktayız.
				</p>
				<p className='text-base'>
					Baysolar Teknik'in vizyonu, temiz, sürdürülebilir ve yenilenebilir enerji kaynaklarının
					yaygınlaşmasını sağlamaktır. Şirket, geleceğin enerji ihtiyaçlarını karşılamak ve çevresel
					sürdürülebilirliği desteklemek için güneş enerjisini kullanmaktadır.
				</p>
				<button className='border bg-[#EB832A] rounded-br-lg rounded-tl-lg py-2 px-5 mt-4 text-xl text-white hover:bg-slate-200 hover:text-[#EC8329] shadow-lg border-slate-300'>
					<a href='/about'>
						Daha fazla <span className='mx-2'> &rarr;</span>
					</a>
				</button>
			</div>
			<div className='images w-1/2 md:flex md:items-center gap-12 relative'>
				<div className='image-one  h-[500px]'>
					<img
						src='https://www.baysolarteknik.com/yonetim/upload/Galeri/d252374cef.jpg'
						alt=''
						className='rounded-lg'
					/>
				</div>
				<div className='image-two shadow-2xl'>
					<img
						src='https://www.baysolarteknik.com/assets/images/about-2.jpg'
						alt=''
						className='rounded-lg'
					/>
				</div>
				<div class='quotes bg-[#EB832A] absolute bottom-2 ml-2 px-12 py-6 rounded-xl max-w-sm shadow-2xl'>
					<h6 className='text-white text-2xl'>Sonsuz Enerji Sonsuz Potansiyel:</h6>
					<p className='text-slate-200'>Baysolar Teknİk</p>
				</div>
			</div>
		</div>
	);
};

export default PartOfAbout;
