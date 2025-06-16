import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProjectDetail.css';
import { technologiesMapped } from '../../consts/technologiesMapped';
import { getProjectById } from '../../services/api/project-api.service';
import { getUserById } from '../../services/api/user-api.service';
import { transformUserToMemberCard } from '../../services/transform/card-transform.service';

function ProjectDetail() {
	const { id } = useParams();
	const [project, setProject] = useState(null);
	const [loadingProject, setLoadingProject] = useState(true);

	const [teamMembers, setTeamMembers] = useState([]);
	const [loadingTeamMembers, setLoadingTeamMembers] = useState(false);

	useEffect(() => {
		const fetchProject = async () => {
			if (!id) return;
			setLoadingProject(true);
			setProject(null);
			try {
				const data = await getProjectById(id);
				setProject(data);
			} catch (error) {
				console.error('Lỗi khi lấy dữ liệu dự án:', error);
				setProject(null);
			} finally {
				setLoadingProject(false);
			}
		};
		fetchProject();
	}, [id]);

	useEffect(() => {
		const fetchTeamMembers = async () => {
			if (!project || !Array.isArray(project.team_members) || project.team_members.length === 0) {
				setTeamMembers([]);
				return;
			}

			setLoadingTeamMembers(true);
			try {
				const transformedMembers = await Promise.all(
					project.team_members.map(async (memberId) => {
						const userData = await getUserById(memberId);
						return transformUserToMemberCard(userData);
					})
				);
				setTeamMembers(transformedMembers.filter(Boolean));
			} catch (error) {
				console.error('Lỗi khi lấy dữ liệu thành viên:', error);
				setTeamMembers([]);
			} finally {
				setLoadingTeamMembers(false);
			}
		};
		fetchTeamMembers();
	}, [project]);

	if (loadingProject) return <div>Đang tải thông tin dự án...</div>;
	if (!project) return <div>Không tìm thấy dự án</div>;

	return (
		<div className='project-detail'>
			<h1 className='project-detail__title'>{project.name}</h1>

			<div className='project-detail__images'>
				<div className='project-detail__main-image'>
					<img src={project.thumbnail} alt={project.name} />
				</div>
				{project.images && project.images.length > 0 && (
					<div className='project-detail__side-images'>
						{project.images.map((img, index) => (
							<img key={index} src={img} alt={`Image ${index + 1}`} />
						))}
					</div>
				)}
			</div>

			<div className='project-detail__info'>
				<div className='project-detail__info-group'>
					<span className='project-detail__label'>CÔNG NGHỆ:</span>
					<div className='project-detail__icons'>
						{project.technologies &&
							project.technologies.map((tech, index) => (
								<span key={index} className='project-detail__technology-item'>
									{technologiesMapped[tech] ? <img src={technologiesMapped[tech]} alt={tech} /> : <span>{tech}</span>}
								</span>
							))}
					</div>
				</div>

				<div className='project-detail__info-group'>
					<span className='project-detail__label'>THỜI GIAN THỰC HIỆN:</span>
					<span className='project-detail__info-value'>
						{project.dates?.start && project.dates?.finish
							? `${new Date(project.dates.start).toLocaleDateString()} - ${new Date(project.dates.finish).toLocaleDateString()}`
							: 'Không có thông tin'}
					</span>
				</div>

				<div className='project-detail__info-group'>
					<span className='project-detail__label'>THỐNG KÊ:</span>
					<span className='project-detail__info-value'>
						Lượt xem: {project.statistics?.views || 0}, Đánh giá: {project.statistics?.stars || 0}
					</span>
				</div>
			</div>

			<div className='project-detail__description'>
				<h2 className='project-detail__description-title'>MÔ TẢ CHI TIẾT</h2>
				{project.description && project.description.split('\n').map((line, index) => <p key={index}>{line}</p>)}
			</div>

			{project.team_members && project.team_members.length > 0 && (
				<div className='project-detail__team'>
					<h2 className='project-detail__team-title'>THÀNH VIÊN DỰ ÁN</h2>
					<div className='project-detail__team-members'>
						{loadingTeamMembers ? (
							<div>Đang tải thông tin thành viên...</div>
						) : teamMembers.length > 0 ? (
							teamMembers.map((member) => (
								<div key={member.id} className='project-detail__team-member'>
									<div className='project-detail__team-member-avatar'>
										{member.avatar ? <img src={member.avatar} alt={member.name} /> : <div className='project-detail__team-member-avatar-placeholder' />}
									</div>
									<div className='project-detail__team-member-info'>
										<div className='project-detail__team-member-name'>{member.name}</div>
										<div className='project-detail__team-member-role'>{member.role}</div>
									</div>
								</div>
							))
						) : (
							<div>Không có thông tin thành viên</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default ProjectDetail;
