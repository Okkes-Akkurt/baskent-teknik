import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import References from './pages/References';
import Services from './pages/Services';

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
	{
		path: '/services',
		element: <Services />,
	},
	{
		path: '/references',
		element: <References />,
	},
	{
		path: '/adminPanel',
		element: <AdminPanel />,
	},
	{
		path: '/admin-giris',
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Fragment>
		<AuthProvider>
			<Navbar />
			<RouterProvider router={router} />
			<Footer />
		</AuthProvider>
	</React.Fragment>,
);
