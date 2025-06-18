import './MemberCard.css';
import StarIcon from '/star/star.png';
import ViewIcon from '/view/view.png';
import { technologiesMapped } from '../../../consts/technologiesMapped';
import { Link } from 'react-router-dom';

function MemberCard({ avatar, role, id, name, jobTitle, status, starCount, viewCount, projectCount, technologies }) {
	return (
		<div className='member-card'>
			<div className='member-card__right'>
				<div className='member-card__avatar'>{avatar ? <img src={avatar} alt='avatar' /> : <img src='/default-avatar.png' alt='default avatar' />}</div>
				<div className='member-card__stats'>
					{/* star */}
					<div className='member-card__stat'>
						<img src={StarIcon} alt='star' />
						<p>{starCount}</p>
					</div>
					{/* view */}
					<div className='member-card__stat member-card__stat--view'>
						<img src={ViewIcon} alt='view' />
						<p>{viewCount}</p>
					</div>
				</div>
				<div className='member-card__tech'>
					<p>Công nghệ thành thạo</p>
					<div className='member-card__tech-list'>
						{technologies.map((tech) => {
							return <img key={tech.id} src={technologiesMapped?.[tech.name]} alt='tech' />;
						})}
					</div>
				</div>
			</div>
			<div className='member-card__left'>
				<p className='member-card__info member-card__info--title'>{role}</p>
				<p className='member-card__info'>{name}</p>
				<p className='member-card__info'>{status}</p>
				<p className='member-card__info'>{jobTitle}</p>
				<p className='member-card__info member-card__info--projects'>
					Dự án: {projectCount} <span>(Đã tham gia)</span>
				</p>
				<Link to={`${id}`} className='member-card__more'>
					<p>MORE</p>
					<img src='/MoreButton/moreButton.png' alt='more' />
				</Link>
			</div>
		</div>
	);
}

export default MemberCard;
