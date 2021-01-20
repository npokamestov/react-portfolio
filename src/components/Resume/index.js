import React from 'react';
import './style.css'

const Resume = () => {

    return (
        <section className='my-5 text-background'>
            <h1 data-testid='h1tag'>Proficiencies</h1>
            <div>
                <h4>Front End</h4>
                <ul>
                    <li>HTML 5</li>
                    <li>CSS
                        <ul>
                            <li>Bootstrap</li>
                        </ul>
                    </li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Web API's</li>
                    <li>Handlebars</li>
                </ul>
            </div>
            <div>
                <h4>Back End</h4>
                <ul>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>O.O.P.</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>M.V.C.</li>
                    <li>MongoDB & Mongoose</li>
                    <li>P.W.A.</li>
                    <li>React</li>
                </ul>
            </div>
                <p>Download my <a href={require(`../../assets/nikita-pokamestov-resume.pdf`).default}>Resume</a></p>
        </section>
    )
}

export default Resume;