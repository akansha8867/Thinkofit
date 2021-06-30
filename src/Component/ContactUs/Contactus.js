import React, { Component } from 'react'
import './ContactUs.css'
import message from "../Images/message.png";

export class Contactus extends Component {
    render() {
        return (
            <div>
                <div className="ContactUs">
                    <div className="ContactUsTop">
                        <div className="ContactUsh1space"></div>
                        <div className="ContactUsHead">
                            <div className="ContactUsH1">Contact Us</div>
                        </div>
                        <div className="ContactUsLine">
                            <div className="ContactUsText">
                                <div className="ContactUsTextLine">
                                    Want to get in touch? We'd love to hear from you Here's how you can reach us.. kindy fill your details so that we can connect with you easily....
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ContactUsBox">
                        <div className="ContactUsBoxLeft">
                            <div className="ContactUsFormBox">
                                <div className="ContactUsFormMain">
                                    <form className="ContactUsForm">
                                        <div className="ContactUsFormDiv">
                                            <div className="ContactUsInput">
                                                <div className="ContactUsInputField">
                                                    <i class="fas fa-user"></i>
                                                    <input type="text" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="ContactUsInput">
                                                <div className="ContactUsInputField">
                                                    <i class="fas fa-phone-alt"></i>
                                                    <input type="number" placeholder="Your phone number" />
                                                </div>
                                            </div>
                                            <div className="ContactUsInput">
                                                <div className="ContactUsInputField">
                                                    <i class="fas fa-envelope"></i>
                                                    <input type="email" placeholder="Your E-Mail" />
                                                </div>
                                            </div>
                                            <div className="ContactUsInputMsg">
                                                <div className="ContactUsInputMsgField">
                                                    <div className="ContactUsInputMsgFieldIcon">
                                                        <i class="fas fa-comments-alt"></i>
                                                    </div>
                                                    <textarea placeholder="Your message"></textarea>
                                                </div>
                                            </div>
                                            <div className="ContactUsInputBtn">
                                                <div className="ContactUsInputBtnField">
                                                    <input type="submit" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="ContactUsBoxRight">
                            <div className="ContactUsImgBox">
                                <img src={message} alt="message" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contactus
