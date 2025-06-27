import React from 'react';
import './AboutPage.css';
import Robot from '../../../public/AboutPage/robot.png';
import BCN1 from '../../../public/AboutPage/BCN1.png';
import BCN2 from '../../../public/AboutPage/BCN2.png';
import BCN3 from '../../../public/AboutPage/BCN3.png';

function AboutPage(){
    return (
        <div className="about-page">
            <div className='about-page-rightcontent'>
                <h1>BAN CÔNG NGHỆ</h1>
                <p>Ban Công Nghệ Sinh Viên IT thuộc Đoàn Khoa Công Nghệ Thông Tin 
                 là nơi kết nối các bạn sinh viên đam mê công nghệ. Chúng tôi tập 
                 trung vào việc phát triển phần mềm, tổ chức các hoạt động đào tạo
                  kỹ năng IT, và tạo ra một cộng đồng học hỏi, hợp tác. Với mục tiêu 
                  giúp sinh viên nâng cao kỹ năng công nghệ, tham gia các dự án thực 
                  tế và phát triển nghề nghiệp, Ban Công Nghệ luôn chào đón những bạn 
                  trẻ nhiệt huyết gia nhập để cùng nhau sáng tạo và học hỏi.
                </p>
                <button>Tìm hiểu thêm</button>
                <a href="#">Đăng ký thành viên</a>
            </div>
            <div className='about-page-leftcontent'>
                <img src={Robot} alt="" width="339px" height="389px" />
                <img src={BCN1} alt="" width="542px" height="362px" />
                <img src={BCN2} alt="" width="393px" height="295px" />
                <img src={BCN3} alt="" width="442px" height="322px" />
                <img src={BCN1} alt="" width="282px" height="159px" />
            </div>
        </div>
    )
}

export default AboutPage;