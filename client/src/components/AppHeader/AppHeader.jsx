import React from 'react';
import Logo from '/svg/Logo.svg';
import Navbar from '../AppNavbar/AppNavbar.jsx';
import Searchbar from '../GlobalSearch/GlobalSearch.jsx';
import './AppHeader.css';

function AppHeader() {
	return (
		<header className='app-container' id='app-header'>
			<div className='app-block' id='app-header-block'>
				<div className='logo-container'>
					<img src={Logo} alt='Logo' className='logo' />
				</div>
				<Navbar />
				<div className='global-search-container'>
					<Searchbar />
				</div>
			</div>
		</header>
	);
}

export default AppHeader;
