import React, { useRef, useState, useEffect } from 'react';
import './MemberDetail.css';
import Projectcard from '../../components/ProjectCard/ProjectCard.jsx';
import { getMemberDetail } from './getMemberDetail';

function MemberDetail() {
  // Dùng hàm có sẵn để lấy data, không fetch, không import JSON
  const [member, setMember] = useState(null);
  const projectListRef = useRef(null);

  useEffect(() => {
    setMember(getMemberDetail());
  }, []);

  if (!member) return <div>Loading...</div>;

  return (
    <div className="member-detail-container">
      <aside className="member-sidebar">
        <div className="avatar">
          {member.avatar ? (
            <img src={member.avatar} alt="avatar" />
          ) : (
            <div className="avatar-placeholder" />
          )}
        </div>
        <div className="member-name">{member.name} <span className="role">({member.role})</span></div>
        <div className="section">
          <div className="section-title">LIÊN HỆ</div>
          <div className="contact-info">
            <div className="contact-row"><span className="icon email" />{member.email}</div>
            <div className="contact-row"><span className="icon facebook" />{member.facebook}</div>
          </div>
        </div>
        <div className="section">
          <div className="section-title">KỸ NĂNG</div>
          <div className="skills-list">
            {member.skills.map((skill, i) => (
              <span className="skill-item" key={i}>{skill}</span>
            ))}
          </div>
        </div>
      </aside>
      <main className="member-main">
        <section className="member-section">
          <div className="member-section-title">VỀ BẢN THÂN</div>
          <div className="member-description">{member.about}</div>
        </section>
        <section className="projects-section">
          <div className="section-title">DỰ ÁN</div>
          <div className="project-scroll-wrapper">
            <div className="projects-list-horizontal" ref={projectListRef} tabIndex={0} style={{overflowX: 'auto', overflowY: 'hidden'}}>
              {member.projects.map((project, i) => (
                <Projectcard key={i} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MemberDetail;
