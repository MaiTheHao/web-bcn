import { technologiesMapped } from '../../consts/technologiesMapped';
import './ProjectCard.css';
import starIcon from '/star/star.png';
import viewIcon from '/view/view.png';

// NOTE: TECHNOLOGIES PHẢI THÊM ID ĐỂ ĐÁNH INDEX KHI RENDER RA 

function Projectcard({
	thumbnail,
	projectName,
	projectDes,
	numberStar,
	numberView,
	startDate,
	finishDate,
	technologies,
}) {
	return (
		<div id='project-card'>
			<img src={thumbnail} alt='image' />
			<div className='project-card__content'>
				<div className='project-card__content-upper'>
					<h1>{projectName}</h1>
					<div className='project-card__content-upper-react'>
						<span>
							<img src={starIcon} alt='star' />
							<p>{numberStar}</p>
						</span>
						<span>
							<img src={viewIcon} alt='view' />
							<p>{numberView}</p>
						</span>
					</div>
				</div>

				<p>{projectDes}</p>

				<div className='project-card__content-tech'>
					{technologies.map((tech) => (
						<img key={tech.id} src={technologiesMapped?.[tech.name]} alt='tech' />
					))}
				</div>

				<div className='project-card__content-footer'>
					<div>
						<img src='/ShoppingCard/date.png' alt='' />
						<p>
							{startDate} - {finishDate}
						</p>
					</div>
					<a href='#'>
						<p>MORE</p>
						<img src='/MoreButton/moreButton.png' alt='' />
					</a>
				</div>
			</div>
		</div>
	);
}
export default Projectcard;
