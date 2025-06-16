import membersData from "../../../mock_datas/member_page_mock_date.json";
import './MemberCard.css';
import StarIcon from '../../../public/star/star.png';
import ViewIcon from '../../../public/view/view.png';
import { technologiesMapped } from "../../consts/technologiesMapped";

function MemberCard({avt,role,name,job,status,numberStars,numberView,projects,technologies}){
    return (
        <div className="memberscard">
            <div className="memberscard-rightcontent">
                <img src={avt} alt="avatar" />
                <div className="memberscard-rightcontent-react">
                    {/* star */}
                    <div className="memberscard-rightcontent-react-star">
                        <img src={StarIcon} alt="star" />
                        <p>{numberStars}</p>
                    </div>
                    {/* view */}
                    <div className="memberscard-rightcontent-react-view">
                        <img src={ViewIcon} alt="view" />
                        <p>{numberView}</p>
                    </div>
                </div>
                <div className="memberscard-rightcontent-technologies">
                    <p>Công nghệ thành thạo</p>
                    <div>
                        {technologies.map((tech) => {
                            return (
                                <img key={tech.id} src={technologiesMapped?.[tech.name]} alt="tech" /> 
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="memberscard-leftcontent">
                <p>{role}</p>
                <p>{name}</p>
                <p>{status}</p>
                <p>{job}</p>
                <p>Dự án: {projects} <span>(Đã tham gia)</span></p>
                <a href="#">
                    <p>MORE</p>
                    <img src="/MoreButton/moreButton.png" alt="more" />
                </a>
            </div>
        </div>
    );
}

export default MemberCard;