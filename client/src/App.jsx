import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';
import Projects from './pages/Projects/Projects';
import Members from './pages/Members/Members';
import { useEffect } from 'react';
import { getAllUsers } from './services/api/user-api.service';
import MemberDetail from './pages/MemberDetail/MemberDetail';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

function App() {
	useEffect(() => {
		const fakeFetch = async () => {
			const data = await getAllUsers();
			console.log(data);
		};

		fakeFetch();
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<h1>Home</h1>} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/projects/:id' element={<ProjectDetail />} />
					<Route path='members' element={<Members />} />
					<Route path='members/:id' element={<MemberDetail />} />
					{/* <Route
						path='/project/:id'
						element={
							<div>
								<ProjectDetail projects={DataProjectDetail} />
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
					
					<Route path='*' element={<div>404 Not Found</div>} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
