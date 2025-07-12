import React, { useState, useEffect } from 'react';
import ItemTable from '../../components/ItemTable/ItemTable.jsx';
import MemberCard from '../../components/Card/MemberCard/MemberCard.jsx';
import { getAllUsers } from '../../services/api';
import { transformUserToMemberCard } from '../../services/transform';

function Members() {
  const [userCardsData, setUserCardsData] = useState([]);
  useEffect(() => {
    // update props cho member card
    getAllUsers()
      .then((userData) => {
        const transformUserCards = userData.map((user) => {
          return transformUserToMemberCard(user);
        })
        
        const memberCards = transformUserCards.map((userCard) => {
          return (
            <MemberCard
              key={userCard.id}
              avt={userCard.avt}
              role={userCard.role}
              id={userCard.id}
              name={userCard.name}
              jobTitle={userCard.jobTitle}
              status={userCard.status}
              starCount={userCard.starCount}
              viewCount={userCard.viewCount}
              projectCount={userCard.projectCount}
              technologies={userCard.technologies}
            />
          ) 
        })
        setUserCardsData(memberCards.filter(Boolean));
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const filterFields = [
    {
      fieldName: 'skill',
      placeholder: 'Chọn kỹ năng',
      options: [
        { label: 'Lập trình', value: 'Lập trình' },
        { label: 'Thiết kế', value: 'Thiết kế' },
        { label: 'Quản lý dự án', value: 'Quản lý dự án' },
      ]
    },
    {
      fieldName: 'specialization',
      placeholder: 'Chọn chuyên môn',
      options: [
        { label: 'Web Developer', value: 'Web Developer' },
        { label: 'Mobile / App Developer', value: 'Mobile / App Developer' },
        { label: 'UI / UX Designer', value: 'UI / UX Designer' },
        { label: 'Project Manager', value: 'Project Manager' },
      ]
    }
  ];
  const cols = 2;
  const rows = 2;
  return <ItemTable

    title='THÀNH VIÊN'
    items={userCardsData}
    itemsPerRow={cols}
    rowsPerPage={rows}
    filterFields={filterFields}
    switchPage={'projects'}
  />;
}

export default Members;
