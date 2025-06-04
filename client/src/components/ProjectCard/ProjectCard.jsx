import React from 'react';
import './ProjectCard.css';
import starIcon from '../../../public/ShoppingCard/star.png';
import viewIcon from '../../../public/ShoppingCard/view.png';

function Projectcard({
    thumbnail,
    projectName,
    projectDes,
    numberStar,
    numberView, 
    startDate,
    finishDate,
    technologies}){ 
        
    return (
        <div id="project-card">
            <img src={thumbnail} alt="image" />
            <div className="project-card__content">
                
                <div className="project-card__content-upper">
                    <h1>{projectName}</h1>
                    <div className="project-card__content-upper-react">
                        <span>
                            <img src={starIcon} alt="star" />
                            <p>{numberStar}</p>
                        </span>
                        <span>
                            <img src={viewIcon} alt="view" />
                            <p>{numberView}</p>
                        </span>
                    </div>
                </div>
                
                <p>{projectDes}</p>
                
                <div className="project-card__content-tech">
                    {technologies.map((element, index) => (
                        <img key={index} src={`../../../public/ShoppingCard/${element}.png`} alt="tech" />
                    ))}
                </div>
                
                <div className='project-card__content-footer'>
                    <div>
                        <img src="../../../public/ShoppingCard/date.png" alt="" />
                        <p>{startDate} - {finishDate}</p>
                    </div>
                    <a href="#">
                        <p>MORE</p>
                        <img src="../../../public/ShoppingCard/moreButton.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Projectcard;