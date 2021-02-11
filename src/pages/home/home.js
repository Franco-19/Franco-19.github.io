import React, { Component } from 'react';

// Components
import User from './components/user/user.js';
import Links from './components/links/Link';

//Styles
import './home-styles.css';
// import './components/user/user-styles.css'
// import './components/links/link-styles.css'

class home extends Component {
    render() {
        return (
            <div className="principal_container">
                <User name="Franco Jara" img="https://rickandmortyapi.com/api/character/avatar/399.jpeg"/>
                <Links/>
            </div>
        );
    }
}

export default home;
