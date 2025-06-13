import React from "react";
import membersData from "../../../mock_datas/member_page_mock_date.json";
import MembersTable from "../../components/MembersTable/MembersTable.jsx";

function Members(){
    return <MembersTable title='THÀNH VIÊN' members={membersData}/>
}
export default Members;