import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/azparrotthead" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://www.linkedin.com/in/patrickjcook" className="icon fa-linkedin"><span className="label">Github</span></a></li>
                        {/* <li><a href="https://www.instagram.com/artteryxx_wdd/" className="icon fa-instagram"><span className="label">Dribbble</span></a></li> */}
                        <li><a href="https://www.behance.net/pjcook20e61" className="icon fa-behance"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; art'Teryxx_WDD</li><li><a href="http://artteryxx.dev">art'Teryxx_WDD</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
