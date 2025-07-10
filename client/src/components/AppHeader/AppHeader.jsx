import React from 'react';
import Logo from '/svg/Logo.svg';
import Navbar from '../AppNavbar/AppNavbar.jsx';
import Searchbar from '../GlobalSearch/GlobalSearch.jsx';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import './AppHeader.css';

function AppHeader() {
	return (
		<header className='app-container' id='app-header'>
			<div className='app-block' id='app-header-block'>
				<div className='logo-container'>
					<img src={Logo} alt='Logo' className='logo' />
				</div>
				<Navbar />
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"  fill="#00838f">
					<path  d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z"/>
				</svg>
				<div className='global-search-container'>
					<Searchbar />
				</div>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton/>
				</SignedIn>
			</div>
		</header>
	);
}

export default AppHeader;
