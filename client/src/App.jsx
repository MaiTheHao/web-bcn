import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					{/* Các trang sẽ được gắn vào đây */}
				</Route>
				<Route path='*' element={<div>404 Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
