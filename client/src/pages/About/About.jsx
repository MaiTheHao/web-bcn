import './About.css';
import Robot from '/pages-img/AboutPage/robot.png';
import BCN1 from '/pages-img/AboutPage/BCN1.png';
import BCN2 from '/pages-img/AboutPage/BCN2.png';
import BCN3 from '/pages-img/AboutPage/BCN3.png';
import Button from '../../components/Button/Button';

function About() {
	return (
		<div className='about-page'>
			<div className='about-page-rightcontent'>
				<h1>BAN CÔNG NGHỆ</h1>
				<p>
					Ban Công Nghệ Sinh Viên IT thuộc Đoàn Khoa Công Nghệ Thông Tin là nơi kết nối các bạn sinh viên đam mê công nghệ. Chúng tôi tập trung vào việc phát triển phần mềm, tổ chức các hoạt
					động đào tạo kỹ năng IT, và tạo ra một cộng đồng học hỏi, hợp tác. Với mục tiêu giúp sinh viên nâng cao kỹ năng công nghệ, tham gia các dự án thực tế và phát triển nghề nghiệp, Ban
					Công Nghệ luôn chào đón những bạn trẻ nhiệt huyết gia nhập để cùng nhau sáng tạo và học hỏi.
				</p>
				<Button
					data={"Tìm hiểu thêm"}
				/>
				<a href='#'>Đăng ký thành viên</a>
			</div>
			<div className='about-page-leftcontent'>
				<img src={Robot} alt=''/>
				<img src={BCN1} alt='' />
				<img src={BCN2} alt='' />
				<img src={BCN3} alt='' />
				<img src={BCN1} alt='' width='282px' height='159px' />
			</div>
		</div>
	);
}

export default About;
