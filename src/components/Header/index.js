import React from 'react';
import Navigation from '../Navigation';

function Header({ currentPage, handlePageChange }) {

    return (
        <header className="flex-row px-1">
        <h2>
            <a data-testid="link" href="/">
                Brandon Conte
            </a>
        </h2>
        <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
        />
        </header>
    )
}

export default Header;