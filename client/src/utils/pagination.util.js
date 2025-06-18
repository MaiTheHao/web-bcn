/**
 * Hàm tính toán thiết lập pagination
 * @param {*} totalItems
 * @param {*} itemsPerPage
 * @param {*} currentPage
 * @returns {Object} Trả về đối tượng chứa thông tin phân trang
 * - totalItems: Tổng số mục
 * - itemsPerPage: Số mục trên mỗi trang
 * - currentPage: Trang hiện tại
 * - totalPage: Tổng số trang
 * - startIndex: Chỉ số bắt đầu của mục trên trang hiện tại
 * - endIndex: Chỉ số kết thúc của mục trên trang hiện tại
 */
export const calculatePagination = (totalItems, itemsPerPage, currentPage) => {
	const totalPage = Math.ceil(totalItems / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

	return {
		totalItems,
		itemsPerPage,
		currentPage,
		totalPage,
		startIndex,
		endIndex,
	};
};

/**
 * Hàm phân trang cho một mảng các mục
 * @param {Array} items - Mảng các mục cần phân trang
 * @param {number} itemsPerPage - Số mục trên mỗi trang
 * @param {number} currentPage - Trang hiện tại
 * @returns {Object} Trả về đối tượng chứa các mục trên trang hiện tại và thông tin phân trang
 * - items: Mảng các mục trên trang hiện tại
 * - pagination: Đối tượng chứa thông tin phân trang
 */
export const paginate = (items, itemsPerPage, currentPage) => {
	const totalItems = items.length;
	const paginationConfig = calculatePagination(totalItems, itemsPerPage, currentPage);

	return {
		items: items.slice(paginationConfig.startIndex, paginationConfig.endIndex),
		pagination: paginationConfig,
	};
};
