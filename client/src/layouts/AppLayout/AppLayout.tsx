import React from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import AppFooter from '../../components/AppFooter/AppFooter';
import { Outlet } from 'react-router-dom';
import AppBody from '../../components/AppBody/AppBody';
import { IsOwner,AutoAssignMemberRole } from '../../users/IsOwner.jsx';

function AppLayout({content}) {
	return (
		<>
			{/* <IsOwner />
			<AutoAssignMemberRole /> */}
			<AppHeader />
			{content}
			<AppBody>
				<Outlet />
			</AppBody>
			<AppFooter />
		</>
	);
}

export default AppLayout;
