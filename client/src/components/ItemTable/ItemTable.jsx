import './ItemTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useMemo } from 'react';
import { calcPagination } from '../../styles/utils/getPagination';
import DropDownIcon from '/svg/DropDown.svg';
import SearchIcon from '/svg/Search.svg';


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

	const [selection1, setSelection1] = useState(filterFields[0]?.placeholder || "...");
	const [selection2, setSelection2] = useState(filterFields[1]?.placeholder || "...");
	const handleSelection1Change = (e) => {
		setSelection1(e.target.value);
	};

	const handleSelection2Change = (e) => {
		setSelection2(e.target.value);
	};
	return (
		<div className="itemTable_root">
			<h1 className="itemTable_title">{title}</h1>
			<div className="itemTable_filterContainer">
				<div className="itemTable_filterItem">
					<h2>{selection1}</h2>
					<img src={DropDownIcon} alt="Dropdown Icon" className="dropdown-icon" />
					<select onChange={handleSelection1Change} className="itemTable_select">
						<option value={filterFields[0]?.placeholder}>{filterFields[0]?.placeholder}</option>
						{filterFields[0]?.options?.map((option, index) => (
							<option key={`${option.value}-${option.label}-${index}`} value={option.value}>{option.label}</option>
						))}
					</select>
				</div>
				<div className="itemTable_filterItem">
					<h2>{selection2}</h2>
					<img src={DropDownIcon} alt="Dropdown Icon" className="dropdown-icon" />
					<select onChange={handleSelection2Change} className="itemTable_select">
						<option value={filterFields[1]?.placeholder}>{filterFields[1]?.placeholder}</option>
						{filterFields[1]?.options?.map((option, index) => (
							<option key={`${option.value}-${option.label}-${index}`} value={option.value}>{option.label}</option>
						))}
					</select>
				</div>
				<div className="itemTable_filterItem">
					<img src={SearchIcon} alt="Search Icon" className="search-icon" />
					<input type="text" className="itemTable_searchInput" placeholder="Nhập từ khóa cần tìm kiếm" />
				</div>
			</div>
			<div className="itemTable_cart">
				<ul className="itemTable_list" style={{ display: 'flex', flexWrap: 'wrap' }}>
					{currentItems.map((item, index) => (
						<li
							className="itemTable_card"
							key={index}
							style={{ width: `calc( (100% - ${20 * (itemsPerRow - 1)}px) / ${itemsPerRow})` }}
						>
							{item}
						</li>
					))}
				</ul>
				{pagination.totalPage > 1 && (
					<div className="itemTable_pagination">
						<button
							className="itemTable_paginationButton itemTable_paginationButton-prev"
							onClick={handlePrevPage}
							disabled={page === 1}
						>
							<FontAwesomeIcon icon={faAnglesLeft} />
						</button>
						{pageNumbers.map((p, idx) =>
							p === '...' ? (
								<span className="pagination-dots" key={idx}>
									...
								</span>
							) : (
								<button
									key={p}
									className={`itemTable_paginationButton itemTable_pagination-number ${isActivePage(p)}`}
									onClick={() => handleChangePage(p)}
								>
									{p}
								</button>
							)
						)}
						<button
							className="itemTable_paginationButton itemTable_paginationButton-next"
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
