/**
 * @function calcPagination
 * @description Tính toán phân trang
 * @param {number} page - idx trang hiện tại
 * @param {number} limit - Số lượng phần tử trên mỗi trang
 * @param {number} total - Tổng số phần tử
 * @returns {object} Thông tin phân trang page, limit, total, totalPage
 */
export function calcPagination(page, limit, total) {
	const totalPage = Math.ceil(total / limit);
	const pagination = {
		page: page,
		limit: limit,
		total: total,
		totalPage: totalPage,
	};

	return pagination;
}



