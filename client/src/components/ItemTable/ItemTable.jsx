import './ItemTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useMemo } from 'react';
import { calcPagination } from '../../styles/utils/getPagination';
import Projectcard from '../ProjectCard/ProjectCard';

const LIMIT = 8;

function ItemTable({ title = 'Project', projects = [] }) {
	const [page, setPage] = useState(1);

	const pagination = useMemo(() => calcPagination(page, LIMIT, projects.length), [page, projects.length]);

	const handleChangePage = (newPage) => {
		if (newPage >= 1 && newPage <= pagination.totalPage) {
			setPage(newPage);
		}
	};

	const handleNextPage = () => handleChangePage(page + 1);
	const handlePrevPage = () => handleChangePage(page - 1);

	const isActivePage = (p) => (page === p ? 'active' : '');

	const startIndex = (page - 1) * LIMIT;
	const endIndex = startIndex + LIMIT;
	const currentProjects = projects.slice(startIndex, endIndex);

	const getPageNumbers = () => {
		const pages = [];
		const { totalPage } = pagination;
		if (totalPage <= 5) {
			for (let i = 1; i <= totalPage; i++) pages.push(i);
		} else {
			if (page <= 3) {
				pages.push(1, 2, 3, 4, '...', totalPage);
			} else if (page >= totalPage - 2) {
				pages.push(1, '...', totalPage - 3, totalPage - 2, totalPage - 1, totalPage);
			} else {
				pages.push(1, '...', page - 1, page, page + 1, '...', totalPage);
			}
		}
		return pages;
	};

	const pageNumbers = getPageNumbers();

	return (
		<div className='project'>
			<h1 className='title'>{title}</h1>
			<div className='project-cart'>
				<ul className='project-list'>
					{currentProjects.map((project) => (
						<li className='project-card' key={project.id}>
							<Projectcard
								thumbnail={project.thumbnail}
								projectName={project.projectName}
								projectDes={project.projectDes}
								numberStar={project.numberStar}
								numberView={project.numberView}
								startDate={project.startDate}
								finishDate={project.finishDate}
								technologies={project.technologies}
							/>
						</li>
					))}
				</ul>
				{pagination.totalPage > 1 && (
					<div className='pagination'>
						<button
							className='pagination-button pagination-button-prev'
							onClick={handlePrevPage}
							disabled={page === 1}
						>
							<FontAwesomeIcon icon={faAnglesLeft} />
						</button>
						{pageNumbers.map((p, idx) =>
							p === '...' ? (
								<span className='pagination-dots' key={idx}>
									...
								</span>
							) : (
								<button
									key={p}
									className={`pagination-button pagination-number ${isActivePage(p)}`}
									onClick={() => handleChangePage(p)}
								>
									{p}
								</button>
							)
						)}
						<button
							className='pagination-button pagination-button-next'
							onClick={handleNextPage}
							disabled={page === pagination.totalPage}
						>
							<FontAwesomeIcon icon={faAnglesRight} />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default ItemTable;
