import React from 'react';

function AppBody({ children }) {
	return (
		<main className={'app-container'} id='app-body'>
			<div className={'app-block'} id='app-body-block'>
				{children}
			</div>
		</main>
	);
}

export default AppBody;
