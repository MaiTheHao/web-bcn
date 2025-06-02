import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './AppFooter.css';


function AppFooter() {
	return (
	<div class='app-container' id='app-footer'>
		<div class='app-block' id='footer-block'>
			<ul className='footer-list'>
				<li className='footer-title'>
					<FontAwesomeIcon icon={faEnvelope} /><a href='https://www.mail.com'>techsquad.it.iuh@gmail.com</a></li>
				<li className='footer-title'>
					<FontAwesomeIcon icon={faFacebook} /><a href='https://www.twitter.com'>facebook.com/bancongnghe.it.iuh</a></li>
				<li className='footer-title'>
					<FontAwesomeIcon icon={faYoutube} /><a href='https://www.instagram.com'>youtube.com/@bancongnghe.it.iuh</a></li>
			</ul>
		</div>
	</div>
	);
}

export default AppFooter;
