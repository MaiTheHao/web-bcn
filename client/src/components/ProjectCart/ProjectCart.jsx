import './ProjectCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { calcPagination } from '../../styles/utils/getPagination';

const LIMIT = 8;
const MOCK_TOTAL = 100; // Giả sử tổng số phần tử là 100
function ProjectCart() {
	const [pagination, setPagination] = useState(calcPagination(1, LIMIT, MOCK_TOTAL));
	const handleChangePage = (page) => {
		if (page >= 1 && page <= pagination.totalPage) {
			setPagination(calcPagination(page, LIMIT, MOCK_TOTAL));
		}
	};

	const handleNextPage = () => {
		handleChangePage(pagination.page + 1);
	};

	const handlePrevPage = () => {
		handleChangePage(pagination.page - 1);
	};

	const isActivePage = (page) => {
		return pagination.page === page ? 'active' : '';
	};

	const items = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<>
			<div className='project'>
				<h1 className='title'>Project</h1>
				<div className='project-cart'>
					<ul className='project-list'>
						{items.map((e, idx) => (
							<li className='project-card' key={idx}></li>
						))}
					</ul>
					<div className='pagination'>
						<button className='pagination-button pagination-button-prev' onClick={handlePrevPage}>
							<FontAwesomeIcon icon={faAnglesLeft} />
						</button>
						<button
							className={`pagination-button pagination-number ${isActivePage(1)}`}
							onClick={() => handleChangePage(1)}
						>
							1
						</button>

						{/* <button className={`pagination-button pagination-number ${isActivePage(2) && 'active'}`}>
							2
						</button>
						<button className={`pagination-button pagination-number ${isActivePage(3) && 'active'}`}>
							3
						</button> */}

						<span className='pagination-dots'>...</span>
						<button
							className={`pagination-button pagination-number ${isActivePage(pagination.totalPage)}`}
							onClick={() => handleChangePage(pagination.totalPage)}
						>
							{pagination.totalPage}
						</button>
						<button className='pagination-button pagination-button-next' onClick={handleNextPage}>
							<FontAwesomeIcon icon={faAnglesRight} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

/*
icon pagination gì kì dị ba, không giống design tí nào :_)))
*/

export default ProjectCart;
