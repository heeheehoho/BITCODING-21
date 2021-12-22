import React from 'react';
import './pocket.css';
import {Link} from 'react-router-dom';

function PocketPage() {
    return (
        <div>
            
            <div className="main-title" ><a href ="">DoTory 🐿</a></div>
            <nav>
                <ul className="nav-container">
                    <li className = "nav-item"><Link to="/">Checklist</Link></li>
                    <li className = "nav-item"><Link to="/">Diary</Link></li>
                    <li className = "nav-item"><Link to="/pocket-page">Pocket</Link></li>
                </ul>
            </nav>

            <h1>pocket page</h1>
        </div>
    );
}

export default PocketPage;