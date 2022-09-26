import React, {useState} from 'react';
import {Link} from "react-router-dom";

function TopNavBar(props) {

    const [isShow, setShow] = useState(false);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: "inherit"}}>
                <div id="nav-data">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default TopNavBar;