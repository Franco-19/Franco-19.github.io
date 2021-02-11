import React, { Component } from 'react';

import './link-styles.css';

class Link extends Component {
    render() {
        return (
            <div className="link-container">
                <ul className="link__list">
                    <a href="https://www.instagram.com/franco_jara122/"><li className="link__list--item">Instagram</li></a>
                    <a href="https://www.facebook.com/Fraanncohh/"><li className="link__list--item">Facebook</li></a>
                    <a href="https://github.com/Franco-19"><li className="link__list--item">Github</li></a>
                    <a href="https://www.linkedin.com/in/franco-jara-131a75199/"><li className="link__list--item">Linked.in</li></a>
                    <a href="https://google.com"><li className="link__list--item">Google</li></a>
                </ul>
            </div>
        );
    }
}

export default Link;
