import React from 'react';

import './style.css'

const Footer = () => {

    return (
        <footer className='footer'>
            <nav>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a href='https://github.com/npokamestov'><span><i className='fab fa-github fa-3x'></i></span></a>
                    </li>

                    <li className='nav-item'>
                        <a href='https://www.linkedin.com/in/nikita-pokamestov-39b11b9a/'><span><i className='fab fa-linkedin fa-3x'></i></span></a>
                    </li>

                    <li className='nav-item'>
                        <a href='https://stackoverflow.com/users/13995510/nikita-pokamestov'><span><i className='fab fa-stack-overflow fa-3x'></i></span></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer