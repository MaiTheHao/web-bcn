import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Projects from './pages/Projects/Projects';
import Members from './pages/Members/Members';
import DataProjectDetail from '../mock_datas/project_detail_page_mock_data.json';
// xnxx
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<h1>Home</h1>} />
					<Route path='/projects' element={<Projects />} />
					<Route
						path='/project/:id'
						element={
							<div>
								<ProjectDetail projects={DataProjectDetail} />
							</div>
						}
					/>
					<Route path='/members' element={<Members />} />
					<Route path='*' element={<div>404 Not Found</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
