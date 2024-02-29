import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Fragment>
		<Navbar />
		<RouterProvider router={router} />
		<Footer />
	</React.Fragment>,
);
