import AppHeader from '../../components/AppHeader/AppHeader';
import AppFooter from '../../components/AppFooter/AppFooter';
import { Outlet } from 'react-router-dom';
import AppBody from '../../components/AppBody/AppBody';

function AppLayout() {
	return (
		<div>
			<AppHeader />
			<AppBody>
				<Outlet />
			</AppBody>
			<AppFooter />
		</div>
	);
}

export default AppLayout;
