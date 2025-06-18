import { paginate } from '../../utils';

const base_url = '/mock_datas/projects_collection.data.json';

/**
 * Lấy tất cả dự án
 * @returns {Promise<Array>} Danh sách tất cả dự án
 */
export const getAllProjects = async () => {
	const response = await fetch(base_url);
	const data = await response.json();
	return data;
};

/**
 * Lấy dự án theo ID
 * @param {string} id
 * @returns {Promise<Object|null>} Dự án nếu tìm thấy, ngược lại null
 */
export const getProjectById = async (id) => {
	const response = await fetch(base_url);
	const data = await response.json();
	const project = data.find((project) => project._id === id.trim());
	return project || null;
};

/**
 * Lấy danh sách dự án theo thành viên
 * @param {string} userId
 * @returns {Promise<Array>} Danh sách dự án có userId trong team_members
 */
export const getProjectsByUserId = async (userId) => {
	const response = await fetch(base_url);
	const data = await response.json();
	return data.filter((project) => project.team_members.includes(userId.trim()));
};

/**
 * Hàm để lấy danh sách dự án với phân trang
 * @param {number} page - Trang hiện tại
 * @param {number} limit - Số lượng dự án trên mỗi trang
 * @returns {Promise<Object>} Trả về đối tượng chứa danh sách dự án và tổng số dự án
 */
export const getProjectsWithPagination = async (page, limit) => {
	const response = await fetch(base_url);
	const data = await response.json();
	const { items, pagination } = paginate(data, limit, page);
	return {
		projects: items,
		pagination,
	};
};
