import React from 'react';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Google Books</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Saved</a>
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