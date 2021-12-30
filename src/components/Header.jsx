import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">THEATRE.COM</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Theatre Shows
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">English Theatre Shows</a>
                                <a className="dropdown-item" href="#">Hindi Theatre Shows</a>
                                <a className="dropdown-item" href="#">Urdu Theatre Shows</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Auditorium </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Theatre Speak</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Artist Gallery </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Upcoming Shows</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}
