import './ItemTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useMemo, useEffect } from 'react';
import { calcPagination } from '../../styles/utils/getPagination';
import DropDownIcon from '/svg/DropDown.svg';
import SearchIcon from '/svg/Search.svg';
import Select from '../Select/Select';

function ItemTable({
	title,
	items,
	itemsPerRow = 2,
	rowsPerPage = 2,
	filterFields = []
}) {
	const LIMIT = itemsPerRow * rowsPerPage;
	const [page, setPage] = useState(1);

	const pagination = useMemo(() => calcPagination(page, LIMIT, items.length), [page, items.length, LIMIT]);

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
	const currentItems = items.slice(startIndex, endIndex);

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

	const [filterCriteria, setFilterCriteria] = useState([]);
	const handle = (fieldName, value) => {
		const newFilterState = filterCriteria.filter((c) => c.fieldName !== fieldName);
		newFilterState.push({ fieldName, value });
		setFilterCriteria(newFilterState);
	};



	return (
		<div className="item-table">
			<h1 className="item-table-title">{title}</h1>
			<div className="item-table-filter-container">
				{filterFields.map((field, idx) => (
					<div className="item-table-filter-item" key={field.fieldName}>
						<Select
							options={field.options}
							placeholder={field.placeholder}
							onSelect={(value) => handle(field.fieldName, value)}
							selectedValue={filterCriteria.find(f => f.fieldName === field.fieldName)?.value || null}
							customClassName={{ select: 'select-filter-item', trigger: 'item-table-select' }}
						/>
					</div>
				))}
				<img src={SearchIcon} alt="Search Icon"/>
				<div className="item-table-filter-item-search">
					<img src={SearchIcon} alt="Search Icon" className="item-table-search-icon" />
					<input type="text" className="item-table-search-input" placeholder="Nhập từ khóa cần tìm kiếm" />
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00838f">
					<path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/>
				</svg>
			</div>
			<div className="item-table-cart">
				<ul className="item-table-list">
					{currentItems.map((item, index) => (
						<li
							className="item-table-card"
							key={index}
						>
							{item}
						</li>
					))}
				</ul>
				{pagination.totalPage > 1 && (
					<div className="item-table-pagination">
						<button
							className="item-table-pagination-button item-table-pagination-button-prev"
							onClick={handlePrevPage}
							disabled={page === 1}
						>
							<FontAwesomeIcon icon={faAnglesLeft} />
						</button>
						{pageNumbers.map((p, idx) =>
							p === '...' ? (
								<span className="item-table-pagination-dots" key={idx}>
									...
								</span>
							) : (
								<button
									key={p}
									className={`item-table-pagination-button item-table-pagination-number ${isActivePage(p)}`}
									onClick={() => handleChangePage(p)}
								>
									{p}
								</button>
							)
						)}
						<button
							className="item-table-pagination-button item-table-pagination-button-next"
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
