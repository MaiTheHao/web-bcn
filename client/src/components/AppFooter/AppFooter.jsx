import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './AppFooter.css';

function AppFooter() {
	return (
		<footer className='app-container' id='app-footer'>
			<div className='app-block' id='app-footer-block'>
				<ul className='app-footer__list'>
					<li className='app-footer__item'>
						<FontAwesomeIcon icon={faEnvelope} />
						<a href='https://www.mail.com'>techsquad.it.iuh@gmail.com</a>
					</li>
					<li className='app-footer__item'>
						<FontAwesomeIcon icon={faFacebook} />
						<a href='https://www.twitter.com'>facebook.com/bancongnghe.it.iuh</a>
					</li>
					<li className='app-footer__item'>
						<FontAwesomeIcon icon={faYoutube} />
						<a href='https://www.instagram.com'>youtube.com/@bancongnghe.it.iuh</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default AppFooter;
