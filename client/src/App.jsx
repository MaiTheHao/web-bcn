import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import projects from './pages/ProjectDetail/ProjectDetail.json';
import ProjectCart from './components/ProjectCart/ProjectCart';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					{/* Các trang sẽ được gắn vào đây */}
					<Route
						path='/project/:id'
						element={
							<div>
								<ProjectDetail projects={projects} />
							</div>
						}
					/>
				</Route>
				<Route path='/project' element={<AppLayout />}>
					{/* Các trang sẽ được gắn vào đây */}
					<Route index element={<ProjectCart />}></Route>
				</Route>
				<Route path='*' element={<div>404 Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
