import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { IoMenu } from 'react-icons/io5';

function Navbar() {

	const [ isOpen, setIsOpen ] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};


	return (
		<div className='bg-[#f6b02e]  w-full'>
			<nav className='container md:mx-auto p-2 md:flex md:items-center md:justify-between '>
				<div className='flex items-center justify-between'>
					<span className='text-2xl font-[poppins] cursor-pointer'>
						<a
							href='/'
							className='flex items-center'>
							<div className=''>
								<img
									src={logo}
									alt='Başkent Teknik'
									className='rounded-full inline h-16 mr-2'
								/>
							</div>
							<span>
								Başkent
								<br />
								Teknik
							</span>
						</a>
					</span>
					<span className='text-5xl cursor-pointer md:hidden block'>
						<IoMenu onClick={toggleMenu} />
					</span>
				</div>

				<ul className={`md:flex md:items-center gap-7 block ${isOpen ? 'block' : 'hidden'}`}>
					<li className='my-6 md:my-0'>
						<a
							href='/'
							className='text-xl duration-500 border-[#47B9E5]  hover:border-b-4 p-2'>
							Anasayfa
						</a>
					</li>
					<li className='my-6 md:my-0'>
						<a
							href='/about'
							className='text-xl duration-500 border-[#47B9E5]  hover:border-b-4 p-2'>
							Hakkımızda
						</a>
					</li>
					<li className='my-6 md:my-0'>
						<a
							href='/contact'
							className='text-xl duration-500 border-[#47B9E5]  hover:border-b-4 p-2'>
							İletişim
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
