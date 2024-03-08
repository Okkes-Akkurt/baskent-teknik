import aboutLogo from '../assets/about/aboutLogo.png';
import StickyComponent from '../components/StickyComponent';


const About = () => {
	return (
		<div className='bg-gray-100'>
			<div className='container mx-auto py-0 pb-12 md:py-12'>
				<div className='bg-[#001F30] rounded-md'>
					<img
						className='md:max-w-[783px] md:max-h-[500px] mx-auto w-full h-auto'
						src={aboutLogo}
						alt=''
					/>
				</div>
				<div className='px-5 md:px-0'>
					<h1 className='text-4xl font-bold mb-6 text-[#EB832A] mt-12'>Hakkımızda</h1>

					<p className='text-lg mb-8'>
						Başkent Teknik olarak, elektrik ve sıhhi tesisat konusunda Ankara'nın Etimesgut ilçesinde hizmet
						vermekteyiz. Yenilikçi yaklaşımımız ve uzun yıllara dayanan deneyimimizle, müşterilerimize
						kaliteli ve güvenilir çözümler sunmayı hedefliyoruz.
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
						müşterilerimize en iyi hizmeti sunabilmek için çaba sarf etmektedir. Profesyonellik, dürüstlük
						ve güvenilirlik ilkelerini benimseyerek, müşterilerimizin beklentilerini karşılamak ve hatta
						aşmak için çalışıyoruz.
					</p>

					{/* --------------- HİZMETLERİMİZ --------------- */}
					<div className=' my-14 py-7 md:block'>
						<h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#EC8329] mb-4 lg:mb-7'>
							Hizmetlerimiz
						</h1>
						<div className=''>
							<div className='left-side mb-10'>
								<h3 className='text-xl md:text-2xl font-bold text-[#011F30] mb-4 lg:mb-7'>
									Sıhhi tesisat
								</h3>
								<ul className='space-y-1 text-[#011F30] text-md md:text-xl flex gap-y-5 gap-x-5 flex-wrap'>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600 flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Boyler
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600 flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Boyler Bakımı
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>{' '}
										Plakalı Eşanjör
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>{' '}
										Plakalı Eşanjör Temizliği
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Daire Giriş İstasyonu
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Genleşme Tankı
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Hidrafor
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Modüler Su Deposu
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Modüler Su Deposu Temizliği
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Resirkülasyon Pompası
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Pompa Bakım Onarım
									</li>
									<li class='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Güneş Enerji Sistemi
									</li>
								</ul>
								
							</div>

							<div className='right-side'>
								<h3 className='text-xl md:text-2xl font-bold text-[#011F30] mb-4 lg:mb-7'>Elektirik</h3>
								<ul className='space-y-1 text-[#011F30] text-md md:text-xl flex gap-y-5 gap-x-5 flex-wrap'>
									<li class='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600 flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Elektrik Arıza
									</li>
									<li class='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>{' '}
										Led Montajı
									</li>
									<li class='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Tava Montajı
									</li>
									<li class='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Priz, Avize, Lamba, Sigorta Montajı
									</li>
									<li class='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Hoparlor
									</li>
									<li class='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Flasör
									</li>
									<li class='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Beton Borusu
									</li>
									<li class='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Kuvvetli Akım Kablo Çekimi
									</li>
									<li class='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
										<svg
											class='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 20 20'>
											<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
										</svg>
										Temel Topraklama
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* --------------- NEDEN BİZ --------------- */}
					<div className='bg-[#001F30] p-8 text-white rounded-md'>
						<h2 className='text-2xl font-bold mb-4 text-[#EB832A] '>Neden Bizi Tercih Etmelisiniz?</h2>
						<p className='text-lg'>
							Başkent Teknik olarak, sizlere şu avantajları sunmaktan gurur duyuyoruz:
						</p>
						<ul className='list-disc pl-6 mt-4'>
							<li className='mt-2 tracking-wide'>Kaliteli ve güvenilir hizmet</li>
							<li className='mt-2 tracking-wide'>Uzman ve deneyimli ekip</li>
							<li className='mt-2 tracking-wide'>Yenilikçi çözümler</li>
							<li className='mt-2 tracking-wide'>Müşteri odaklı yaklaşım</li>
						</ul>
					</div>
				</div>
			</div>
			<StickyComponent />
		</div>
	);
};

export default About;
