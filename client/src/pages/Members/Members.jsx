import React, { useState, useEffect } from 'react';
import ItemTable from '../../components/ItemTable/ItemTable.jsx';
import MemberCard from '../../components/Card/MemberCard/MemberCard.jsx';
import { getAllUsers } from '../../services/api';
import { transformUserToMemberCard } from '../../services/transform';

function Members() {
	const [members, setMembers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMembers = async () => {
			try {
				setLoading(true);
				const usersData = await getAllUsers(); // trả về All Data Users từ mock API 
				const transformedMembers = usersData.map(transformUserToMemberCard).filter(Boolean); // Biến user data -> members array -> lọc các giá trị null 
				setMembers(transformedMembers);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchMembers();
	}, []);

	if (loading) return <div>Tải thành viên...</div>;
	if (error) return <div>Lỗi khi tải thành viên: {error}</div>;
	
	const memberCards = members.map((member) => (
		<MemberCard
			key={member.id}
			{
				...member
			}
		/>
	));

	const cols = 2;
	const rows = 2;
	return <ItemTable title='THÀNH VIÊN' items={memberCards} itemsPerRow={cols} rowsPerPage={rows} />;
}

export default Members;
