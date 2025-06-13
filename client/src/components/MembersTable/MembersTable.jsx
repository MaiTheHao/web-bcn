import React from "react";
import MemberCard  from "../MemberCard/MemberCard.jsx";
import './MembersTable.css'

const LIMIT = 8;

function MembersTable({title, members = []}){
    return (
        <div className="members">
            <h1 className="members-title">{title}</h1>
            <div className="members-cart">
                {members.map((element) => {
                    return <MemberCard 
                        key={element.id} 
                        avt={element.avt}
                        role={element.role}
                        name={element.name}
                        job={element.job}
                        status={element.status}
                        numberStars={element.star}
                        numberView={element.view}
                        projects={element.projects}
                        technologies={element.technologies}
                    />
                })}
            </div>
        </div>
    )
}
export default MembersTable;