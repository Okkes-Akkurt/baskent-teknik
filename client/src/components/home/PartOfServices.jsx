import React from 'react'

const PartOfServices = () => {
  return (
		<div className=' mt-14 py-7  md:block md:pl-8 lg:pl-36 p-5'>
			<h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#EC8329] mb-4 lg:mb-7 underline'>
				Hizmetlerimiz
			</h1>
			<div className=''>
				<div className='left-side mb-10'>
					<h3 className='text-xl md:text-2xl font-bold text-[#011F30] mb-4 lg:mb-7'>Sıhhi tesisat</h3>
					<ul className='space-y-1 text-[#011F30] text-md md:text-xl flex gap-y-5 gap-x-5 flex-wrap'>
						<li className='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600 flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>
							Boyler
						</li>
						<li className='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>{' '}
							Plakalı eşanjör
						</li>
						<li className='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>
							Daire giriş istasyonu
						</li>
						<li className='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>
							Modüler su deposu
						</li>
						<li className='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>
							Hidrafor
						</li>
						<li className='flex items-center  md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>
							Resirkülasyon pompası
						</li>
					</ul>
					<button className='border bg-[#EB832A] rounded-br-lg rounded-tl-lg py-2 px-5 mt-2 lg:mt-4 text-base lg:text-xl text-white hover:bg-slate-200 hover:text-[#EC8329] shadow-lg border-slate-300'>
						<a href='/services'>
							Daha fazla <span className='mx-2'> &rarr;</span>
						</a>
					</button>
				</div>

				<div className='right-side'>
					<h3 className='text-xl md:text-2xl font-bold text-[#011F30] mb-4 lg:mb-7'>Elektirik</h3>
					<ul className='space-y-1 text-[#011F30] list-inside text-lg md:text-xl flex gap-y-5 gap-x-5 flex-wrap'>
						<li className='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600 flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>
							Elektrik arıza
						</li>
						<li className='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>{' '}
							Led montajı
						</li>
						<li className='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>
							Tava montajı
						</li>
						<li className='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>
							Priz,avize,lamba,sigorta montajı
						</li>
						<li className='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>
							Hoparlor
						</li>
						<li className='flex items-center md:w-custom bg-[#0CC0DF] px-4 py-4 rounded-lg shadow-lg justify-center'>
							<svg
								className='w-3.5 h-3.5 me-2 text-green-600  flex-shrink-0'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
							</svg>
							Flasör
						</li>
					</ul>
					<button className='border bg-[#EB832A] rounded-br-lg rounded-tl-lg py-2 px-5 mt-2 lg:mt-4 text-base lg:text-xl text-white hover:bg-slate-200 hover:text-[#EC8329] shadow-lg border-slate-300'>
						<a href='/about'>
							Daha fazla <span className='mx-2'> &rarr;</span>
						</a>
					</button>
				</div>
			</div>
		</div>
  );
}

export default PartOfServices