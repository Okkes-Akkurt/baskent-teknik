import StickyComponent from '../components/StickyComponent';
import ContactForm from '../components/contact/ContactForm';
import ContactHeader from '../components/contact/ContactHeader';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
		<div className=''>
			<ContactHeader />
			<div className='container lg:flex my-10 mx-auto'>
				<ContactForm />
				<ContactInfo />
			</div>
			<StickyComponent />
		</div>
  );
}

export default Contact