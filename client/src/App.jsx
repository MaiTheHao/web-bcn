import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout/AppLayout';
import ProjectCard from './components/ProjectCard/ProjectCard.jsx';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route
						index
						element={
							<ProjectCard
								thumbnail="./../../../public/ShoppingCard/thumbnail.jpg"
								projectName="Website Ban Công Nghệ"
								projectDes="Anh Nguyễn Văn Hùng là một người đàn ông điềm đạm, thân thiện và luôn tận tụy trong công việc. Với tác phong chuyên nghiệp và tinh thần trách nhiệm cao, anh Hùng được đồng nghiệp yêu mến và tin tưởng. Trong cuộc sống hằng ngày, anh luôn sẵn sàng giúp đỡ người khác, dù là trong công việc hay ngoài đời thường. Không chỉ giỏi chuyên môn, anh còn có lối sống giản dị, chân thành và luôn giữ được sự khiêm tốn. Anh Hùng là hình mẫu của một người trưởng thành đáng kính, sống có lý tưởng và luôn cố gắng đóng góp tích cực cho cộng đồng xung quanh."
								numberStar={999}
								numberView={999}
								startDate="02/01/2025"
								finishDate="27/03/2025"
								technologies={['HTML','JS','CSS','REACT']}
							/>
						}
					></Route>
				</Route>
				<Route path='*' element={<div>404 Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
