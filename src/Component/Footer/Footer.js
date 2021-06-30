import React, { Component } from 'react'
import './Footer.css'
import footerlogo from '../Images/footerlogo.png';
import twitter from '../Images/twitter.png'
import instagram from '../Images/instagram.png';
import linkedin from '../Images/linkedin.png'
import copyright from '../Images/copyright.png'
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <div className="footerMain">
                <div className="Footer">
                    <div className="FooterMain">
                        <div className="FooterMainChild">
                            <div className="FooterContent">
                                <div className="FooterContentLeft">
                                    <div className="FooterR">
                                        <div className="FooterH1">
                                            <div className="FooterHeading1"><img src={footerlogo} alt="logo" /></div>
                                        </div>
                                        <div className="FooterText">By The Youth, For The Youth!
                                        </div>
                                        <div className="FooterLinks">
                                            | FOLLOW US
                                        </div>
                                        <div className="icons">
                                            <img src={twitter} alt="twitter" />
                                            <img src={instagram} alt="instagram" />
                                            <img src={linkedin} alt="linkedin" />
                                        </div>
                                    </div>
                                </div>
                                <div className="FooterContentRight">
                                    <div className="FooterQuicklinks">
                                        <div className="FooterQuicklinksHeading">QUICK LINKS</div>
                                        <div className="FooterQuicklinksHeadingLine"></div>
                                        <ul className="FooteHomeLinks" type='none'>
                                            <li>
                                                <Link to="/" className="link">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/Join The Movement" className="link">Join The Movement</Link>
                                            </li>
                                            <li>
                                                <Link to="/Blogs" className="link">Blogs</Link>
                                            </li>
                                            <li>
                                                <Link to="/Contact Us" className="link">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/Donate" className="link">Donate</Link>
                                            </li>
                                            <li>
                                                <Link to="/Terms and Conditions" className="link">Terms and Conditions</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="FooterContact">
                                        <div className="FooterContactHeading">CONTACT INFO</div>
                                        <div className="FooterContactHeadingLine"></div>
                                        <div className="FootercontactDetails">
                                            <div className="FooterPhoneNumber">
                                                <div className="FooterPhoneNumberList">
                                                    <div>+91-8xxxxxxx59</div>
                                                    <div>+91-4xxxxxxx99</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="FooterGmail">
                                            <div className="GmailId">abc@gmail.com</div>
                                        </div>
                                        <div className="FooterAddress">
                                            <div className="AddressInfo">
                                                <div>
                                                    <div>151 2nd floor nova city</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Footerbottom">
                                All Rights Reserved by   <img src={copyright} alt="copyright" /> Think Of It Foundation 2020
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
