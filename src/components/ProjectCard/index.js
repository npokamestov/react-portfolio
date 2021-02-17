import React from 'react';
import './style.css'

const ProjectCard = (props) => {

    return (

        <div className={`tile image ${props.image}`}>
            <div className='middle'>
                <ul className='text'>
                    <li>
                        <h5>
                            <a href={props.url}>
                                {props.name}
                            </a>
                        </h5>
                    </li>
                    <li className='description-margin'>
                        {props.description}
                    </li>
                    <li>
                        <a href={props.github}>
                            <span><i className='fab fa-github fa-3x'></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard;