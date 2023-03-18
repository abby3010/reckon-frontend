/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Navbar() {
    return (
        <header className="dark-bb">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="exchange-dark.html">FungTrix</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerMenu"
                    aria-controls="headerMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="icon ion-md-menu"></i>
                </button>

                <div className="collapse navbar-collapse" id="headerMenu">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Exchange
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link " href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Markets
                            </a>
            
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown header-img-icon">
                            <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <img src="/assets/img/avatar.svg" alt="avatar" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
