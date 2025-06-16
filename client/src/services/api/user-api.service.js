import { paginate } from '../../utils';
const base_url = '/mock_datas/users_collection.data.json';

/**
 * Lấy tất cả người dùng
 * @returns {Promise<Array>} Trả về danh sách tất cả người dùng
 */
export const getAllUsers = async () => {
	const response = await fetch(base_url);
	const data = await response.json();
	return data;
};

/**
 * Hàm để lấy thông tin người dùng theo ID
 * @note Nếu có server thì kết quả sẽ là user với id tương ứng, ở đây là giả lập nên sẽ trả về tất cả user và sẽ duyệt id
 * @param {string} id
 * @returns {Promise<Object|null>} Trả về đối tượng người dùng nếu tìm thấy, ngược lại trả về null
 */
export const getUserById = async (id) => {
	const response = await fetch(base_url);
	const data = await response.json();
	const user = data.find((user) => user._id === id.trim());
	return user || null;
};

/**
 * Hàm để lấy thông tin người dùng theo email
 * @note Nếu có server thì kết quả sẽ là user với email tương ứng, ở đây là giả lập nên sẽ trả về tất cả user và sẽ duyệt email
 * @param {string} email
 * @returns {Promise<Object|null>} Trả về đối tượng người dùng nếu tìm thấy, ngược lại trả về null
 */
export const getUserByEmail = async (email) => {
	const response = await fetch(base_url);
	const data = await response.json();
	const user = data.find((user) => user.email === email.trim());
	return user || null;
};

/**
 * Hàm để lấy danh sách người dùng với phân trang
 * @param {number} page - Trang hiện tại
 * @param {number} limit - Số lượng người dùng trên mỗi trang
 * @returns {Promise<Object>} Trả về đối tượng chứa danh sách người dùng và thông tin phân trang
 */
export const getUsersWithPagination = async (page, limit) => {
	const response = await fetch(base_url);
	const data = await response.json();
	const { items, pagination } = paginate(data, limit, page);
	return {
		users: items,
		pagination,
	};
};
