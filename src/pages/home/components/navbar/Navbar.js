import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 

import './navbar-styles.css'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar_container">
                <div className="navbar_container__text">
                    <div>
                        Personal Linktree
                    </div>
                </div>
                <div className="navbar_container__categorias">
                    <nav className="navbar_container__categorias--nav">
                        <ul className="nav_list">
                            
                            <li className="nav_list__item">
                                Crea tu propio linktree
                            </li>
                            <li className="nav_list__item">
                                Ayuda
                            </li>
                            <li className="nav_list__item">
                                Mi linktree
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
