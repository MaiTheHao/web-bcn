import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MemberDetail.css';
import { getUserById } from '../../services/api/user-api.service';
import { getProjectById } from '../../services/api/project-api.service';
import { transformProjectToProjectCard } from '../../services/transform/card-transform.service';
import { technologiesMapped } from '../../consts/technologiesMapped';
import Projectcard from '../../components/Card/ProjectCard/ProjectCard';

function MemberDetail() {
	const { id } = useParams();
	const [member, setMember] = useState(null);
	const [loadingMember, setLoadingMember] = useState(true);

	const [projects, setProjects] = useState([]);
	const [loadingProjects, setLoadingProjects] = useState(false);

	useEffect(() => {
		const fetchMember = async () => {
			if (!id) return;
			setLoadingMember(true);
			setMember(null);
			try {
				const data = await getUserById(id);
				setMember(data);
			} catch (error) {
				console.error('Lỗi khi lấy dữ liệu thành viên:', error);
				setMember(null);
			} finally {
				setLoadingMember(false);
			}
		};
		fetchMember();
	}, [id]);

	useEffect(() => {
		const fetchProjects = async () => {
			// nếu chưa có member projects 
			if (!member || !Array.isArray(member.projects) || member.projects.length === 0) {
				setProjects([]);
				return;
			}

			setLoadingProjects(true);
			try {
				const transformedProjects = await Promise.all(
					member.projects.map(async (projectId) => {
						const projectData = await getProjectById(projectId);
						return transformProjectToProjectCard(projectData);
					})
				);
				setProjects(transformedProjects.filter(Boolean));
			} catch (error) {
				console.error('Lỗi khi lấy dữ liệu dự án:', error);
				setProjects([]);
			} finally {
				setLoadingProjects(false);
			}
		};
		fetchProjects();
	}, [member]);

	if (loadingMember) return <div>Đang tải thông tin thành viên...</div>;
	if (!member) return <div>Không tìm thấy thành viên</div>;

	return (
		<div className='member-detail'>
			<aside className='member-detail__sidebar'>
				<div className='member-detail__avatar'>{member.profile?.avt ? <img src={member.profile.avt} alt='avatar' /> : <div className='member-detail__avatar-placeholder' />}</div>
				<div className='member-detail__name'>
					{member.profile?.name} <span className='member-detail__role'>({member.role})</span>
				</div>
				<div className='member-detail__section'>
					<div className='member-detail__section-title'>LIÊN HỆ</div>
					<div className='member-detail__contact'>
						<div className='member-detail__contact-row'>
							<span className='member-detail__icon--email' />
							{member.email}
						</div>
					</div>
				</div>
				<div className='member-detail__section'>
					<div className='member-detail__section-title'>MÔ TẢ</div>
					<div className='member-detail__target'>{member.profile?.bio}</div>
				</div>
			</aside>
			<main className='member-detail__main'>
				<section className='member-detail__skills'>
					<div className='member-detail__section-title'>KỸ NĂNG</div>
					<div className='member-detail__skills-list'>
						{member.technologies?.map((skill, i) => (
							<span className='member-detail__skill-item' key={i}>
								{technologiesMapped[skill] ? (
									<img src={technologiesMapped[skill]} alt={skill} className='member-detail__skill-icon' />
								) : (
									<span className='member-detail__skill-name'>{skill}</span>
								)}
							</span>
						))}
					</div>
				</section>
				<section className='member-detail__projects'>
					<div className='member-detail__section-title'>PROJECT</div>
					<ul className='member-detail__projects-list'>
						{loadingProjects ? (
							<span>Đang tải dự án...</span>
						) : projects.length > 0 ? (
							projects.map((project) => (
								<li className='member-detail__projects-list-item' key={project.id}>
									<Projectcard {...project} />
								</li>
							))
						) : (
							<span>Không có dự án nào</span>
						)}
					</ul>
				</section>
			</main>
		</div>
	);
}

export default MemberDetail;
