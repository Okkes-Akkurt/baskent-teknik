import { useState } from 'react';
import wpLogo from '../assets/examplelogos/wp.png';

const StickyComponent = () => {
	const [isOpen, setIsOpen] = useState(false);

	const chooseToggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className={`sticky bottom-0 float-right bg-none p-4 hover:cursor-pointer ${!isOpen && 'shake'} mr-2`}>
			<img
				src={wpLogo}
				alt=''
				onClick={chooseToggle}
			/>
			{isOpen && (
				<div className='flex flex-col gap-2 absolute items-end -translate-y-1/2 -top-10 right-0'>
					<a
						href='https://wa.me/053123456789'
						className='px-4 py-2 text-white hover:bg-[#EB832A] transition duration-200 bg-[#0CC0DF] w-max rounded-lg'>
						Sıhhi Tesisat
					</a>
					<a
						href='https://wa.me/053123456789'
						className='px-4 py-2 text-white hover:bg-[#EB832A] transition duration-200 bg-[#0CC0DF]  w-max rounded-lg'>
						Elektrik
					</a>
				</div>
			)}
		</div>
	);
};

export default StickyComponent;
