import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import TOIlogo from '../Images/TOIlogo.gif';
import man from '../Images/man.png';
export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="navbarmain">
                <div className="LOGO">
                    <img src={TOIlogo} alt="logo" />
                </div>
                <ul className="NAVLINKS" type='none'>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/Join The Movement" className="link">Join The Movement</Link></li>
                    <li><Link to="/Blog" className="link">Blogs</Link></li>
                    <li><Link to="/ContactUs" className="link">Contact us</Link></li>
                    <li><Link to="/Donate" className="link"><h3>DONATE</h3></Link></li>   
                </ul>
                <div className="User">
                    <img src={man} alt="user" />
                </div>
                {/*<div className="section">
                    <Link className="link" to="/">Home</Link>
                </div>
                <div className="section">
                    <Link to="/LogIn">LogIn</Link>
        </div>*/}
            </div>
        )
    }
}

export default Navbar
