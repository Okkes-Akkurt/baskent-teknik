import contactImage from '../../assets/logo.svg';

const ContactHeader = () => {
	return (
		<div className='bg-[#001F30] flex flex-col items-center p-4'>
			<img
				src={contactImage}
				className='max-w-full max-h-56 mb-4'
				alt='Contact Logo'
			/>

			<div className='text-[#F7B02F] text-4xl md:text-6xl lg:text-8xl p-4 text-center'>İletişim</div>
		</div>
	);
};

export default ContactHeader;
