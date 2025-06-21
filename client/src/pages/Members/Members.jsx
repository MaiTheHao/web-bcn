import React from "react";
import ItemTable from "../../components/ItemTable/ItemTable.jsx";
import MemberCard from '../../components/MemberCard/MemberCard';
import membersData from "../../../mock_datas/member_page_mock_date.json";

function Members() {
    const memberCards = membersData.map((member) => (
        <MemberCard
            key={member.id}
            avt={member.avt}
            role={member.role}
            name={member.name}
            job={member.job}
            status={member.status}
            numberStars={member.star}
            numberView={member.view}
            projects={member.projects}
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
    />;
}

export default Members;