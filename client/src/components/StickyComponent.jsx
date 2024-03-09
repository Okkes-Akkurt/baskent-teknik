import { useState } from 'react';
import wpLogo from '../assets/wp.svg';

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
				className='w-16'
			/>
			{isOpen && (
				<div className='flex flex-col gap-2 absolute items-end -translate-y-1/2 -top-10 right-0'>
					<a
						href='https://wa.me/+905077780943'
						className='px-4 py-2 text-white hover:bg-[#EB832A] transition duration-200 bg-[#0CC0DF] w-max rounded-lg'>
						Sıhhi Tesisat
					</a>
					<a
						href='https://wa.me/+905349198246'
						className='px-4 py-2 text-white hover:bg-[#EB832A] transition duration-200 bg-[#0CC0DF]  w-max rounded-lg'>
						Elektrik
					</a>
				</div>
			)}
		</div>
	);
};

export default StickyComponent;
