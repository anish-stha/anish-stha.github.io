import React from 'react';
import {Link} from "react-router-dom";

function TopNavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{background: "inherit"}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">About me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopNavBar;