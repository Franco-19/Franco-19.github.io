import React, { Component } from 'react';

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
                    <nav>
                        <ul>
                            <li>
                                Crea tu propio linktree
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
