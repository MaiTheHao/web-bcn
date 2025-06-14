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
    const cols = 2;
    const rows = 2;
    return <ItemTable title='THÀNH VIÊN' items={memberCards} itemsPerRow={cols} rowsPerPage={rows} />;
}

export default Members;