/**
 * Chuyển đổi dữ liệu user từ API thành props cho MemberCard
 * @param {Object} user - Đối tượng user từ API
 * @returns {Object} Dữ liệu phù hợp cho MemberCard
 */
export function transformUserToMemberCard(user) {
	if (!user) return null;
	return {
		id: user._id,
		avatar: user.profile?.avt || '',
		role: user.role || '',
		name: user.profile?.name || '',
		jobTitle: user.profile?.job || '',
		status: user.profile?.status || '',
		starCount: user.statistics?.star ?? 0,
		viewCount: user.statistics?.view ?? 0,
		projectCount: Array.isArray(user.projects) ? user.projects.length : 0,
		technologies: Array.isArray(user.technologies) ? user.technologies.map((name, idx) => ({ id: idx, name })) : [],
	};
}

/**
 * Chuyển đổi dữ liệu project từ API thành props cho ProjectCard
 * @param {Object} project - Đối tượng project từ API
 * @returns {Object} Dữ liệu phù hợp cho ProjectCard
 */
export function transformProjectToProjectCard(project) {
	if (!project) return null;
	return {
		id: project._id,
		thumbnail: project.thumbnail || '',
		projectName: project.name || '',
		projectDes: project.description || '',
		numberStar: project.statistics?.stars ?? 0,
		numberView: project.statistics?.views ?? 0,
		startDate: project.dates?.start || '',
		finishDate: project.dates?.finish || '',
		technologies: Array.isArray(project.technologies) ? project.technologies.map((name, idx) => ({ id: idx, name })) : [],
	};
}
