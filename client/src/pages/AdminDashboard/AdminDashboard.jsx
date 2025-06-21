import React from "react";
import './AdminDashboard.css'
import avatar from '../../../public/Members/nguyenminhvu.png'
import ControlButtonIcon from '../../../public/AdminDashboard/ControlButton/controlbutton.png'
import HomepageIcon from '../../../public/AdminDashboard/Homepage/homepage.png';
import PersonIcon from '../../../public/AdminDashboard/Person/person.png';
import UserIcon from '../../../public/AdminDashboard/User/user.png';
import ArticleAndReportIcon from '../../../public/AdminDashboard/ArticlesAndReports/articlesandreports.png';
import EventsIcon from '../../../public/AdminDashboard/Events/events.png';
import MailUser from '../../../public/AdminDashboard/User/mail_user.png';
import ArrowIcon from '../../../public/AdminDashboard/ArrowIcon/arrowicon.png';

function AdminDashboard({
    adminName,
    numberStudentsParticipate,
    events,
    articles,
    listStudents
}){
    return (
        <div className="admin-dashboard">
            <div className="admin-dashboard-info">
                <div className="admin-dashboard-info-interface">
                    <img src={avatar} alt="avt" />
                    <p>{adminName}<span>(ADMIN)</span></p>
                </div>
                <div className="admin-dashboard-info-option">
                    <button>
                        <img src={ControlButtonIcon} alt="icon" width="16px" height="14px" />
                        <p>ĐIỀU KHIỂN</p>
                    </button>
                    <div>
                        <img src={HomepageIcon} alt="icon" width="16px" height="16px"/>
                        TRANG CHỦ
                    </div>
                    <div>
                        <img src={PersonIcon} alt="icon" width="12px" height="16px"/>
                        BÀI VIẾT
                    </div>
                    <div>
                        <img src={PersonIcon} alt="icon" width="12px" height="16px"/>
                        NĂNG LỰC
                    </div>
                    <div>
                        <img src={PersonIcon} alt="icon" width="12px" height="16px"/>
                        HOẠT ĐỘNG
                    </div>
                    <div>
                        <img src={PersonIcon} alt="icon" width="12px" height="16px"/>
                        VỀ CHÚNG TÔI
                    </div>
                    <div>
                        <img src={PersonIcon} alt="icon" width="12px" height="16px"/>
                        PORTFOLIO
                    </div>
                </div>
            </div>
            <div className="admin-dashboard-terminal">
                <h1 className="admin-dashboard-terminal-header">Dashboard</h1>
                <div className="admin-dashboard-terminal-body">
                    <div className="admin-dashboard-terminal-body-infowrapper">
                        <div className="admin-dashboard-terminal-body-infowrapper-numberstudents">
                            <div>
                                <img src={UserIcon} alt="user" />
                                <p>SINH VIÊN THAM GIA</p>
                            </div>
                            <p>{numberStudentsParticipate}</p>
                            <p>Trong năm nay</p>
                        </div>

                        <div className="admin-dashboard-terminal-body-infowrapper-articles">
                            <div>
                                <img src={ArticleAndReportIcon} alt="article" />
                                <p>BÀI VIẾT</p>
                            </div>
                            <p>{articles}</p>
                            <p>Trong tuần này</p>
                        </div>

                        <div className="admin-dashboard-terminal-body-infowrapper-events">
                            <div>
                                <img src={EventsIcon} alt="events"/>
                                <p>SỰ KIỆN</p>
                            </div>
                            <p>{events}</p>
                            <p>Đang diễn ra</p>
                        </div>
                        <div className="admin-dashboard-terminal-body-infowrapper-reports">
                            <div>
                                <img src={ArticleAndReportIcon} alt="reprts"/>
                                <p>BÁO CÁO</p>
                            </div>
                            <p>XEM NGAY</p>
                        </div>
                    </div>
                    <div className="admin-dashboard-terminal-body-react">
                        <p>TƯƠNG TÁC</p>
                    </div>
                    <div className="admin-dashboard-terminal-body-studentslist">
                        <div className="admin-dashboard-terminal-body-studentslist-header">
                            <p>DANH SÁCH SINH VIÊN</p>
                            <img src={ArrowIcon} alt="" />
                        </div>
                        <div className="admin-dashboard-terminal-body-studentslist-body">
                            {
                                listStudents.map((student) => {
                                    return (
                                        <div className="admin-dashboard-terminal-body-studentslist-body-user" key={student.id}>
                                            <img src={MailUser} alt="user" />
                                            <p>{student.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="admin-dashboard-terminal-body-reports">
                        <div className="admin-dashboard-terminal-body-reports-header">
                            <p>DANH SÁCH DỰ ÁN SẮP TỚI</p>
                            <img src={ArrowIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;