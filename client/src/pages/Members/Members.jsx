import React, { useState, useEffect } from 'react';
import ItemTable from '../../components/ItemTable/ItemTable.jsx';
import MemberCard from '../../components/Card/MemberCard/MemberCard.jsx';
import { getAllUsers } from '../../services/api';
import { transformUserToMemberCard } from '../../services/transform';
import membersData from '../../../mock_datas/users_collection.data.json';

function Members() {
    const memberCards = membersData.map((member) => (
        <MemberCard
            key={member._id}
            avt={member.profile.avt}
            role={member.role}
            id={member._id}
            name={member.profile.name}
            job={member.profile.job}
            status={member.profile.status}
            starCount={member.statistics.star}
            viewCount={member.statistics.view}
            projectCount={member.projects.length}
            technologies={member.technologies}
        />
    ));
    const filterFields = [
      {
      fieldName: 'skill',
      placeholder: 'Chọn kỹ năng',
      options: [
        { label: 'Lập trình', value: 'Lập trình' },
        { label: 'Thiết kế', value: 'Thiết kế' },
        { label: 'Quản lý dự án', value: 'Quản lý dự án' },
        { label: 'Phát triển web', value: 'Phát triển web' },
      ]
      },
      {
      fieldName: 'specialization',
      placeholder: 'Chọn chuyên môn',
      options: [
        { label: 'Kinh nghiệm', value: 'Kinh nghiệm' },
        { label: 'Thời gian', value: 'Thời gian' },
        { label: 'Độ phổ biến', value: 'Độ phổ biến' },
        { label: 'Độ khó', value: 'Độ khó' },
      ]
      }
    ];
    const cols = 2;
    const rows = 2;
    return <ItemTable

        title='THÀNH VIÊN'
        items={memberCards}
        itemsPerRow={cols}
        rowsPerPage={rows}
        filterFields={filterFields}
        switchPage={'projects'}
    />;
}

export default Members;
