import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects.jsx';
import Members from './pages/Members/Members';
import { useEffect } from 'react';
import { getAllUsers } from './services/api/user-api.service';
import MemberDetail from './pages/MemberDetail/MemberDetail';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import AdminDashboard from './pages/Admin/Admin.jsx';
import About from './pages/About/About.jsx';

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
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/projects/:id' element={<ProjectDetail />} />
					<Route path='/members' element={<Members />} />
					<Route path='/members/:id' element={<MemberDetail />} />
				</Route>

				{/* Logic điều hướng tới trang Admin Dashboard */}
				<Route
					path='/admin'
					element={
						<AppLayout
							content={
								<AdminDashboard
									adminName='Nguyễn Hùng'
									numberStudentsParticipate={1.474}
									events={1}
									articles={3}
									listStudents={[
										{
											id: 1,
											name: 'bancongnghe@gmail.com',
										},
										{
											id: 2,
											name: 'bancongnghe@gmail.com',
										},
										{
											id: 3,
											name: 'bancongnghe@gmail.com',
										},
										{
											id: 4,
											name: 'bancongnghe@gmail.com',
										},
										{
											id: 5,
											name: 'bancongnghe@gmail.com',
										},
									]}
								/>
							}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
