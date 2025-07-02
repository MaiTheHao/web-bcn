import { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/api/user-api.service';
import './Admin.css';
import avatar from '/Members/nguyenminhvu.png';
import ControlButtonIcon from '/pages-img/AdminDashboard/ControlButton/controlbutton.png';
import HomepageIcon from '/pages-img/AdminDashboard/Homepage/homepage.png';
import PersonIcon from '/pages-img/AdminDashboard/Person/person.png';
import UserIcon from '/pages-img/AdminDashboard/User/user.png';
import ArticleAndReportIcon from '/pages-img/AdminDashboard/ArticlesAndReports/articlesandreports.png';
import EventsIcon from '/pages-img/AdminDashboard/Events/events.png';
import ArrowIcon from '/pages-img/AdminDashboard/ArrowIcon/arrowicon.png';
import { roles } from '../../consts/roles';
import { Link } from 'react-router-dom';

// Phần này ông nên sử dụng param thay vì truyền từ Route vào qua props
// Tham khảo trang MEMBER DETAIL phần đầu tiên á
// const { id } = useParams();
/*
    AdminDashboard không nhận bất kì props nào
    Dữ liệu thì cứ MOCK trước tại chưa có đăng nhập đăng ký hay quản lí auth nên không xác thực admin được
    và hiển thị lên giao diện
*/
function AdminDashboard({ adminName, numberStudentsParticipate, events, articles }) {
	const [listStudents, setListStudents] = useState([]);
	const [loading, setLoading] = useState(true);

	// Lấy user list
	useEffect(() => {
		const fetchStudents = async () => {
			try {
				setLoading(true);
				const usersData = await getAllUsers();
				// Lọc ra danh sách sinh viên có vai trò là MEMBER
				const students = usersData
					.filter((user) => user.role === roles.MEMBER)
					.map((user) => ({
						id: user._id,
						name: user.profile.name,
						avt: user.profile.avt,
					}));
				setListStudents(students);
			} catch (error) {
				console.error('Error fetching students:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchStudents();
	}, []);

	return (
		<div className='admin-dashboard'>
			<div className='admin-dashboard-info'>
				<div className='admin-dashboard-info-interface'>
					<img src={avatar} alt='avt' />
					<p>
						{adminName}
						<span>(ADMIN)</span>
					</p>
				</div>
				<div className='admin-dashboard-info-option'>
					<button>
						<img src={ControlButtonIcon} alt='icon' width='16px' height='14px' />
						<p>ĐIỀU KHIỂN</p>
					</button>
					<div>
						<img src={HomepageIcon} alt='icon' width='16px' height='16px' />
						TRANG CHỦ
					</div>
					<div>
						<img src={PersonIcon} alt='icon' width='12px' height='16px' />
						BÀI VIẾT
					</div>
					<div>
						<img src={PersonIcon} alt='icon' width='12px' height='16px' />
						NĂNG LỰC
					</div>
					<div>
						<img src={PersonIcon} alt='icon' width='12px' height='16px' />
						HOẠT ĐỘNG
					</div>
					<div>
						<img src={PersonIcon} alt='icon' width='12px' height='16px' />
						VỀ CHÚNG TÔI
					</div>
					<div>
						<img src={PersonIcon} alt='icon' width='12px' height='16px' />
						PORTFOLIO
					</div>
				</div>
			</div>
			<div className='admin-dashboard-terminal'>
				<h1 className='admin-dashboard-terminal-header'>Dashboard</h1>
				<div className='admin-dashboard-terminal-body'>
					<div className='admin-dashboard-terminal-body-infowrapper'>
						<div className='admin-dashboard-terminal-body-infowrapper-numberstudents'>
							<div>
								<img src={UserIcon} alt='user' />
								<p>SINH VIÊN THAM GIA</p>
							</div>
							<p>{numberStudentsParticipate}</p>
							<p>Trong năm nay</p>
						</div>

						<div className='admin-dashboard-terminal-body-infowrapper-articles'>
							<div>
								<img src={ArticleAndReportIcon} alt='article' />
								<p>BÀI VIẾT</p>
							</div>
							<p>{articles}</p>
							<p>Trong tuần này</p>
						</div>

						<div className='admin-dashboard-terminal-body-infowrapper-events'>
							<div>
								<img src={EventsIcon} alt='events' />
								<p>SỰ KIỆN</p>
							</div>
							<p>{events}</p>
							<p>Đang diễn ra</p>
						</div>
						<div className='admin-dashboard-terminal-body-infowrapper-reports'>
							<div>
								<img src={ArticleAndReportIcon} alt='reprts' />
								<p>BÁO CÁO</p>
							</div>
							<p>XEM NGAY</p>
						</div>
					</div>
					<div className='admin-dashboard-terminal-body-react'>
						<p>TƯƠNG TÁC</p>
					</div>
					<div className='admin-dashboard-terminal-body-studentslist'>
						<div className='admin-dashboard-terminal-body-studentslist-header'>
							<p>DANH SÁCH SINH VIÊN</p>
							<img src={ArrowIcon} alt='' />
						</div>
						<div className='admin-dashboard-terminal-body-studentslist-body'>
							{loading ? (
								<div>Loading...</div>
							) : (
								listStudents.map((student) => {
									return (
										<Link to={`/members/${student.id}`} className='admin-dashboard-terminal-body-studentslist-body-user' key={student.id}>
											<img src={student.avt} alt='user' />
											<p>{student.name}</p>
										</Link>
									);
								})
							)}
						</div>
					</div>
					<div className='admin-dashboard-terminal-body-reports'>
						<div className='admin-dashboard-terminal-body-reports-header'>
							<p>DANH SÁCH DỰ ÁN SẮP TỚI</p>
							<img src={ArrowIcon} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminDashboard;
