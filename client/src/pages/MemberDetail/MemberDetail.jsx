import React, { useEffect, useState } from 'react';
import './MemberDetail.css';
import Projectcard from '../../components/ProjectCard/ProjectCard';

function MemberDetail() {
  const [member, setMember] = useState(null);

  useEffect(() => {
    fetch('/MemberDetail.json')
      .then((res) => res.json())
      .then((data) => setMember(data))
      .catch(() => setMember(null));
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
          <div className="section-title">MỤC TIÊU</div>
          <div className="target">{member.target}</div>
        </div>
        <div className="section">
          <div className="section-title">CHỨNG CHỈ</div>
          <ul className="cert-list">
            {member.certificates.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </aside>
      <main className="member-main">
        <section className="skills-section">
          <div className="section-title">KỸ NĂNG</div>
          <div className="skills-list">
            {member.skills.map((skill, i) => (
              <span className="skill-item" key={i}>{skill}</span>
            ))}
          </div>
        </section>
        <section className="projects-section">
          <div className="section-title">PROJECT</div>
          <div className="projects-list">
            {member.projects.map((project, i) => (
              <Projectcard key={i} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MemberDetail;
