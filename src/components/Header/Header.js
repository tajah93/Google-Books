import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>

        // <div className= "Header">
        // <h2>Google Books</h2>
        // <h3>Search</h3>
        // <h3>Saved</h3>
        // </div>
    );
}

export default Header; 