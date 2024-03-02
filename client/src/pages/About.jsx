import aboutLogo from '../assets/about/aboutLogo.png';


const About = () => {
	return (
		<div className='bg-gray-100'>
			<div className='container mx-auto py-12'>
				<div className='bg-[#001F30]'>
					<img
						className='max-w-[783px] max-h-[500px] mx-auto'
						src={aboutLogo}
						alt=''
					/>
				</div>
				<h1 className='text-4xl font-bold mb-6 text-[#EB832A] mt-12'>Hakkımızda</h1>

				<p className='text-lg mb-8'>
					Başkent Teknik olarak, elektrik ve sıhhi tesisat konusunda Ankara'nın Etimesgut ilçesinde hizmet
					vermekteyiz. Yenilikçi yaklaşımımız ve uzun yıllara dayanan deneyimimizle, müşterilerimize kaliteli
					ve güvenilir çözümler sunmayı hedefliyoruz.
				</p>
				<p className='text-lg mb-8 '>
					Kuruluşumuzdan bu yana, müşteri memnuniyeti ve iş kalitesine verdiğimiz önemi her zaman en üst
					seviyede tuttuk. Elektrik ve sıhhi tesisat alanında geniş bir bilgi birikimine sahip olan uzman
					ekibimiz, her projeye özel çözümler üretmek için çalışmaktadır. Müşterilerimizin ihtiyaçlarına
					yönelik çözümler üretirken, kalite standartlarına uygun malzemeler ve son teknoloji ekipmanlar
					kullanarak işimizi titizlikle gerçekleştiriyoruz.
				</p>
				<p className='text-lg mb-8'>
					Firmamız, sektördeki gelişmeleri yakından takip ederek sürekli kendini yenilemekte ve
					müşterilerimize en iyi hizmeti sunabilmek için çaba sarf etmektedir. Profesyonellik, dürüstlük ve
					güvenilirlik ilkelerini benimseyerek, müşterilerimizin beklentilerini karşılamak ve hatta aşmak için
					çalışıyoruz.
				</p>
				<div className='bg-[#001F30] p-8 text-white rounded-md'>
					<h2 className='text-2xl font-bold mb-4'>Neden Bizi Tercih Etmelisiniz?</h2>
					<p className='text-lg'>Başkent Teknik olarak, sizlere şu avantajları sunmaktan gurur duyuyoruz:</p>
					<ul className='list-disc pl-6 mt-4'>
						<li>Kaliteli ve güvenilir hizmet</li>
						<li>Uzman ve deneyimli ekip</li>
						<li>Yenilikçi çözümler</li>
						<li>Müşteri odaklı yaklaşım</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
