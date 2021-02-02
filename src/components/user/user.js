import React, { Component } from 'react';
import './user-styles.css';
import user from '../../assets/user_image.jpg';

class User extends Component {
    render() {
        return (
            <div className="user">
                <div className="user__img">
                    <img className="user__img--img" src={user} alt="user profile" />
                </div>
                <div className="user__name">
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }
}

export default User;