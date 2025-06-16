import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Projects from './pages/Projects/Projects';
import MemberDetail from './pages/MemberDetail/MemberDetail';
import projects from './pages/ProjectDetail/ProjectDetail.json';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Projects />} />
					<Route path='/projects' element={<Projects />} />
					<Route
						path='/project/:id'
						element={
							<div>
								<ProjectDetail projects={projects} />
							</div>
						}
					/>
					<Route
						path='/member/:id'
						element={
							<div>
								<MemberDetail />
							</div>
						}
					/>
					<Route path='*' element={<div>404 Not Found</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
