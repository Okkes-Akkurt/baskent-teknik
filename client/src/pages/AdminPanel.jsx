import React, { useState } from 'react';
import PhotoUploader from '../components/adminPanel/PhotoUploader';
import LogoUploader from '../components/adminPanel/LogoUploader';


const AdminPanel = () => {

	return (
		<div className='container mx-auto my-5 flex flex-col md:flex-row p-5'>
			<PhotoUploader />
		</div>
	);
};

export default AdminPanel;
