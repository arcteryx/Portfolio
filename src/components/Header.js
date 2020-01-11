import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/paintedHeadShot1.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/" className="image avatar"><img src={avatar} alt="Home" /></a>
                    <h3>UX | Web Design | Web Development</h3>
                    <h3>Creative Thinking :: Focused on Results</h3>
                </div>
                <ul className="actions">
                    <li><a href="#three" className="button2">Hire Me</a></li>
                </ul>
                <Footer />
            </header>
        )
    }
}

export default Header
