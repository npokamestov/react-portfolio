import React from 'react';
import ProjectCard from '../ProjectCard';
import Wrapper from '../Wrapper';

import projects from '../../projects.json'

const Portfolio = () => {

    return (
        <section className='my-5'>
            <div>
                <h1>Portfolio</h1>
                <p>My Recent Projects</p>
            </div>
            <Wrapper>
                {projects.map(project => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        url={project.url}
                        github={project.github}
                        image={project.image}
                    />
                ))}
            </Wrapper>
        </section>
    );
};

export default Portfolio;