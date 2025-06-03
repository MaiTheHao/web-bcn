import './ProjectCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faArrowRight } from '@fortawesome/free-solid-svg-icons';
function ProjectCart() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <div className="project">
                <h1 className='title'>Project</h1>
                <div className='project-cart'>
                    <ul className='project-list'>
                        {
                            items.map((e, idx) => (
                                <li className='project-card' key={idx}></li>
                            ))
                        }
                    </ul>
                    <div className='pagination'>
                        <button className='pagination-button pagination-button-prev'>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button className='pagination-button pagination-number active'>1</button>
                        <button className='pagination-button pagination-number'>2</button>
                        <button className='pagination-button pagination-number'>3</button>
                        <button className='pagination-button pagination-dots'>...</button>
                        <button className='pagination-button pagination-button-next'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectCart;