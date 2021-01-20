import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import About from '../About';
import ContactForm from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

import { capitalizeFirstLetter } from '../../utils/helpers';

const Header = () => {

    const [currentPage, handlePageChange] = useState('About Me');

    useEffect(() => {
            document.title = capitalizeFirstLetter(currentPage);
        }, [currentPage]);
    
    const renderPage = () => {
        switch(currentPage) {
        case "About Me":
            return<About />
        case'Contact Me':
            return<ContactForm />
        case 'Portfolio':
            return<Portfolio />
        case 'Resume':
            return<Resume />
        default:
            return<About />
        }
    };

    return (
        <div>
            <header className="App-header hero">
                <h1>Nikita Pokamestov</h1>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            <div className='main'>
                {renderPage(currentPage)}
            </div>
        </div>
    )
};

export default Header;