import React from 'react';

function Navigation({ currentPage, handlePageChange }) {

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#aboutMe"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'navActive' : 'nav-link'}
                    >
                        About me
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'navActive' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'navActive' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#contact"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'navActive' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;