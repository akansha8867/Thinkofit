import React, { Component } from 'react'
import './Home.css'
import youth from '../Images/youth.jpg'
import teach from '../Images/teach.jpg'
import dream from '../Images/dream.jpg'
import checklist from '../Images/checklist.png'
import e from '../Images/e.png'
import engagement from '../Images/engagement.png'
import evaluation from '../Images/evaluation.png'
import united from '../Images/united.png'
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="homeMain">
                <div className="HomeTop">
                    <div className="HomeTextImg">
                        <div className="HomeText">
                            <div className="h1">Re-Drive the World!</div>
                            <div className="text1">Make your city count..</div>
                            <div className="text2">Tune the present and let the fire of the youth in your city burst into a spectacular
                                flare by registering your city chapter.
                            </div>
                            <Link to="/Join The Movement"><button className="HomeRead">Get Started</button></Link>
                        </div>
                        <div className="HomeImg">
                            <img src={youth} alt="youth" />
                        </div>
                    </div>
                </div>
                <div className="contentSection">
                    <h1 class="headtext" id="text1">Let's VOLUNTEER</h1>
                    <h1 class="headtext" id="text2">Let's INTERN</h1>
                    <h1 className="data">with THINK OF IT</h1>
                </div>
                <div className="reachToTeach">
                    <div className="rttdata">
                        <div className="rttLeft">
                            <div className="rttLeftImg">
                                <div className="imgrtt"><img src={teach} alt="aim" /></div>
                            </div>
                        </div>
                        <div className="rttRight">
                            <div className="rttRightText">
                                <div className="rttRightTextH1">REACH TO TEACH..</div>
                                <div className="rttRightTextDisc">
                                    It’s high time that the suppressed talents get uplifted, education be skill-enriched and young crops get nurtured, aligned with their regular curriculum.
                                    TOI attempts to promote holistic development and provide formative skill-development modules and opportunities.
                                    Our fellows encourage the kids to:
                                    ● Focus on their interest domain.
                                    ● Experience hands-on and seek to provide them with the right exposure.
                                    ● Create a sustainable global impact.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="raiseaDream">
                    <div className="rad">
                        <div className="radLeft">
                            <div className="radLeftText">
                                <div className="radLeftTextH1">RAISE A DREAM..</div>
                                <div className="radLeftTextDisc">
                                    Join hands and help TOI to Raise a Dream of impoverished talented children by providing them the access to your platform/network and with continuous assistance from our fellows. Help TOI raise a million dreams.
                                    ● Mentor a dream.
                                    ● Help the talented to showcase their skills.
                                    ● Transit them with your platform, connect dreams with reality.
                                    ● Refine the talent with your guidance and support.
                                    ● Complete your social responsibility.
                                    ❖ TOI will be pleased to associate with NGO’s, corporates, artists, institutions,academies, start-ups, professionals, businesses and others.
                                </div>
                            </div>
                        </div>
                        <div className="radRight">
                            <div className="radRightImg">
                                <div className="imgrad"><img src={dream} alt="computer" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Process">
                    <div className="Enroll">
                        <div className="enrollimg"><img src={checklist} alt="enroll" /></div>
                        <div className="text1">ENROLL</div>
                        <div className="enrollText">Register yourself to be the greatest change-maker who contributes towards social responsibility.
                        </div>
                    </div>

                    <div className="evaluate">
                        <div className="evaluateimg"><img src={evaluation} alt="evaluate" /></div>
                        <div className="text2">EVALUATE</div>
                        <div className="evaluateText">Think of the current issues that are blockers to the objectives and hurdles to the overall development.
                        </div>
                    </div>

                    <div className="engage">
                        <div className="engageimg"><img src={engagement} alt="engage" /></div>
                        <div className="text3">ENGAGE</div>
                        <div className="engageText">Youth is the best solution for the problems. Engage yourself to think through it and eliminate the hurdles assessed.</div>
                    </div>

                    <div className="elevate">
                        <div className="elevateimg"><img src={e} alt="elevate" /></div>
                        <div className="text4">ELEVATE</div>
                        <div className="elevateText">When you are into it, know how to act and handle it. Just feel the drive, be a touchstone to drive others!</div>
                    </div>
                </div>
                <div className="MoreInfoImagineBox">
                    <div className="MoreInfoImagineLeft">
                        <div className="MoreInfoImagineLeftText">
                            <div className="MoreInfoImagineLeftBox">
                                <div className="MoreInfoImagineLeftLine">
                                    Let's think of it <br />
                                    <span>together..</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="MoreInfoImagineCenter"></div>
                    <div className="MoreInfoImagineRight">
                        <div className="MoreInfoImagineRightText">
                            <div className="MoreInfoImagineRightBox">
                                <div className="MoreInfoImagineRightLineH1">
                                    Have 1 Adorable Planet
                                </div>
                                <div className="MoreInfoImagineRightLineH2">
                                    9000+ Youth Potential
                                </div>
                                <div className="MoreInfoImagineRightLineH3">
                                    1000+ Opportunities
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MoreInfoPledgeBottom">
                <div className="MoreInfoPledgeBottomBox">
                    <div className="MoreInfoPledgeBottomHead">Your voice does make a difference.</div>
                    <div className="MoreInfoPledgeBottomHeadText">
                        <div className="MoreInfoPledgeBottomHeadLine">
                            We’re all in this together. Join others in showing your support of a healthier, more responsible tomorrow.
                        </div>
                    </div>
                    <div className="MoreInfoPledgeBottomHands">
                        <img src={united} alt="united" />
                    </div>
                    <div className="MoreInfoPledgeBottomBtn">
                    <Link to="/Contactus"><button>COME AND JOIN US..</button></Link>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Home;
